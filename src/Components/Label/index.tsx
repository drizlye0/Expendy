import React, { ComponentProps } from "react";
import { Div, Icon, Text } from "react-native-magnus";

interface Props {
  text: string;
  textProps?: ComponentProps<typeof Text>;
  iconProps: ComponentProps<typeof Icon>;
}

export default function Label({ text, textProps, iconProps }: Props) {
  return (
    <Div flexDir="row" alignItems="center">
      <Icon {...iconProps} mr={2} color="black" fontFamily="FontAwesome" />
      <Text fontWeight="bold" {...textProps}>{text}</Text>
    </Div>
  );
}
