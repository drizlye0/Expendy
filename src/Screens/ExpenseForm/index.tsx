import React, { useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Div, Input, Text, Button } from "react-native-magnus";
import Modal from "@/Components/Modal";
import { HEIGHT } from "@/lib/constants";
import { FormSelect } from "@/Components/Form/FormSelect";
import { useExpenseStore } from "@/Hooks/useExpenseStore";
import { ExpenseItem } from "@/lib/types";

const percent = HEIGHT * 0.9;

interface Props {
  modalRef: React.RefObject<BottomSheetModal | null>;
}

export default function ExpenseForm({ modalRef }: Props) {
  const [expenseType, setExpenseType] = useState<string>("");
  const [expenseName, setExpenseName] = useState<string>("");
  const [expensePrice, setExpensePrice] = useState<number>(0);
  const addExpense = useExpenseStore((state) => state.addExpense);

  const clearState = () => {
    setExpensePrice(0);
    setExpenseName("");
    setExpenseType("");
  };

  const handleAddExpense = () => {
    const expense: ExpenseItem = {
      name: expenseName,
      price: expensePrice,
      type: expenseType,
    };
    addExpense(expense);
    clearState();
    modalRef.current?.dismiss();
  };

  return (
    <Modal ref={modalRef} height={percent}>
      <Div flex={1} justifyContent="flex-start" alignItems="center" m={20}>
        <Div alignItems="flex-start" minW={350} mb={10}>
          <Text textAlign="right" fontSize="5xl" fontWeight="bold">
            Add Expense
          </Text>
        </Div>
        <Div minW={350} minH={300} justifyContent="space-evenly">
          <Text fontWeight="600" fontSize="xl">
            Name
          </Text>
          <Input
            placeholder="Name"
            minH={45}
            focusBorderColor="blue700"
            value={expenseName}
            onChangeText={(name) => setExpenseName(name)}
          />
          <Text fontWeight="600" fontSize="xl">
            Price
          </Text>
          <Input
            placeholder="Price"
            minH={45}
            focusBorderColor="blue700"
            fontSize="md"
            onChangeText={(price) => setExpensePrice(parseInt(price))}
          />
          <Text fontWeight="600" fontSize="xl">
            Type
          </Text>
          <FormSelect
            selected={expenseType}
            setSelected={setExpenseType}
            inputProps={{
              minH: 45,
              placeholder: "Type",
              focusBorderColor: "blue700",
            }}
            options={["Food", "Transport", "Shopping"]}
          />
        </Div>
      </Div>
      <Div flex={1} justifyContent="flex-end" alignItems="center" m={10}>
        <Button
          rounded="md"
          w="100%"
          fontWeight="600"
          onPress={() => handleAddExpense()}
        >
          Add Spent
        </Button>
      </Div>
    </Modal>
  );
}
