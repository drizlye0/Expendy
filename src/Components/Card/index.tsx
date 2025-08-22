import { Div, DivProps, Text } from "react-native-magnus";

interface Props {
  children: any
  divProps?: DivProps
}

export default function Card({ children, divProps }: Props) {
  return (
    <Div
      bg="gray200"
      minH={100}
      w="auto"
      p={5}
      m={2}
      rounded="lg"
      flex={1}
      shadow="sm"
      {...divProps}
    >
      {children}
    </Div>
  )
}
