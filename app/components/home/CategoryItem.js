import { View, Text, Image } from "react-native";

const CategoryItem = ({ name, icon }) => {
  return (
    <View
      style={{
        width: 100,
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#FFFDD0",
        paddingVertical: 10,
        borderRadius: 10,
      }}
    >
      <Image
        source={icon}
        style={{ height: 50, width: 50, resizeMode: "contain" }}
      />
      <Text style={{ fontSize: 16 }}>{name}</Text>
    </View>
  );
};

export default CategoryItem;
