import React, { useState } from 'react';
import './App.css';
import RandomVerb from './RandomVerb/RandomVerb';

function App() {
    const [score, setScore] = useState<number>(0);

    const resetScore = () => setScore(0);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Irregular verbs</h1>
                <small onClick={resetScore}>Score: {score}</small>
            </header>
            <main>
                <RandomVerb score={score} setScore={setScore} resetScore={resetScore} />
            </main>
        </div>
    );
}

export default App;
