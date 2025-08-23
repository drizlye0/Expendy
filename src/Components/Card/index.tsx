import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import React, { ComponentProps } from "react";
import { Div, DivProps } from "react-native-magnus";

interface Props {
  children: React.ReactNode;
  divProps?: DivProps;
}

interface CardTitleProps {
  children: React.ReactNode;
  divProps?: DivProps;
  iconProps: ComponentProps<typeof FontAwesome6>;
}

function Card({ children, divProps }: Props) {
  return (
    <Div
      bg="#f8fafc"
      minH={100}
      w="auto"
      p={5}
      m={2}
      rounded="lg"
      flex={1}
      shadow="sm"
      borderColor="gray500"
      borderWidth={0.3}
      {...divProps}
    >
      {children}
    </Div>
  );
}

function CardContent({ children, divProps }: Props) {
  return (
    <Div flex={1} flexDir="row" {...divProps}>
      {children}
    </Div>
  );
}

function CardTitle({ children, divProps, iconProps }: CardTitleProps) {
  return (
    <Div flexDir="row" alignItems="flex-end" m="10" {...divProps}>
      <FontAwesome6
        {...iconProps}
        style={{
          marginLeft: 5,
          marginRight: 5,
          fontSize: 17,
        }}
      />
      {children}
    </Div>
  );
}

export { Card, CardContent, CardTitle };
