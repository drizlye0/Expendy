import { Card, CardContent, CardTitle } from '@/Components/Card';
import MainContainer from '@/Containers/MainContainer';
import { useExpenseStore } from '@/Hooks/useExpenseStore';
import { useNavigation } from '@react-navigation/native';
import { Div, Text, Button, ScrollDiv } from 'react-native-magnus';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ExpenseItem } from '@/lib/types';

export default function AddExpense() {
  const navigator = useNavigation();
  const expenses = useExpenseStore(state => state.expenses);
  const addExpense = useExpenseStore(state => state.addExpense);

  const handleAddExpense = (expense: ExpenseItem) => {
    addExpense(expense);
    navigator.goBack();
  };

  return (
    <MainContainer
      headerProps={{
        heading: 'Add Expense',
      }}
    >
      {expenses.length === 0 && (
        <Div flex={1} justifyContent="center" alignItems="center">
          <Text color="black" opacity={0.5}>
            No expenses
          </Text>
        </Div>
      )}

      {expenses.length > 0 && (
        <ScrollDiv>
          {expenses.map((expense, key) => {
            const parsedDate = new Date(expense.date);
            const formatedDate = new Intl.DateTimeFormat('en-US').format(
              parsedDate,
            );

            return (
              <Card key={key}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ flex: 1, flexDirection: 'row' }}
                  onPress={() =>
                    handleAddExpense({
                      name: expense.name,
                      price: expense.price,
                      type: expense.type,
                      date: new Date().toString(),
                    })
                  }
                >
                  <Div flex={1}>
                    <CardTitle title={expense.name} />
                    <CardContent divProps={{ justifyContent: 'space-between' }}>
                      <Div
                        justifyContent="space-around"
                        flexDir="row"
                        w={'100%'}
                      >
                        <Text>${expense.price}</Text>
                        <Text>{expense.type}</Text>
                        <Text>{formatedDate}</Text>
                      </Div>
                    </CardContent>
                  </Div>
                  <Div flex={0.5}>
                    <Image
                      source={{ uri: expense.imageUri }}
                      style={StyleSheet.absoluteFill}
                    />
                  </Div>
                </TouchableOpacity>
              </Card>
            );
          })}
        </ScrollDiv>
      )}

      <Div flex={1} justifyContent="flex-end" alignItems="center">
        <Button
          onPress={() => navigator.navigate('ExpenseForm')}
          alignSelf="center"
          w={'100%'}
          fontWeight="bold"
        >
          Add New Expense
        </Button>
      </Div>
    </MainContainer>
  );
}
