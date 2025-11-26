import "./App.css";
import { Countdown } from "./components/contdown";
import { useWttr } from "./hooks/useWttr";
import { Messages } from "./components/messages";
import { Firday } from "./components/friday";

function App() {
  const isFriday = new Date().getDay() === 5;

  const wttr = useWttr();
  return (
    <main className="App">
      {isFriday ? (
        <>
          <Firday />
          <Firday />
          <Firday />
          <Firday />
          <Firday />
        </>
      ) : (
        <Firday not />
      )}

      <div>{typeof wttr === "string" ? wttr : "tutel wttr 👍 ..."}</div>
      <h3>tutelbord </h3>
      <Countdown year={2025} month={11} day={14} />
      <h2 className="react">🐢tutel🐢</h2>
      {/* <Messages /> */}
    </main>
  );
}

export default App;
