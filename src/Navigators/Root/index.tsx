import React from "react";
import Home from "@/Screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddExpense from "@/Screens/AddExpense";

const { Navigator, Screen } = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="AddExpense" component={AddExpense} />
    </Navigator>
  );
}
