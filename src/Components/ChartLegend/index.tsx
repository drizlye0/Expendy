import React from "react";
import { Div, DivProps } from "react-native-magnus";

interface Props {
  children: React.ReactNode;
  divProps?: DivProps;
}

export default function ChartLegend({ children, divProps }: Props) {
  return (
    <Div flex={1} justifyContent="center" alignItems="center" {...divProps}>
      <Div
        flexDir="row"
        alignItems="center"
        justifyContent="space-around"
        flexWrap="wrap"
        maxW={320}
      >
        {children}
      </Div>
    </Div>
  );
}
