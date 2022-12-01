import { useState, useEffect, useRef } from "react";
import { intervalToDuration } from "date-fns";

function getDateCountdown() {
  return intervalToDuration({
    start: new Date(2022, 11, 2, 15, 0, 0),
    end: new Date(),
  });
}

export function useCountdown() {
  const [duration, setDuration] = useState(getDateCountdown());
  const intervalRef = useRef();

  function handleSetDuration() {
    setDuration(getDateCountdown());
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => handleSetDuration(), 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return duration;
}
