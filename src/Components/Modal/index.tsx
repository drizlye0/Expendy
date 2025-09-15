import { useBottomSheetBackHandler } from "@/Hooks/useBottomSheetBackHandler";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

interface Props {
  ref: React.RefObject<BottomSheetModal | null>;
  children: React.ReactNode;
  height?: number;
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

export default function Modal({ ref, children, height }: Props) {
  const { handleSheetPositionChange } = useBottomSheetBackHandler(ref);

  return (
    <BottomSheetModal
      ref={ref}
      backdropComponent={ModalBackdrop}
      onChange={handleSheetPositionChange}
    >
      <BottomSheetView style={{ flex: 1, height: height }}>
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
}
