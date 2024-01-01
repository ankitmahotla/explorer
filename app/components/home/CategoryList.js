import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ setCategory }) => {
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: require("./../../../assets/gas.png"),
    },
    {
      id: 2,
      name: "Restaurants",
      value: "restaurant",
      icon: require("./../../../assets/food.png"),
    },
    {
      id: 3,
      name: "Cafe",
      value: "cafe",
      icon: require("./../../../assets/cafe.png"),
    },
  ];
  return (
    <View style={{ marginTop: 15 }}>
      <Text
        style={{
          fontSize: 20,
        }}
      >
        Select from Top Categories
      </Text>
      <FlatList
        data={categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setCategory(item.value)}>
            <CategoryItem name={item.name} icon={item.icon} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;
