import React from "react";
import { Card, CardContent, CardTitle } from "@/Components/Card";
import { Article } from "@/Components/Article";
import { useExpenseStore } from "@/Hooks/useExpenseStore";
import { Div, Text } from "react-native-magnus";

export default function History() {
  const expenses = useExpenseStore((state) => state.expenses);
  const recentExpenses = expenses.slice(-4).reverse();

  return (
    <Card
      divProps={{
        minH: 200,
        mt: 18,
        mb: 18,
      }}
    >
      <CardContent divProps={{ flex: 0, flexDir: "column" }}>
        <CardTitle iconProps={{ name: "history" }} title="Recent Expenses" />
        {recentExpenses.length === 0 && (
          <>
            <Div flex={1} minH={100} justifyContent="center" alignItems="center">
              <Text opacity={0.6}>No Expenses</Text>
            </Div>
          </>
        )}
        {recentExpenses.length > 0 &&
          recentExpenses.map((expense, key) => {
            return (
              <Article key={key} article={expense}>
                <Article.Content>
                  <Article.Left>
                    <Article.Title />
                    <Article.Date />
                  </Article.Left>
                  <Article.Right>
                    <Article.Price />
                    <Article.Category />
                  </Article.Right>
                </Article.Content>
              </Article>
            );
          })}
      </CardContent>
    </Card>
  );
}
