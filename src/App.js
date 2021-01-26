import React, { useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import Display from './components/Display.js';

const MAX_NUM__OF_STRIKES = 2;
const MAX_NUM__OF_BALLS = 3;

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const scoreStrike = () => {
    if (strikes === MAX_NUM__OF_STRIKES) {
      // struck out
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const scoreBall = () => {
    if (balls === MAX_NUM__OF_BALLS) {
      // struck out
      setStrikes(0);
      setBalls(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const scoreFoul = () => {
    if (strikes !== MAX_NUM__OF_STRIKES) {
      setStrikes(strikes + 1);
    }
  };

  const scoreHit = () => {
    // reset game
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
