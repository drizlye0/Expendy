import React from "react";
import { Div, Text } from "react-native-magnus";
import { Card, CardContent } from "@/Components/Card";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { useExpenseStore } from "@/Hooks/useExpenseStore";

export default function Stats() {
  const spent = useExpenseStore((state) => state.spent);
  const expensesCount = useExpenseStore((state) => state.expensesCount)

  return (
    <Div flexDir="row" h={130} flex={1} w="100%" justifyContent="space-between">
      <Card divProps={{ mr: 30 }}>
        <CardContent
          divProps={{
            alignItems: "center",
          }}
        >
          <FontAwesome6
            name="dollar-sign"
            iconStyle="solid"
            style={{ fontSize: 20, margin: 15 }}
          />
          <Div ml="none" pl={0}>
            <Text fontSize="lg" fontWeight="bold">
              Total Spent
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              {spent}
            </Text>
          </Div>
        </CardContent>
      </Card>
      <Card>
        <CardContent
          divProps={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <FontAwesome6
            name="calendar"
            iconStyle="solid"
            style={{ fontSize: 20, margin: 15 }}
          />
          <Div>
            <Text fontSize="lg" fontWeight="bold">
              This month
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              {expensesCount}
            </Text>
          </Div>
        </CardContent>
      </Card>
    </Div>
  );
}
