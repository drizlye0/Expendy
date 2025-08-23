import { Div, DivProps, Text } from "react-native-magnus";

interface Props {
  children: any;
  divProps?: DivProps;
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
    <Div
      alignItems="center"
      justifyContent="center"
      flex={1}
      flexDir="row"
      {...divProps}
    >
      {children}
    </Div>
  );
}

export { Card, CardContent };
