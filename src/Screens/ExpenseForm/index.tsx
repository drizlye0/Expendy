import React, { useState } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Div, Input, Text, Button, Icon } from 'react-native-magnus';
import { FormSelect } from '@/Components/Form/FormSelect';
import { useExpenseStore } from '@/Hooks/useExpenseStore';
import { ExpenseItem } from '@/lib/types';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainContainer from '@/Containers/MainContainer';

interface Props {
  modalRef: React.RefObject<BottomSheetModal | null>;
}

export default function ExpenseForm() {
  const [expenseType, setExpenseType] = useState<string>('');
  const [expenseName, setExpenseName] = useState<string>('');
  const [expensePrice, setExpensePrice] = useState<number>(0);

  const navigation = useNavigation();
  const addExpense = useExpenseStore(state => state.addExpense);

  const clearState = () => {
    setExpensePrice(0);
    setExpenseName('');
    setExpenseType('');
  };

  const handleAddExpense = () => {
    const expense: ExpenseItem = {
      name: expenseName,
      price: expensePrice,
      type: expenseType,
      date: new Date().toString(),
    };
    addExpense(expense);
    clearState();
  };

  return (
    <MainContainer
      headerProps={{
        heading: 'New Expense',
      }}
    >
      <Div flex={1} justifyContent="flex-start" alignItems="center" m={20}>
        <Div minW={350} minH={300} justifyContent="space-evenly">
          <Text fontWeight="600" fontSize="xl">
            Name
          </Text>
          <Input
            placeholder="Name"
            minH={45}
            autoCapitalize="words"
            focusBorderColor="blue700"
            value={expenseName}
            onChangeText={name => setExpenseName(name)}
          />
          <Text fontWeight="600" fontSize="xl">
            Price
          </Text>
          <Input
            placeholder="Price"
            minH={45}
            inputMode="numeric"
            focusBorderColor="blue700"
            fontSize="md"
            onChangeText={price => setExpensePrice(parseInt(price))}
          />
          <Text fontWeight="600" fontSize="xl">
            Type
          </Text>
          <FormSelect
            selected={expenseType}
            setSelected={setExpenseType}
            inputProps={{
              minH: 45,
              placeholder: 'Type',
              focusBorderColor: 'blue700',
            }}
            options={['Food', 'Transport', 'Shopping']}
          />
        </Div>
        <Div flex={1} justifyContent="center" alignItems="center">
          <Pressable onPress={() => navigation.navigate('ExpendyCamera')}>
            <Text>Add photo</Text>
          </Pressable>
        </Div>
      </Div>
      <Div flex={1} justifyContent="flex-end" alignItems="center" m={10}>
        <Button
          rounded="md"
          w="100%"
          fontWeight="600"
          onPress={() => handleAddExpense()}
        >
          Add Spent
        </Button>
      </Div>
    </MainContainer>
  );
}
