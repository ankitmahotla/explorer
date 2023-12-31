import { StyleSheet } from "react-native";
import Header from "../components/home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/home/Map";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 4,
    backgroundColor: "white",
  },
});

export default Home;
