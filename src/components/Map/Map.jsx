import React, { useRef, useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow, Circle } from "@react-google-maps/api";
import googleMapsApiKey from "../../config/config";
import "./Map.css";

const mapContainerStyle = {
  width: "80%",
  height: "700px",
  marginTop: "20px",
};

const Map = ({ center, places, radius }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const circleRef = useRef(null);

  useEffect(() => {
    if (mapInstance && center) {
      // Mevcut çemberi temizle
      if (circleRef.current) {
        circleRef.current.setMap(null);
      }

      // Yeni çember oluştur ve referansı kaydet
      if (radius) {
        const circle = new window.google.maps.Circle({
          center,
          radius,
          fillColor: "#669df6",
          fillOpacity: 0.2,
          strokeColor: "#669df6",
          strokeOpacity: 0.5,
          strokeWeight: 1,
          map: mapInstance,
        });

        circleRef.current = circle;

        // Haritayı çemberin kapsadığı alana zoom yap
        const bounds = circle.getBounds();
        mapInstance.fitBounds(bounds);
      } else {
        mapInstance.panTo(center);
      }
    }
  }, [center, radius, mapInstance]);

  return (
    <div className="map">
      <div className="map-container" ref={mapRef}>
        <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={["places"]}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center || { lat: 0, lng: 0 }}
            zoom={center ? 14 : 1}
            onLoad={(map) => setMapInstance(map)}
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
    </div>
  );
};

export default Map;
