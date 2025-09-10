import { BottomSheetModal, BottomSheetModalProps } from "@gorhom/bottom-sheet";
import React, { useCallback, useRef } from "react";
import { BackHandler, NativeEventSubscription } from "react-native";

type BottomSheetRef = React.RefObject<BottomSheetModal | null>;

export const useBottomSheetBackHandler = (bottomSheetRef: BottomSheetRef) => {
  const backHandlerSubscriptorRef = useRef<NativeEventSubscription | null>(
    null,
  );
  const handleSheetPositionChange = useCallback<
    NonNullable<BottomSheetModalProps["onChange"]>
  >(
    (index) => {
      const isBottomSheetVisible = index >= 0;
      if (isBottomSheetVisible && !backHandlerSubscriptorRef.current) {
        backHandlerSubscriptorRef.current = BackHandler.addEventListener(
          "hardwareBackPress",
          () => {
            bottomSheetRef.current?.dismiss();
            return true;
          },
        );
      } else if (!isBottomSheetVisible) {
        backHandlerSubscriptorRef.current?.remove();
        backHandlerSubscriptorRef.current = null;
      }
    },
    [bottomSheetRef, backHandlerSubscriptorRef],
  );

  return { handleSheetPositionChange };
};
