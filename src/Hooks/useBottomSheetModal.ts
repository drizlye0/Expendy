import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";

export const useBottomSheetModal = () => {
  const ref = useRef<BottomSheetModal | null>(null);

  const handleModalPresent = useCallback(() => {
    ref.current?.present();
  }, []);

  const handleModalClose = useCallback(() => {
    ref.current?.close();
  }, []);

  return { ref, handleModalPresent, handleModalClose };
};
