import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Color from "../../shared/Color";

const Header = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
        <Text style={{ fontSize: 25, fontWeight: 600 }}>Explorer</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <Pressable>
          <Ionicons name="search" size={25} style={styles.iconStyle} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: { width: 40, height: 40 },
  searchContainer: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  searchInput: {
    width: Dimensions.get("screen").width * 0.82,
    borderColor: Color.black,
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
  },
  iconStyle: {
    backgroundColor: "#2196F3",
    color: "white",
    borderRadius: 8,
    padding: 5,
  },
});

export default Header;
