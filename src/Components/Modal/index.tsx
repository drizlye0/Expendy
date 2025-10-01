import { useBottomSheetBackHandler } from "@/Hooks/useBottomSheetBackHandler";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  ref: React.RefObject<BottomSheetModal | null>;
  children: React.ReactNode;
  modalHeight?: number;
  snapPoints?: Array<string>;
}

const ModalBackdrop = (props: BottomSheetBackdropProps) => {
  return (
    <BottomSheetBackdrop
      {...props}
      opacity={0.5}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      pressBehavior="close"
    />
  );
};

export default function Modal({
  ref,
  children,
  modalHeight,
  snapPoints,
}: Props) {
  const { handleSheetPositionChange } = useBottomSheetBackHandler(ref);

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints ? snapPoints : []}
      enableDynamicSizing
      enablePanDownToClose
      backdropComponent={ModalBackdrop}
      index={0}
      onChange={handleSheetPositionChange}
      stackBehavior="push"
    >
      <BottomSheetView style={{ flex: 1, minHeight: modalHeight }}>
        <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
      </BottomSheetView>
    </BottomSheetModal>
  );
}
