import React from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Div, Input, Text } from "react-native-magnus";
import Modal from "@/Components/Modal";
import { HEIGHT } from "@/lib/constants";

const percent = HEIGHT * 0.9;

interface Props {
  modalRef: React.RefObject<BottomSheetModal | null>;
}

export default function ExpenseForm({ modalRef }: Props) {
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
          <Input placeholder="Name" minH={60} focusBorderColor="blue700" />

          <Text fontWeight="600" fontSize="xl">
            Price
          </Text>
          <Input placeholder="Price" minH={60} focusBorderColor="blue700" />

          <Text fontWeight="600" fontSize="xl">
            Type
          </Text>
        </Div>
      </Div>
    </Modal>
  );
}
