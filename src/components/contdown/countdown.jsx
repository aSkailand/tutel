import { formatDistance } from "date-fns";
import { nb } from "date-fns/locale";
import { useCountdown } from "../../hooks/useCountdown";

export function Countdown({ year, month, day }) {
  const duration = useCountdown(year, month, day);
  return (
    <h3 className="countdown-header">
      {formatDistance(new Date(year, month - 1, day), new Date(), {
        delimiter: ", ",
        addSuffix: true,
        locale: nb,
      })}
    </h3>
  );
}
