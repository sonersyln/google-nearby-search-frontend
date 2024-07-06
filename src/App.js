import React, { useRef } from "react";
import usePlaces from "./hooks/usePlaces";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PlaceForm from "./components/PlaceForm/PlaceForm";
import PlacesTable from "./components/PlacesTable/PlaceTable";

const App = () => {
  const { places, center, handleSearch } = usePlaces();
  const mapRef = useRef(null);

  return (
    <>
      <Header />
      <PlaceForm onSearch={handleSearch} mapRef={mapRef} />
        <Map center={center} places={places} />
      <PlacesTable places={places} />
      <Footer />
    </>
  );
}

export default App;
