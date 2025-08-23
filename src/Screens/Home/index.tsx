import React from "react"
import MainContainer from "@/Containers/MainContainer";
import { Div } from "react-native-magnus";
import { History, Overview, Stats } from "./components";

export default function Home() {
  return (
    <MainContainer
      headerProps={{
        heading: "Expenses",
      }}
    >
      <Div p={10} flex={1}>
        <Stats />
        <Overview />
        <History />
      </Div>
    </MainContainer>
  );
}
