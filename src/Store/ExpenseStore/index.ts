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

  public async init() {
    try {
      const data = await this.store.getItem(EXPENSE_LIST_KEY);
      if (!data) {
        const empty: ExpenseItem[] = [];
        await this.store.setItem(EXPENSE_LIST_KEY, JSON.stringify(empty));
      }
    } catch (err) {
      throw new Error("Failed to initialize storage");
    }
  }

  public async getSpent() {
    try {
      const data = await this.store.getItem(SPENT_KEY);
      if (!data) {
        return 0;
      }
      const spent = parseInt(data);
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
}

export const ExpenseStorage = new ExpenseStore(AsyncStorage);
