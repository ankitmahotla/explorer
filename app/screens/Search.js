import { View } from "react-native";
import FullMapView from "../components/search/FullMapView";
import SearchBar from "../components/search/SearchBar";
import { UserLocationContext } from "../context/UserLocationContext";
import { useContext, useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import BusinessList from "../components/search/BusinessList";

const Search = () => {
  const [nearByPlaces, setNearByPlaces] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    GetNearBySearchPlace("restaurant");
  }, []);
  const GetNearBySearchPlace = (value) => {
    GlobalApi.searchByText(value).then((resp) => {
      setNearByPlaces(resp.data.results);
    });
  };

  return (
    <View>
      <View style={{ position: "absolute", zIndex: 10 }}>
        <SearchBar setSearchText={(value) => GetNearBySearchPlace(value)} />
      </View>
      <FullMapView nearByPlaces={nearByPlaces} />
      <View style={{ position: "absolute", zIndex: 10, bottom: 0 }}>
        <BusinessList places={nearByPlaces} />
      </View>
    </View>
  );
};

export default Search;
