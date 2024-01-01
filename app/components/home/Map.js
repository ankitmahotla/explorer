import React, { useContext, useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { UserLocationContext } from "../../context/UserLocationContext";
import { Marker } from "react-native-maps";

export default function Map() {
  const [region, setRegion] = useState(null);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  return (
    <View style={{}}>
      <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: "600" }}>
        Top Near By Places
      </Text>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={region}
        >
          {region && <Marker title="You" coordinate={region} />}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    borderRadius: 20,
    overflow: "hidden",
  },
  map: {
    width: Dimensions.get("screen").width * 0.95,
    height: Dimensions.get("screen").height * 0.25,
  },
});
