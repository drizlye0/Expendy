import React, { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';
import { Div, DivProps, Icon, Text } from 'react-native-magnus';

interface Props {
  children: React.ReactNode;
  divProps?: DivProps;
}

interface CardTitleProps {
  title: string;
  textProps?: ComponentProps<typeof Text>;
  divProps?: DivProps;
  iconProps?: ComponentProps<typeof Icon>;
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
    <Div flexDir="row" m="10" {...divProps}>
      {iconProps?.name && (
        <Icon
          name={iconProps ? iconProps.name : 'shopping-basket'}
          fontFamily="FontAwesome5"
          fontSize={17}
          color="black"
          position="absolute"
          left={0}
        />
      )}
      {!textProps?.textAlign && <Div mr={25}></Div>}
      <Text flex={1} fontWeight="bold" fontSize="lg" {...textProps}>
        {text}
      </Text>
    </Div>
  );
}

export { Card, CardContent, CardTitle };
