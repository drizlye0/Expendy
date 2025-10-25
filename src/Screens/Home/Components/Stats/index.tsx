import React from 'react';
import { Div, Icon, Text } from 'react-native-magnus';
import { Card, CardContent, CardTitle } from '@/Components/Card';
import { useExpenseStore } from '@/Hooks/useExpenseStore';

export default function Stats() {
  const spent = useExpenseStore(state => state.spent);
  const expensesCount = useExpenseStore(state => state.expensesCount);

  return (
    <Div flex={1}>
      <Div flexDir="row" flex={1}>
        <Card>
          <CardTitle
            iconProps={{ name: 'hand-holding-usd' }}
            textProps={{ textAlign: 'center' }}
            title="Total Spent"
          />
          <CardContent
            divProps={{ justifyContent: 'center', alignItems: 'flex-start' }}
          >
            <Text fontWeight="bold" fontSize={'3xl'}>
              $ {spent}
            </Text>
          </CardContent>
        </Card>

        <Div flex={0.2}></Div>

        <Card>
          <CardTitle
            iconProps={{ name: 'calendar' }}
            textProps={{ textAlign: 'center' }}
            title="This Month"
          />
          <CardContent
            divProps={{ justifyContent: 'center', alignItems: 'flex-start' }}
          >
            <Text fontWeight="bold" fontSize={'3xl'} textAlign="center">
              {expensesCount}
            </Text>
          </CardContent>
        </Card>
      </Div>
    </Div>
  );
}
