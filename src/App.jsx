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

      {typeof wttr !== "object" ? wttr : "tutel wttr 👍 ..."}
      <h3>tutelbord </h3>
      <Countdown year={2024} month={12} day={7} />
      <h2 className="react">🐢tutel🐢</h2>
      <Messages />
    </main>
  );
}

export default App;
