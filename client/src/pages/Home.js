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
  const [userLocation, setUserLocation] = React.useState(null);
  const [userDistance, setUserDistance] = React.useState(false);
  // const { loading, data } = useQuery(QUERY_USERS);
  // const users = data?.users || [];

  const handleClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setUserDistance(true);
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    } else {
      console.log("Not Available");
    }
  };
  // const renderUsername = () => {
  //   if (!Auth.loggedIn()) return null;
  //   return Auth.getProfile().data.username;
  // };

  return (
    <main>
      <div className="flex-col justify-center">
        {userDistance ? <Location userLocation={userLocation} /> : null}
        {/* <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          {renderUsername()}
        </div> */}

        <button onClick={() => handleClick()}>Get Location</button>
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
        <SearchBar userLocation={userLocation} />
        <CategoryMenu />
        <RestaurantList />
        <Cart />
      </div>
    </main>
  );
};

export default Home;
