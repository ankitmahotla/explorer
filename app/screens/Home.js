import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/home/Map";
import CategoryList from "../components/home/CategoryList";
import GlobalApi from "../services/GlobalApi";
import { useEffect, useContext, useState } from "react";
import Places from "../components/home/Places";
import { UserLocationContext } from "../context/UserLocationContext";

const Home = () => {
  const [nearByPlaces, setNearByPlaces] = useState([]);

  const { location, setLocation } = useContext(UserLocationContext);

  const getNearByPlaces = (value) => {
    // Check if location and location.coords are not null or undefined
    if (location && location.coords) {
      GlobalApi.nearByPlaces(
        location.coords.latitude,
        location.coords.longitude,
        value
      ).then((res) => {
        setNearByPlaces(res.data.results);
      });
    } else {
      console.error("Location information is not available.");
    }
  };

  useEffect(() => {
    // Check if location is not null or undefined
    if (location) {
      getNearByPlaces("restaurant");
    } else {
      console.error("Location information is not available.");
    }
  }, [location]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Map nearByPlaces={nearByPlaces} />
        <CategoryList setCategory={(value) => getNearByPlaces(value)} />
        {nearByPlaces.length > 0 && <Places places={nearByPlaces} />}
      </ScrollView>
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
