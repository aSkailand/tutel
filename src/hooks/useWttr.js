import { useState, useEffect } from "react";

export function useWttr() {
  const [wttr, setWttr] = useState({});

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const geolocationAPI = navigator.geolocation;
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      console.log("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude.toFixed(7));
          setLong(coords.longitude.toFixed(7));
        },
        (error) => {
          console.log("Something went wrong getting your position!");
        }
      );
    }
  };

  useEffect(() => {
    getUserCoordinates();
    async function fetchWttr() {
      const encodedLatAndLong = encodeURIComponent(`${lat},${long}`);
      const res = await fetch(`https://wttr.in/stavanger?format=1`, {
        method: "GET",
        "Acces-Control-Allow-Origin": "*",
      });
      setWttr(await res.text());
    }

    if (lat !== null && long !== null) {
      fetchWttr();
    }
  }, [lat, long]);

  return wttr;
}
