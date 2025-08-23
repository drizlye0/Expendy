import { Div, Text } from "react-native-magnus";
import { Card, CardContent } from "@/Components/Card";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

export default function Stats() {
  return (
    <Div flexDir="row" h={130}>
      <Card
        divProps={{
          mr: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CardContent>
          <FontAwesome6
            name="dollar-sign"
            iconStyle="solid"
            style={{ fontSize: 20, paddingRight: 10}}
          />
          <Div ml={0} pl={0}>
            <Text fontSize="lg" fontWeight="500">Total Spent</Text>
            <Text fontSize="2xl" fontWeight="bold">127.00</Text>
          </Div>
        </CardContent>
      </Card>
      <Card
        divProps={{
          mr: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CardContent>
          <FontAwesome6
            name="calendar"
            iconStyle="solid"
            style={{ fontSize: 20, paddingRight: 10 }}
          />
          <Div>
            <Text fontSize="lg" fontWeight="500">This month</Text>
            <Text fontSize="2xl" fontWeight="bold">3</Text>
          </Div>
        </CardContent>
      </Card>
    </Div>
  );
}
