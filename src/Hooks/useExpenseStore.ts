import { ExpenseItem, ExpenseTypeCount } from "@/lib/types";
import { ExpenseStorage } from "@/Store/ExpenseStore";
import { create } from "zustand";

interface ExpenseState {
  expenses: ExpenseItem[];
  spent: number;
  expenseTypeCount: ExpenseTypeCount[];
  refreshData: () => Promise<void>;
  addExpense: (expense: ExpenseItem) => Promise<void>;
  addSpent: (spent: number) => Promise<void>;
}

export const useExpenseStore = create<ExpenseState>((set, get) => ({
  spent: 0,
  expenses: [],
  expenseTypeCount: [],

  refreshData: async () => {
    const expenses = await ExpenseStorage.getExpenses();
    const spent = await ExpenseStorage.getSpent();
    const expensesTypesCount = await ExpenseStorage.getExpensesTypeCount();

    set({
      expenses: expenses,
      spent: spent,
      expenseTypeCount: expensesTypesCount,
    });
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
