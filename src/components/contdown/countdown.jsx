import { formatDuration } from "date-fns";
import { nb } from "date-fns/locale";
import { useCountdown } from "../../hooks/useCountdown";

export function Countdown({ year, month, day }) {
  const duration = useCountdown(year, month, day);
  return (
    <h2 className="countdown-header">
      {duration.days === 7 ? (
        <>Fredag 😀👍</>
      ) : (
        formatDuration(duration, {
          delimiter: ", ",
          locale: nb,
        })
      )}
    </h2>
  );
}
