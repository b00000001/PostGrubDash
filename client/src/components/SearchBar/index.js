import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = ({ userLocation }) => {
  return (
    <div className="map-back">
      <div className="container h-96 flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <input
            type="text"
            className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow border-2 border-black focus:outline-none"
            placeholder={
              userLocation
                ? `${userLocation.lat}, ${userLocation.lng}`
                : "Enter your delivery address"
            }
          />
          <div className="absolute top-4 right-3">
            <FontAwesomeIcon
              className="text-gray-400 z-20 hover:text-gray-500"
              icon={faSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
