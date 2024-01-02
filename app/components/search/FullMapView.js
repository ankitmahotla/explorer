import React, { useContext, useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { UserLocationContext } from "../../context/UserLocationContext";
import { Marker } from "react-native-maps";

export default function FullMapView({ nearByPlaces }) {
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
    <View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={region}
        >
          {region && <Marker title="You" coordinate={region} />}
          {nearByPlaces &&
            nearByPlaces.map(
              (place, index) =>
                index <= 4 && (
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
            )}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    overflow: "hidden",
  },
  map: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * 0.9,
  },
});
