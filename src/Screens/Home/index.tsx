import React, { useState } from "react";
import MainContainer from "@/Containers/MainContainer";
import { History, Overview, Stats } from "./components";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Icon } from "react-native-magnus";
import AddExpense from "../AddExpense";

function AddExpenseButton() {
  const [visible, setVisible] = useState(false);

  return (
    <Button
      bg="black"
      rounded="circle"
      w={35}
      h={35}
      mr={10}
      onPress={() => setVisible(!visible)}
    >
      <Icon name="plus" fontFamily="FontAwesome" color="white" fontSize="sm" />
      <AddExpense visible={visible} setVisible={setVisible} />
    </Button>
  );
}

export default function Home() {
  return (
    <MainContainer
      headerProps={{
        heading: "Expenses",
        suffix: <AddExpenseButton />,
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
    </MainContainer>
  );
}
