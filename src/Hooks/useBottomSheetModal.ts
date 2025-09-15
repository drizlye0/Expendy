import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";

export const useBottomSheetModal = () => {
  const ref = useRef<BottomSheetModal | null>(null);
  const handleModalPresent = useCallback(() => {
    ref.current?.present();
  }, []);

  return { ref, handleModalPresent };
};
