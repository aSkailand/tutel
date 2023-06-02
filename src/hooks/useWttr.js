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
          console.log(position);
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longitude);
          codeLatLng(coords.latitude, coords.longitude);
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
      const res = await fetch(`https://wttr.in/${lat},${long}?format=3`, {
        method: "GET",
      });

      setWttr(await res.text());
    }

    if (lat !== null && long !== null) {
      fetchWttr();
    }
  }, [lat, long]);

  return wttr;
}
