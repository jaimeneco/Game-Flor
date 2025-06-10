import { useState } from "react";
import Flower from "./components/flower/Flower.jsx";

function App() {
  const [numPetals, setNumPetals] = useState(() =>
    Math.random() < 0.5 ? 10 : 11
  );

  return (
    <div className="app">
      <Flower numPetals={numPetals} onReset={() => setNumPetals(Math.random() < 0.5 ? 10 : 11)} />
    </div>
  );
}

export default App;
