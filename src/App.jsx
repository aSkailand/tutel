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
      {isFriday && <Firday />}
      {typeof wttr !== "object" ? wttr : "tutel wttr 👍 ..."}
      <h2>tutelbord </h2>
      <Countdown year={2023} month={12} day={15} />
      <h1 className="react">🐢tutel🐢</h1>
      <Messages />
    </main>
  );
}

export default App;
