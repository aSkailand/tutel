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

export function Countdown() {
  const duration = useCountdown();
  return (
    <marquee>
      <h2
        className="countdown-header"
        style={{
          color: getRandomColorString(duration),
        }}
      >
        {formatDuration(duration, {
          delimiter: ", ",
          locale: nb,
        })}
      </h2>
    </marquee>
  );
}
