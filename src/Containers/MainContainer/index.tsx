import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { Div, Header, Button, Icon } from "react-native-magnus";
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
  const isDarkMode = useColorScheme() === 'dark';
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation()

  return (
    <Div bg="white" flex={1} pt={top} pb={bottom}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'}/>
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
        prefix={headerProps.prefix ? headerProps.prefix : (
          <Button bg="transparent" onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" fontFamily="FontAwesome5" />
          </Button>
        )
        }
      >
        {headerProps.heading}
      </Header>
      {children}
    </Div>
  );
}
