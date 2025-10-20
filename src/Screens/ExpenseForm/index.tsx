import React, { useState } from 'react';
import { Div, Input, Text, Button } from 'react-native-magnus';
import { FormSelect } from '@/Components/Form/FormSelect';
import { useExpenseStore } from '@/Hooks/useExpenseStore';
import { ExpenseItem } from '@/lib/types';
import { Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainContainer from '@/Containers/MainContainer';

export default function ExpenseForm() {
  const [expenseType, setExpenseType] = useState<string>('');
  const [expenseName, setExpenseName] = useState<string>('');
  const [expensePrice, setExpensePrice] = useState<number>(0);
  const [expensePhotoUri, setExpensePhotoUri] = useState<string | null>(null);

  const navigation = useNavigation();
  const addExpense = useExpenseStore(state => state.addExpense);

  const clearState = () => {
    setExpensePrice(0);
    setExpenseName('');
    setExpenseType('');
    setExpensePhotoUri('');
  };

  const handleAddExpense = () => {
    if (expensePhotoUri == null) {
      setExpensePhotoUri('');
    }

    const expense: ExpenseItem = {
      name: expenseName,
      price: expensePrice,
      type: expenseType,
      date: new Date().toString(),
      imageUri: expensePhotoUri ? expensePhotoUri : '',
    };
    addExpense(expense);
    clearState();
    navigation.goBack();
  };

  const handleOpenCamera = () => {
    navigation.navigate('ExpendyCamera', {
      onPhotoTaken: (uri: string) => {
        setExpensePhotoUri(uri);
      },
    });
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
      </Div>
      {expensePhotoUri == null && (
        <Div flex={1} justifyContent="center" alignItems="center">
          <Pressable onPress={handleOpenCamera}>
            <Text>Add photo</Text>
          </Pressable>
        </Div>
      )}
      {expensePhotoUri != null && (
        <Div flex={1.1} justifyContent="center" alignItems="center">
          <Image
            source={{ uri: expensePhotoUri }}
            style={{ flex: 1, height: 200, width: 200 }}
          />
        </Div>
      )}
      <Div flex={0.3} justifyContent="flex-end" alignItems="center" m={10}>
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
