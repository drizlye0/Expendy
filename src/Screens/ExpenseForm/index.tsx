import React from "react";
import { useCallback } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Dimensions } from "react-native";
import { Div, Input, Text } from "react-native-magnus";
import { useBottomSheetBackHandler } from "@/Hooks/useBottomSheetBackHandler";

const { height } = Dimensions.get("screen");
const percent = height * 0.9;

interface Props {
  ref: React.RefObject<BottomSheetModal | null>;
}

export default function ExpenseForm({ ref }: Props) {
  const { handleSheetPositionChange } = useBottomSheetBackHandler(ref);

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return (
      <BottomSheetBackdrop
        {...props}
        opacity={0.5}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    );
  }, []);

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      backdropComponent={renderBackdrop}
      onChange={handleSheetPositionChange}
    >
      <BottomSheetView style={{ flex: 1, height: percent }}>
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
      </BottomSheetView>
    </BottomSheetModal>
  );
}
