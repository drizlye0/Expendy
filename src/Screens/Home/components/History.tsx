import React from "react";
import { Card, CardContent } from "@/Components/Card";
import { Text } from "react-native-magnus";

export default function History() {
  return (
    <Card
      divProps={{
        minH: 300,
        mt: 18,
        mb: 18
      }}
    >
      <CardContent>
        <Text>Recent</Text>
      </CardContent>
    </Card>
  );
}
