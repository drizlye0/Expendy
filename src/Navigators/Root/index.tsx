import Home from "@/Screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator()

export default function RootStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />
    </Navigator>
  )
}
