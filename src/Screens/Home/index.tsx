import React from "react";
import MainContainer from "@/Containers/MainContainer";
import { History, Overview, Stats } from "./components";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <MainContainer
      headerProps={{
        heading: "Expenses",
      }}
    >
      <ScrollView style={{ flex: 1, paddingRight: 15, paddingLeft: 15 }}>
        <Stats />
        <Overview />
        <History />
      </ScrollView>
    </MainContainer>
  );
}
