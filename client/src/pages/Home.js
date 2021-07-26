// Node Modules
import React from "react";
import { useQuery } from "@apollo/client";
// Utilities
import Auth from "../utils/auth";
// import { QUERY_USERS } from '../utils/queries';
// Components
import UserList from "../components/UserList";
import RestaurantCard from "../components/RestaurantCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [userLocation, setUserLocation] = React.useState(null);
  // const { loading, data } = useQuery(QUERY_USERS);
  // const users = data?.users || [];

  // const renderUserList = () => {
  //   if (loading) {
  //     return <h2>Loading...</h2>
  //   } else {
  //     return <UserList users={users} title="List of Users" />
  //   }
  // }
  const handleClick = () => {
    console.log("click");
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    } else {
      console.log("Not Available");
    }
  };
  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  };

  return (
    <main>
      <div className="flex-col justify-center">
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
        <div className="flex justify-center p-4">
          <div className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-10">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
