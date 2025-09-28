import { StatusBar } from "expo-status-bar";
import React from "react";
import { Div, Header } from "react-native-magnus";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
  heading: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}

interface Props {
  children: React.ReactNode;
  headerProps: HeaderProps;
}

export default function MainContainer({ children, headerProps }: Props) {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <Div bg="white" flex={1} pt={top} pb={bottom}>
      <StatusBar style="auto"/>
      <Header
        p="none"
        shadow="none"
        alignment="center"
        minH={56}
        fontWeight="bold"
        fontSize={18}
        lineHeight={26}
        textTransform="none"
        suffix={headerProps.suffix ? headerProps.suffix : null}
        prefix={headerProps.prefix ? headerProps.prefix : null}
      >
        {headerProps.heading}
      </Header>
      {children}
    </Div>
  );
}
