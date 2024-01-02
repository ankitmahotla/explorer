import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "../screens/Home";
import Details from "../screens/Details";

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...(true && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={Details}
        screenOptions={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
