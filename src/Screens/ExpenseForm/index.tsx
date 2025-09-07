import { useCallback, useEffect, useState } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BackHandler, Dimensions } from "react-native";
import { Text } from "react-native-magnus";

const { height } = Dimensions.get("screen");
const percent = height * 0.9;

interface Props {
  ref: React.RefObject<BottomSheetModal | null>;
}

export default function ExpenseForm({ ref }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

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

  const onBackPress = () => {
    if (ref !== null) {
      ref.current?.close();
      return true;
    }
  };

  useEffect(() => {
    if (currentIndex !== -1) {
      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress,
      );

      return () => subscription.remove();
    }
  }, [currentIndex]);

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      backdropComponent={renderBackdrop}
      onChange={(index) => {
        setCurrentIndex(index);
      }}
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
