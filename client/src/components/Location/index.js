import React from "react";
import {
  DistanceMatrixService,
  GoogleMap,
  useLoadScript
} from "@react-google-maps/api";
const Location = ({ userLocation }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });
  console.log(loadError);
  if (!isLoaded) return <h1> Loading...</h1>;
  return (
    <div>
      <GoogleMap>
        <DistanceMatrixService
          options={{            
            destinations: [{ lat: 35.227229, lng: -80.843069 }],
            origins: [{ lng: userLocation.lng, lat: userLocation.lat }],

            travelMode: "DRIVING"
          }}
          callback={(response) => {
            console.log(response);
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default Location;
