import React, { useRef } from "react";
import usePlaces from "./hooks/usePlaces";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { places, center, handleSearch } = usePlaces();
  const mapRef = useRef(null);

  return (
    <>
      <Header />
      <div className="map-container" ref={mapRef}>
        <Map center={center} places={places} />
      </div>
      <Footer />
    </>
  );
}

export default App;
