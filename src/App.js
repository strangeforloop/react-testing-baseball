import React, { useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import Display from './components/Display.js';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const scoreStrike = () => {
    setStrikes(strikes + 1);
  };

  const scoreBall = () => {
    setBalls(balls + 1);
  };

  const scoreFoul = () => {
    setStrikes(strikes + 1);
  };

  const scoreHit = () => {
    setStrikes(0);
    setBalls(0);
  };

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Controls
        strike={scoreStrike}
        ball={scoreBall}
        foul={scoreFoul}
        hit={scoreHit}
      />
    </div>
  );
}

export default App;
