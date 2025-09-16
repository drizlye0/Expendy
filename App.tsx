import RootStack from "@/Navigators/Root";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ExpenseStorage } from "@/Store/ExpenseStore";

export default function App() {
  useEffect(() => {
    const setup = async () => {
      await ExpenseStorage.init();
    };

    setup();
  }, []);

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
