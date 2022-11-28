import { useState } from "react";
import { formatDuration, intervalToDuration, format } from "date-fns";
import { nb } from "date-fns/locale";

import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  let duration = intervalToDuration({
    start: new Date(2022, 11, 3, 15, 0, 0),
    end: new Date(),
  });

  const Time = () => (
    <h2>
      {formatDuration(duration, {
        delimiter: ", ",
        locale: nb,
      })}
    </h2>
  );

  return (
    <>
      <div className="App">
        <Time />
        <h1 className="react">🐢 tutel 🐢</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            tutel {count}
          </button>
        </div>
      </div>
      <div className="tutel">
        {Array.from({ length: count }).map((tutel) => (
          <p
            className="random"
            key={tutel}
            style={{
              position: "relative",
              display: "flex",
              fontSize: Math.random() * 100,
            }}
          >
            🐢
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
