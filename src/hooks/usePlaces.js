import { useState } from "react";
import { fetchNearbyPlaces } from "../services/PlaceService";

const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [center, setCenter] = useState({
    lat: 40.99029484111731,
    lng: 28.782688213173742,
  });
  const [radius, setRadius] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    try {
      const formattedPlaces = await fetchNearbyPlaces(searchParams);
      setPlaces(formattedPlaces);
      setCenter({
        lat: parseFloat(searchParams.latitude),
        lng: parseFloat(searchParams.longitude),
      });
      setRadius(parseFloat(searchParams.radius));
    } catch (error) {
      console.error("Error in fetching places:", error);
    } finally {
      setLoading(false);
    }
  };

  return { places, center, radius, handleSearch, loading };
};

export default usePlaces;
