import { formatDuration } from "date-fns";
import { nb } from "date-fns/locale";
import { useCountdown } from "../../hooks/useCountdown";
import "./countdown.css";

function rand(seconds) {
  return seconds * Math.random() * 10;
}

function getRandomColorString(duration) {
  const { seconds } = duration;

  return `rgb(${rand(seconds)},${rand(seconds)},${rand(seconds)})`;
}

export function Countdown({year, month, day}) {
  const duration = useCountdown(year, month, day);
  return (
    <h2
      className="countdown-header"
      style={{
        color: getRandomColorString(duration),
      }}
    >
      {duration.days === 7 ? <>Fredag 😀👍</>: formatDuration(duration, {
        delimiter: ", ",
        locale: nb,
      })}
    </h2>
  );
}
