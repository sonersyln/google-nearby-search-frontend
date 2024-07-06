import { useState } from "react";
import { fetchNearbyPlaces } from "../services/PlaceService";

const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [center, setCenter] = useState({ lat: 40.99029484111731, lng: 28.782688213173742 });

  const handleSearch = async (searchParams) => {
    try {
      const formattedPlaces = await fetchNearbyPlaces(searchParams);
      setPlaces(formattedPlaces);
      setCenter({ lat: parseFloat(searchParams.latitude), lng: parseFloat(searchParams.longitude) });
      console.log("Fetched Places:", formattedPlaces);
    } catch (error) {
      console.error("Error in fetching places:", error);
    }
  };

  return { places, center, handleSearch };
};

export default usePlaces;