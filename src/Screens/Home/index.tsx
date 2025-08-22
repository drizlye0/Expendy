import Card from "@/Components/Card";
import MainContainer from "@/Containers/MainContainer";
import { Div, Text } from "react-native-magnus";

export default function Home() {
  return (
    <MainContainer
      headerProps={{
        heading: "Home"
      }}
    >
      <Div p={10} flex={1}>
        <Div flexDir="row" h={130}>
          <Card
            divProps={{
              mr: 10,
            }}
          >
            <Text>Hello</Text>
          </Card>
          <Card>
            <Text>Hello</Text>
          </Card>
          </Div>
      </Div>
    </MainContainer>
  )
}
