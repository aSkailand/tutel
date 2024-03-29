import { useState, useEffect, useRef } from "react";
import { intervalToDuration } from "date-fns";

function getDateCountdown(year, month, day) {
  // const endDate = new Date(year, month, day);
  // return intervalToDuration({ start: new Date(), end: endDate });
  //   function getNextFriday(date = new Date()) {
  //     const dateCopy = new Date(date.getTime());
  // const nextFriday = new Date(
  //   dateCopy.setDate(
  //     dateCopy.getDate() + ((7 - dateCopy.getDay() + 5) % 7 || 7)
  //   )
  // );
  //   }
  //   return getNextFriday();
  // }
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
