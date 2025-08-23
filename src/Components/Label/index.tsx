import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import React, { ComponentProps } from "react";
import { Div, Text } from "react-native-magnus";

interface Props {
  text: string;
  textProps?: ComponentProps<typeof Text>;
  iconProps: ComponentProps<typeof FontAwesome6>;
}

export default function Label({ text, textProps, iconProps }: Props) {
  return (
    <Div flexDir="row" alignItems="center">
      <FontAwesome6
        {...iconProps}
        style={{
          marginRight: 2,
        }}
      />
      <Text {...textProps}>{text}</Text>
    </Div>
  );
}
