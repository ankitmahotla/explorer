import React, { useContext, useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { UserLocationContext } from "../../context/UserLocationContext";
import { Marker } from "react-native-maps";

export default function Map() {
  const [region, setRegion] = useState(null); // Change to null to match the expected coordinate format
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
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontWeight: 600,
          fontSize: 15,
          marginBottom: 10,
        }}
      >
        Top Nearby Places
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
