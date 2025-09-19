import { ExpenseItem } from "@/lib/types";
import { ExpenseStorage } from "@/Store/ExpenseStore";
import { create } from "zustand";

interface ExpenseState {
  expenses: ExpenseItem[];
  spent: number;
  refreshData: () => Promise<void>;
  addExpense: (expense: ExpenseItem) => Promise<void>;
  addSpent: (spent: number) => Promise<void>;
}

export const useExpenseStore = create<ExpenseState>((set, get) => ({
  expenses: [],
  spent: 0,

  refreshData: async () => {
    const expenses = await ExpenseStorage.getExpenses();
    const spent = await ExpenseStorage.getSpent();

    set({ expenses: expenses, spent: spent });
  },

  addExpense: async (expense: ExpenseItem) => {
    await ExpenseStorage.addExpense(expense);
    await get().refreshData();
  },

  addSpent: async (spent: number) => {
    await ExpenseStorage.addSpent(spent);
    await get().refreshData();
  },
}));
