import React, { ComponentProps } from "react";
import { Div, DivProps, Icon, Text } from "react-native-magnus";

interface Props {
  children: React.ReactNode;
  divProps?: DivProps;
}

interface CardTitleProps {
  title: string;
  textProps?: ComponentProps<typeof Text>;
  divProps?: DivProps;
  iconProps: ComponentProps<typeof Icon>;
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

function CardTitle({
  title: text,
  textProps,
  divProps,
  iconProps,
}: CardTitleProps) {
  return (
    <Div flexDir="row" alignItems="flex-end" m="10" {...divProps}>
      <Icon
        name={iconProps.name}
        fontFamily="FontAwesome"
        fontSize={17}
        color="black"
        mr={8}
        ml={8}
      />

      <Text fontWeight="bold" fontSize="lg" {...textProps}>
        {text}
      </Text>
    </Div>
  );
}

export { Card, CardContent, CardTitle };
