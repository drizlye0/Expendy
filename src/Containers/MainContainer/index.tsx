import { Div, Header } from "react-native-magnus"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface HeaderProps {
  heading: string
}

interface Props {
  children: any
  headerProps: HeaderProps
}

export default function MainContainer({ children, headerProps }: Props) {
  const { top, bottom } = useSafeAreaInsets()
  return (
    <Div bg="white" flex={1} pt={top} pb={bottom}>
      <Header
        p="none"
        shadow="none"
        alignment="center"
        minH={56}
        fontWeight="bold"
        fontSize={18}
        lineHeight={26}
        textTransform="none"
      >
        {headerProps.heading}
      </Header>
      {children}
    </Div>
  )
}
