import { useState } from "react";
import "./App.css";
import { Countdown } from "./components/contdown";
import { useWttr } from "./hooks/useWttr";

function App() {
  const [count, setCount] = useState(1);
  const wttr = useWttr();

  const emojiIndex = typeof wttr === "string" ? wttr.indexOf(":") + 2 : "?";
  return (
    <>
      <div className="App">
        {typeof wttr !== "object" ? wttr : "tutel wttr 👍 ..."}
        <Countdown year={2023} month={2} day={1} />
        <h1 className="react">🐢tutel🐢</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            tutel {count}
          </button>
        </div>
      </div>
      <div className="tutel">
        {Array.from({ length: count }).map((tutel, index) => (
          <p
            className="random"
            key={`${tutel} ${index}`}
            style={{
              position: "absolute",
              display: "flex",
              "--start-pos": Math.floor(Math.random() * 201) - 1000 + "px",
              fontSize: Math.random() * 50,
            }}
          >
            {<p>{wttr[emojiIndex]}</p>}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
