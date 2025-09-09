import AsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
import { MockStore } from ".";

enum ExpenseType {
  Food = "Food",
  Transport = "Transport",
  Shopping = "Shopping",
  Other = "Other",
}

type Expense = {
  name: string;
  price: number;
  type: ExpenseType | string;
};

const data: Array<Expense> = [
  { name: "iPhone", price: 7000, type: ExpenseType.Shopping },
  { name: "Chettos", price: 7000, type: ExpenseType.Food },
  { name: "Gas", price: 7000, type: ExpenseType.Other },
];

describe("Storage module", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("set", () => {
    it("should save a object to AsyncStorage", async () => {
      await MockStore.set("expense", data[0]);

      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        "expense",
        JSON.stringify(data[0]),
      );
    });
  });
});
