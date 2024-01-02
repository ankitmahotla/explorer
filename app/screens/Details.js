import { Text } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PlaceDetailItem from "../components/home/PlaceDetailItem";
import Colors from "../shared/Color";
import Map from "../components/home/Map";
import { Linking, ScrollView, Platform, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Details() {
  const param = useRoute().params;
  const [place, setPlace] = useState([]);

  useEffect(() => {
    setPlace(param.place);
  }, []);

  const onDirectionClick = () => {
    const url = Platform.select({
      ios:
        "maps:" +
        place.geometry.location.lat +
        "," +
        place.geometry.location.lng +
        "?q=" +
        place.vicinity,
      android:
        "geo:" +
        place.geometry.location.lat +
        "," +
        place.geometry.location.lng +
        "?q=" +
        place.vicinity,
    });

    Linking.openURL(url);
  };
  return (
    <ScrollView style={{ padding: 20, backgroundColor: Colors.WHITE, flex: 1 }}>
      <PlaceDetailItem
        place={place}
        onDirectionClick={() => onDirectionClick()}
      />
      <Map nearByPlaces={[place]} />
      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          alignContent: "center",
          alignItem: "center",
          margin: 8,
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          paddingBottom: 15,
        }}
        onPress={() => onDirectionClick()}
      >
        <Ionicons name="navigate-circle-outline" size={30} color="white" />

        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Get Direction on Google Map
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
