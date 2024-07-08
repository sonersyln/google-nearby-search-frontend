import React, { useRef } from "react";
import usePlaces from "./hooks/usePlaces";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PlaceForm from "./components/PlaceForm/PlaceForm";
import PlacesTable from "./components/PlacesTable/PlaceTable";
import "./App.css";

const App = () => {
  const { places, center, radius, handleSearch, loading } = usePlaces();
  const mapRef = useRef(null);

  return (
    <div className="app-container container-fluid">
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <Header />
      <PlaceForm onSearch={handleSearch} mapRef={mapRef} />
      <Map center={center} places={places} radius={radius} />
      <PlacesTable places={places} />
      <Footer />
    </div>
  );
};

export default App;
