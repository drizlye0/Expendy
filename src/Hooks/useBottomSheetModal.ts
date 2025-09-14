import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";

export const useBottomSheetModal = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal | null>(null);
  const handleModalPresent = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return { bottomSheetModalRef, handleModalPresent };
};
