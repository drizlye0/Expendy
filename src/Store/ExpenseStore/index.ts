import { ExpenseItem, ExpenseTypeCount } from "@/lib/types";
import { StoreError } from "@/Utils/asyncStorage";
import { generateRandomColor } from "@/Utils/generateRandomColor";
import AsyncStorage, {
  AsyncStorageStatic,
} from "@react-native-async-storage/async-storage";

const EXPENSE_LIST_KEY = "all-expenses";
const SPENT_KEY = "spent";
const EXPENSE_TYPES_KEY = "expenses-types";
const EXPENSES_COUNT = " expenses-count";

class ExpenseStore {
  private store: AsyncStorageStatic;

  constructor(store: AsyncStorageStatic) {
    this.store = store;
  }

  public async getSpent() {
    try {
      const data = await this.store.getItem(SPENT_KEY);
      const spent = parseInt(data ? data : "0");
      return spent;
    } catch (err) {
      throw new StoreError(`Failed to get spent`);
    }
  }

  public async addSpent(amount: number) {
    try {
      const spent = await this.getSpent();
      const totalSpent = spent + amount;

      await this.store.setItem(SPENT_KEY, totalSpent.toString());
    } catch (err) {
      throw new StoreError(`Failed to add spent`);
    }
  }

  public async getExpensesCount() {
    try {
      const data = await this.store.getItem(EXPENSES_COUNT);
      const expensesCount = parseInt(data ? data : "0");

      return expensesCount;
    } catch (err) {
      throw new StoreError(`Failed to get expense count`);
    }
  }

  public async increaseExpensesCount() {
    try {
      const expensesCount = await this.getExpensesCount();
      const total = expensesCount + 1;

      await this.store.setItem(EXPENSES_COUNT, total.toString());
    } catch (err) {
      throw new StoreError(`Failed to get expense count`);
    }
  }

  private async updateExpensesTypesCount(expense: ExpenseItem) {
    try {
      const data = await this.store.getItem(EXPENSE_TYPES_KEY);
      let types: ExpenseTypeCount[] = data ? JSON.parse(data) : [];

      const index = types.findIndex((t) => t.type === expense.type);

      if (index !== -1) {
        types[index].size += 1;
      } else {
        types.push({
          type: expense.type,
          size: 1,
          color: generateRandomColor(),
        });
      }

      await this.store.setItem(EXPENSE_TYPES_KEY, JSON.stringify(types));
    } catch (err) {
      throw new Error(`Failed to update expense types`);
    }
  }

  public async getExpensesTypeCount(): Promise<ExpenseTypeCount[]> {
    try {
      const data = await this.store.getItem(EXPENSE_TYPES_KEY);
      return data ? JSON.parse(data) : [];
    } catch (err) {
      throw new Error(`Failed to get expense type count`);
    }
  }

  public async addExpense(expense: ExpenseItem) {
    try {
      const data = await this.store.getItem(EXPENSE_LIST_KEY);
      let expenses: ExpenseItem[] = data ? JSON.parse(data) : [];
      expenses.push(expense);

      await this.store.setItem(EXPENSE_LIST_KEY, JSON.stringify(expenses));
      await this.addSpent(expense.price);
      await this.increaseExpensesCount();
      await this.updateExpensesTypesCount(expense);
    } catch (err) {
      throw new StoreError(`Failed to add expense`);
    }
  }

  public async getExpenses() {
    try {
      const data = await this.store.getItem(EXPENSE_LIST_KEY);
      const expenses: ExpenseItem[] = data ? JSON.parse(data) : [];
      return expenses;
    } catch (err) {
      throw new StoreError(`Failed to get all expenses`);
    }
  }

  private async initSpent() {
    try {
      const spent = await this.store.getItem(SPENT_KEY);
      if (!spent) {
        await this.store.setItem(SPENT_KEY, "0");
      }
    } catch (err) {
      throw new StoreError(`Failed to initialize spent value`);
    }
  }

  private async initExpenses() {
    try {
      const expenses = await this.store.getItem(EXPENSE_LIST_KEY);
      if (!expenses) {
        await this.store.setItem(EXPENSE_LIST_KEY, JSON.stringify([]));
      }
    } catch (err) {
      throw new StoreError(`Failed to initialize expenses value`);
    }
  }
  private async initExpenseTypesCount() {
    try {
      const types = await this.store.getItem(EXPENSE_TYPES_KEY);
      if (!types) {
        await this.store.setItem(EXPENSE_TYPES_KEY, JSON.stringify([]));
      }
    } catch (err) {
      throw new StoreError(`Failed to initialize expense types value`);
    }
  }

  public async init() {
    try {
      await this.initSpent();
      await this.initExpenses();
      await this.initExpenseTypesCount();
    } catch (err) {
      throw new StoreError("Failed to initialize storage");
    }
  }

  public async clearAllValues() {
    try {
      const keys = [SPENT_KEY, EXPENSE_LIST_KEY, EXPENSE_TYPES_KEY];
      keys.map(async (key) => {
        await this.store.removeItem(key);
      });
    } catch (err) {
      throw new StoreError(`Failed to clear all values`);
    }
  }
}

export const ExpenseStorage = new ExpenseStore(AsyncStorage);
