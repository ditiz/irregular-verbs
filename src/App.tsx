import React, { useState } from 'react';
import './App.css';
import RandomVerb from './RandomVerb/RandomVerb';

function App() {
    const [score, setScore] = useState<number>(0);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Irregular verbs</h1>
                <small>Score: {score}</small>
            </header>
            <main>
                <RandomVerb score={score} setScore={setScore} />
            </main>
        </div>
    );
}

export default App;
