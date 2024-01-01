import { View, Text, FlatList, TouchableOpacity } from "react-native";
import PlaceCard from "./PlaceCard";
import BigPlaceCard from "./BigPlaceCard";

const Places = ({ places }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20 }}>Found {places.length} Nearby Places</Text>
      <FlatList
        data={places}
        style={{ marginTop: 0 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.place_id}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index}>
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
