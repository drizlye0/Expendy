import React from "react";
import { Card, CardContent, CardTitle } from "@/Components/Card";
import { Pie, PolarChart } from "victory-native";
import ChartLegend from "@/Components/ChartLegend";
import { Text } from "react-native-magnus";
import { useExpenseStore } from "@/Hooks/useExpenseStore";
import { ExpenseTypeCount } from "@/lib/types";
import Label from "@/Components/Label";

const blankData: ExpenseTypeCountWithColor[] = [
  { type: "nothing", size: 1, color: "#000000" },
];

type ExpenseTypeCountWithColor = ExpenseTypeCount & { color: string };

function Overview() {
  const expensesTypeCount = useExpenseStore((state) => state.expenseTypeCount);
  const chartData = expensesTypeCount;

  return (
    <Card
      divProps={{
        flexDir: "column",
        minH: 350,
        mt: 18,
      }}
    >
      <CardTitle
        iconProps={{ name: "pie-chart", color: "black" }}
        title="Spending Overview"
      ></CardTitle>
      <CardContent
        divProps={{
          flexDir: "column",
          pb: 15,
        }}
      >
        <PolarChart
          data={chartData.length ? chartData : blankData}
          labelKey={"type"}
          valueKey={"size"}
          colorKey={"color"}
        >
          <Pie.Chart innerRadius={60} size={220} />
        </PolarChart>
        <ChartLegend>
          {chartData.length === 0 && <Text opacity={0.6}>No Expenses</Text>}
          {chartData.map((expenseType, key) => {
            return (
              <Label
                text={expenseType.type}
                iconProps={{ name: "shopping-basket" }}
                key={key}
              />
            );
          })}
        </ChartLegend>
      </CardContent>
    </Card>
  );
}

export default React.memo(Overview);
