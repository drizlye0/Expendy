import RootStack from "@/Navigators/Root";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ExpenseStorage } from "@/Store/ExpenseStore";
import { useExpenseStore } from "@/Hooks/useExpenseStore";

export default function App() {
  const useExpenseStoreInit = useExpenseStore((state) => state.refreshData);

  useEffect(() => {
    const init = async () => {
      await ExpenseStorage.init();
      await useExpenseStoreInit();
    };

    init();
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
