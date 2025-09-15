import { ExpenseItem } from "@/lib/types";
import { StoreError } from "@/Utils/asyncStorage";
import AsyncStorage, {
  AsyncStorageStatic,
} from "@react-native-async-storage/async-storage";

const EXPENSE_LIST_KEY = "all-expenses";

class ExpenseStore {
  private store: AsyncStorageStatic;
  private spent: number;

  constructor(store: AsyncStorageStatic) {
    this.store = store;
    this.spent = 0;
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

  public getSpent() {
    return this.spent;
  }

  public async addExpense(expense: ExpenseItem) {
    try {
      const data = await this.store.getItem(EXPENSE_LIST_KEY);
      let expenses: ExpenseItem[] = data ? JSON.parse(data) : [];
      expenses.push(expense);
      await this.store.setItem(EXPENSE_LIST_KEY, JSON.stringify(expenses));

      this.spent = this.spent + expense.price;
    } catch (err) {
      throw new StoreError(`Failed to add expense`);
    }
  }
}

export const ExpenseStorage = new ExpenseStore(AsyncStorage);
