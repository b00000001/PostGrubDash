// Node Modules
import React from "react";
import { useQuery } from "@apollo/client";
// Utilities
import Auth from "../utils/auth";
// import { QUERY_USERS } from '../utils/queries';
// Components
import CategoryMenu from "../components/CategoryMenu";
import RestaurantList from "../components/RestaurantList";
// import UserList from "../components/UserList";
import SearchBar from "../components/SearchBar";
import Cart from "../components/Cart";
import Location from "../components/Location";

const Home = () => {
  const [userLocation, setUserLocation] = React.useState({
    lat: "35.227229",
    lng: "-80.843069"
  });
  const [userDistance, setUserDistance] = React.useState(false);
  const [userDestination, setUserDestination] = React.useState("");

  const handleClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setUserDistance(true);
      });
      setUserDistance(true);
    } else {
      console.log("Location Not Available");
    }
  };

  return (
    <main>
      <div className="flex-col justify-center">
        {userDistance ? (
          <Location userLocation={userLocation} destination={userDestination} />
        ) : null}
        {userLocation ? (
          <h3>
            <strong>
              Your Location <br />
            </strong>
            Longitude: {userLocation.lat}
            <br />
            Latitude {userLocation.lng}
          </h3>
        ) : null}
        <Location />
        <SearchBar userLocation={userLocation} />
        <CategoryMenu />
        <RestaurantList />
        <Cart />
      </div>
    </main>
  );
};

export default Home;
