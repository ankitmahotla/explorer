import { View } from "react-native";
import Colors from "../../shared/Color";
import { Dimensions, FlatList, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BusinessItem from "./BusinessItem";
import { useNavigation } from "@react-navigation/native";

export default function BusinessList({ places }) {
  const navigation = useNavigation();
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", Colors.WHITE]}
        style={{ padding: 20, width: Dimensions.get("screen").width }}
      >
        <FlatList
          data={places}
          horizontal={true}
          renderItem={({ item, index }) =>
            index <= 6 && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("PlaceDetail", {
                    place: item,
                  })
                }
              >
                <BusinessItem place={item} />
              </TouchableOpacity>
            )
          }
        />
      </LinearGradient>
    </View>
  );
}
