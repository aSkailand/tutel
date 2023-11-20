import "./App.css";
import { Countdown } from "./components/contdown";
import { useWttr } from "./hooks/useWttr";
import { Messages } from "./components/messages";

function App() {
  const wttr = useWttr();
  return (
    <main className="App">
      {typeof wttr !== "object" ? wttr : "tutel wttr 👍 ..."}
      <h2>tutelbord </h2>
      <Countdown year={2023} month={12} day={15} />
      <h1 className="react">🐢tutel🐢</h1>
      <Messages />
    </main>
  );
}

export default App;
