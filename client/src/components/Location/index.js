import React from "react";
import {
  DistanceMatrixService,
  GoogleMap,
  useLoadScript
} from "@react-google-maps/api";
const Location = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: ""
  });
  console.log(loadError);
  if (!isLoaded) return <h1>Loading...</h1>;
  return (
    <div>
      <GoogleMap>
        <DistanceMatrixService
          options={{
            destinations: [{ lat: 1.296788, lng: 103.778961 }],
            origins: [{ lng: 103.780267, lat: 1.291692 }],
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
