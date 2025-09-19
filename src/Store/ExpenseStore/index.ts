import { ExpenseItem } from "@/lib/types";
import { StoreError } from "@/Utils/asyncStorage";
import AsyncStorage, {
  AsyncStorageStatic,
} from "@react-native-async-storage/async-storage";

const EXPENSE_LIST_KEY = "all-expenses";
const SPENT_KEY = "spent";

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

  public async addExpense(expense: ExpenseItem) {
    try {
      const data = await this.store.getItem(EXPENSE_LIST_KEY);
      let expenses: ExpenseItem[] = data ? JSON.parse(data) : [];
      expenses.push(expense);

      await this.store.setItem(EXPENSE_LIST_KEY, JSON.stringify(expenses));
      await this.addSpent(expense.price);
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

  public async init() {
    try {
      await this.initSpent();
      await this.initExpenses();
    } catch (err) {
      throw new StoreError("Failed to initialize storage");
    }
  }

  public async clearAllValues() {
    try {
      const keys = [SPENT_KEY, EXPENSE_LIST_KEY];
      keys.map(async (key) => {
        await this.store.removeItem(key);
      });
    } catch (err) {
      throw new StoreError(`Failed to clear all values`);
    }
  }
}

export const ExpenseStorage = new ExpenseStore(AsyncStorage);
