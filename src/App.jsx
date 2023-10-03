import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [paused, setPaused] = useState(true);
  const [mode, setMode] = useState("focus");
  const [remainingSeconds, setRemainingSeconds] = useState(25 * 60);

  useEffect(() => {
    let interval;
    if (!paused && remainingSeconds > 0) {
      interval = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [paused, remainingSeconds]);

  const handleStart = () => {
    setPaused(false);
    console.log(`updated paused:${paused}`);
  };
  const handlePause = () => {
    setPaused(true);
  };

  const handleSkip = () => {
    if (mode === "focus") {
      setMode("break");
      setRemainingSeconds(5 * 60);
    } else {
      setMode("focus");
      setRemainingSeconds(25 * 60);
    }
  };

  const handleReset = () => {
    if (mode === "focus") {
      setRemainingSeconds(25 * 60);
    } else {
      setRemainingSeconds(5 * 60);
    }
  };

  const minutes = `${Math.floor(remainingSeconds / 60)}`.padStart(2, 0);
  const seconds = `${remainingSeconds % 60}`.padStart(2, 0);

  return (
    <>
      <button onClick={handleStart} disabled={!paused}>
        Start
      </button>
      <button onClick={handlePause} disabled={paused}>
        Pause
      </button>
      <button onClick={handleSkip}>Skip</button>
      <button onClick={handleReset}>Reset</button>
      <span>
        {`${minutes}`}:{seconds}
      </span>
    </>
  );
};

export default App;

// To Do:
// 1. create basic state, start button, pause button, reset buttons, skip to break button
// 2. Design app in figma
// 3. Implement design

// useEffect(() => {
//   // Create a setInterval
//   const interval = setInterval(() => {
//     const newTime = subSeconds(focusTime, 1);
//     setFocusTime(newTime);
//   }, 1000);

//   // In strict mode, setInterval is not cleared on unmount
//   // Manually clear the interval on unmount
//   return () => clearInterval(interval);
// }, [focusTime]);
