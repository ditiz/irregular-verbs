import React, { useState, useEffect } from "react";
import "./App.css";
import RandomVerb from "./RandomVerb/RandomVerb";

function App() {
  const [score, setScore] = useState<number>(0);
  const [maxScore, setMaxScore] = useState<number>(0);

  const resetScore = () => setScore(0);

  useEffect(() => {
    if (maxScore < score) {
      setMaxScore(max => (max < score ? score : max));
    }
  }, [score, setMaxScore])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Irregular verbs</h1>
        <small>Score: {score}</small>
        <small>Meilleur Score: {maxScore} </small>
      </header>
      <main>
        <RandomVerb score={score} setScore={setScore} resetScore={resetScore} />
      </main>
    </div>
  );
}

export default App;
