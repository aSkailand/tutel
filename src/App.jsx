import { useState } from "react";
import "./App.css";
import { Countdown } from "./components/contdown";
import { useWttr } from "./hooks/wttr";

function App() {
  const [count, setCount] = useState(1);
  const wttr = useWttr();

  return (
    <>
      <div className="App">
        {typeof wttr !== "object" ? wttr : "tutel wttr 👍 ..."}
        <Countdown />
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
