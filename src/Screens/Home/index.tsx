import React, { useCallback, useRef, useState } from "react";
import MainContainer from "@/Containers/MainContainer";
import { History, Overview, Stats } from "./components";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Icon } from "react-native-magnus";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import ExpenseForm from "../ExpenseForm";

function AddExpenseButton({
  handleModalPresent,
}: {
  handleModalPresent: () => void;
}) {
  return (
    <Button
      bg="black"
      rounded="circle"
      w={35}
      h={35}
      mr={10}
      onPress={() => handleModalPresent()}
    >
      <Icon name="plus" fontFamily="FontAwesome" color="white" fontSize="sm" />
    </Button>
  );
}

export default function Home() {
  const bottomSheetModalRef = useRef<BottomSheetModal | null>(null);

  const handleModalPresent = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <MainContainer
      headerProps={{
        heading: "Expenses",
        suffix: <AddExpenseButton handleModalPresent={handleModalPresent} />,
      }}
    >
      <ScrollView
        style={{ flex: 1, paddingRight: 15, paddingLeft: 15 }}
        showsVerticalScrollIndicator={false}
      >
        <Stats />
        <Overview />
        <History />
      </ScrollView>
      <ExpenseForm ref={bottomSheetModalRef} />
    </MainContainer>
  );
}
