import React from "react";
import { Div, Text } from "react-native-magnus";
import { Card, CardContent } from "@/Components/Card";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

export default function Stats() {
  return (
    <Div flexDir="row" h={130}>
      <Card
        divProps={{
          mr: 10,
        }}
      >
        <CardContent
          divProps={{
            justifyContent: "flex-start",
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
              127.00
            </Text>
          </Div>
        </CardContent>
      </Card>
      <Card
        divProps={{
          mr: 10,
        }}
      >
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
              3
            </Text>
          </Div>
        </CardContent>
      </Card>
    </Div>
  );
}
