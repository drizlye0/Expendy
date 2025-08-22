import MainContainer from "@/Containers/MainContainer";
import { Card, CardContent } from "@/Components/Card";
import { Div, Text } from "react-native-magnus";

function StatsContainer() {
  return (
    <Div flexDir="row" h={130}>
      <Card
        divProps={{
          mr: 10,
        }}
      >
        <CardContent>
          <Text>Hello</Text>
        </CardContent>
      </Card>
      <Card>
        <Text>Hello</Text>
      </Card>
    </Div>
  );
}

export default function Home() {
  return (
    <MainContainer
      headerProps={{
        heading: "Home",
      }}
    >
      <Div p={10} flex={1}>
        <StatsContainer /> 
      </Div>
   </MainContainer>
  );
}
