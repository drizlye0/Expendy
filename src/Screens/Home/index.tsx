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
      <ScrollView style={{ flex: 1, padding: 15 }}>
        <Stats />
        <Overview />
        <History />
      </ScrollView>
    </MainContainer>
  );
}
