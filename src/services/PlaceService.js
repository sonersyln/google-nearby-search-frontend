import axios from "axios";

const API_BASE_URL = "https://api.sonerseylan.com.tr";

export const fetchNearbyPlaces = async ({ longitude, latitude, radius }) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/places/nearby-places`,
      {
        params: { longitude, latitude, radius },
      }
    );
    return response.data.map((place) => ({
      ...place,
      latitude: parseFloat(place.latitude),
      longitude: parseFloat(place.longitude),
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
