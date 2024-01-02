import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./app/navigation/BottomTab";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

import * as Location from "expo-location";
import { UserLocationContext } from "./app/context/UserLocationContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (location === null) {
    // Return a loading state or indicator if location is still being fetched
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </UserLocationContext.Provider>
  );
}
