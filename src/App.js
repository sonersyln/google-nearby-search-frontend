import React, { useRef } from "react";
import usePlaces from "./hooks/usePlaces";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PlaceForm from "./components/PlaceForm/PlaceForm";

const App = () => {
  const { places, center, handleSearch } = usePlaces();
  const mapRef = useRef(null);

  return (
    <>
      <Header />
      <PlaceForm onSearch={handleSearch} mapRef={mapRef} />
      <div className="map-container" ref={mapRef}>
        <Map center={center} places={places} />
      </div>
      <Footer />
    </>
  );
}

export default App;
