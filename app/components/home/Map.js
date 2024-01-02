import React, { useContext, useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { UserLocationContext } from "../../context/UserLocationContext";
import { Marker } from "react-native-maps";

export default function Map({ nearByPlaces }) {
  const [region, setRegion] = useState(null);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location && location.coords) {
      setRegion({
        latitude: location.coords.latitude || 0,
        longitude: location.coords.longitude || 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } else {
      console.error("Map: location or its coords are undefined", location);
    }
  }, [location]);

  return (
    <View>
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
          {nearByPlaces &&
            nearByPlaces.map((place, index) => {
              if (
                place &&
                place.geometry &&
                place.geometry.location &&
                place.geometry.location.lat &&
                place.geometry.location.lng
              ) {
                return (
                  index <= 5 && (
                    <Marker
                      key={index}
                      title={place.name}
                      coordinate={{
                        latitude: place.geometry.location.lat,
                        longitude: place.geometry.location.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                    />
                  )
                );
              } else {
                console.error(
                  `Map: nearByPlaces[${index}] or its properties are undefined`,
                  place
                );
                return null; // Skip rendering this marker
              }
            })}
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
