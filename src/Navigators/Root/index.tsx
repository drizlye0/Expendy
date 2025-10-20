import React from 'react';
import Home from '@/Screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddExpense from '@/Screens/AddExpense';
import ExpendyCamera from '@/Components/ExpendyCamera';
import ExpenseForm from '@/Screens/ExpenseForm';

export type RootStackParamList = {
  Home: undefined;
  AddExpense: undefined;
  ExpenseForm: { photoUri: string } | undefined;
  ExpendyCamera:
    | {
        onPhotoTaken: (uri: string) => void;
      }
    | undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="AddExpense" component={AddExpense} />
      <Screen name="ExpendyCamera" component={ExpendyCamera} />
      <Screen name="ExpenseForm" component={ExpenseForm} />
    </Navigator>
  );
}
