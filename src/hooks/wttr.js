import { useState, useEffect } from "react";

export function useWttr() {
  const [wttr, setWttr] = useState({});

  useEffect(() => {
    async function fetchWttr() {
      const res = await fetch("https://wttr.in/grimstad?format=3", {
        method: "GET",
      });
      setWttr(await res.text());
    }

    fetchWttr();
  }, []);
  return wttr;
}
