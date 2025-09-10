import { useCallback } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Dimensions } from "react-native";
import { Text } from "react-native-magnus";
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
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
}
