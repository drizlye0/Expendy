import React from "react";
import { Card, CardContent, CardTitle } from "@/Components/Card";
import { Pie, PolarChart } from "victory-native";
import ChartLegend from "@/Components/ChartLegend";
import { Text } from "react-native-magnus";
import { useExpenseStore } from "@/Hooks/useExpenseStore";

function randomNumber() {
  return Math.floor(Math.random() * 26) + 125;
}
function generateRandomColor(): string {
  // Generating a random number between 0 and 0xFFFFFF
  const randomColor = Math.floor(Math.random() * 0xffffff);
  // Converting the number to a hexadecimal string and padding with zeros
  return `#${randomColor.toString(16).padStart(6, "0")}`;
}

const DATA = Array.from({ length: 5 }, (_, i) => ({
  label: `Label ${i + 1}`,
  highTemp: randomNumber(),
  color: generateRandomColor(),
}));

function Overview() {
  const expensesTypeCount = useExpenseStore((state) => state.expenseTypeCount);

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
          data={DATA}
          labelKey={"label"}
          valueKey={"highTemp"}
          colorKey={"color"}
        >
          <Pie.Chart innerRadius={60} size={220} />
        </PolarChart>
        <ChartLegend>
          {/*TODO: refactor when implments store*/}
          {expensesTypeCount.length === 0 && (
            <Text opacity={0.6}>No Expenses</Text>
          )}
        </ChartLegend>
      </CardContent>
    </Card>
  );
}

export default React.memo(Overview);
