import React, { useRef, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import googleMapsApiKey from "../../config/config";
import "./Map.css";

const mapContainerStyle = {
  width: "80%",
  height: "700px",
  marginTop: "20px",
};

const Map = ({ center, places }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const mapRef = useRef(null);

  return (
    <div className="map-container" ref={mapRef}>
      <LoadScript
        googleMapsApiKey={googleMapsApiKey}
        loadingElement={<div>Loading...</div>}
        libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
        >
          {places.map((place, index) => (
            <Marker
              key={index}
              position={{ lat: place.latitude, lng: place.longitude }}
              title={place.name}
              onClick={() => setSelectedPlace(place)}
            />
          ))}
          {selectedPlace && (
            <InfoWindow
              position={{
                lat: selectedPlace.latitude,
                lng: selectedPlace.longitude,
              }}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div>
                <h2>{selectedPlace.name}</h2>
                <p>Description: {selectedPlace.description}</p>
                <p>Address: {selectedPlace.address}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
