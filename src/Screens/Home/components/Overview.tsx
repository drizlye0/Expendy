import React from "react";
import { Card, CardContent } from "@/Components/Card";
import {  PieChart } from "react-native-gifted-charts";
import { Div, Text } from "react-native-magnus";

export default function Overview() {
  const pieData = [
    { value: 10, color: "#177AD5" },
    { value: 6, color: "#79D2DE" },
    { value: 2, color: "#ED6665" },
  ];

  return (
    <Card>
      <CardContent
        divProps={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <PieChart
          donut
          showTooltip
          textColor="black"
          radius={120}
          extraRadius={5}
          showTextBackground
          textBackgroundRadius={26}
          centerLabelComponent={() => {
            return (
              <Div>
                <Text>Total</Text>
              </Div>
            );
          }}
          data={pieData}
        />
      </CardContent>
    </Card>
  );
}
