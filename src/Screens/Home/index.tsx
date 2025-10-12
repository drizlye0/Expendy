import React from "react";
import MainContainer from "@/Containers/MainContainer";
import { History, Overview, Stats } from "./Components";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Icon } from "react-native-magnus";
import ExpenseForm from "../ExpenseForm";
import { useBottomSheetModal } from "@/Hooks/useBottomSheetModal";
import { useNavigation } from "@react-navigation/native";

function AddExpenseButton({
  handleModalPresent,
}: {
  handleModalPresent: () => void;
}) {
  const navigation = useNavigation();

  return (
    <Button
      bg="black"
      rounded="circle"
      w={35}
      h={35}
      mr={10}
      onPress={() => navigation.navigate("AddExpense")}
    >
      <Icon name="plus" fontFamily="FontAwesome" color="white" fontSize="sm" />
    </Button>
  );
}

export default function Home() {
  const { ref, handleModalPresent } = useBottomSheetModal();

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
      <ExpenseForm modalRef={ref} />
    </MainContainer>
  );
}
