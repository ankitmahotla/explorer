import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";

const nearByPlaces = (lat, lng, type) =>
  axios.get(
    BASE_URL +
      "/nearbysearch/json?" +
      "&location=" +
      lat +
      "," +
      lng +
      "&radius=1500&type=" +
      type +
      "&key=" +
      process.env.EXPO_PUBLIC_API_KEY
  );
// const nearByPlaces = () =>
//   axios.get(
//     BASE_URL +
//       "/nearbysearch/json?location=23.8103,90.4125&radius=1500&type=restaurant&key=" +
//       process.env.EXPO_PUBLIC_API_KEY
//   );

const searchByText = (searchText) =>
  axios.get(
    BASE_URL +
      "/textsearch/json?query=" +
      searchText +
      "&key=" +
      process.env.EXPO_PUBLIC_API_KEY
  );

export default {
  nearByPlaces,
  searchByText,
};
