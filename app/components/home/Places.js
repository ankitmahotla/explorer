import { View, Text, FlatList, TouchableOpacity } from "react-native";
import PlaceCard from "./PlaceCard";
import BigPlaceCard from "./BigPlaceCard";
import { useNavigation } from "@react-navigation/native";

const Places = ({ places }) => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate("PlaceDetail", { place: item });
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20 }}>Found {places.length} Nearby Places</Text>
      <FlatList
        data={places}
        style={{ marginTop: 0 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.place_id}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} onPress={() => handlePress(item)}>
            {index % 4 == 0 ? (
              <BigPlaceCard place={item} />
            ) : (
              <PlaceCard place={item} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Places;
