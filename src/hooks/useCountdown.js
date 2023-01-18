import { useState, useEffect, useRef } from "react";
import { intervalToDuration } from "date-fns";

function getDateCountdown(year, month, day) {
  return intervalToDuration({
    start: new Date(year, month, day, 12, 0, 0),
    end: new Date(),
  });
}

export function useCountdown(year, month, day) {
  const [duration, setDuration] = useState(getDateCountdown(year, month, day));
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
