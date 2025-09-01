import React from "react";
import { Card, CardContent, CardTitle } from "@/Components/Card";
import { Pie, PolarChart } from "victory-native";
import ChartLegend from "@/Components/ChartLegend";
import Label from "@/Components/Label";

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

export default function Overview() {
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
          <Label
            iconProps={{
              name: "car",
            }}
            text="Transport"
          />
          <Label
            iconProps={{
              name: "car",
            }}
            text="Transport"
          />

          <Label
            iconProps={{
              name: "car",
            }}
            text="Transport"
          />

          <Label
            iconProps={{
              name: "car",
            }}
            text="Transport"
          />

          <Label
            iconProps={{
              name: "car",
            }}
            text="Transport"
          />
        </ChartLegend>
      </CardContent>
    </Card>
  );
}
