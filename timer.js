import { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(1500); // 25 min
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => setSeconds(prev => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Pomodoro Timer</h2>
      <h1>{formatTime(seconds)}</h1>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => { setIsActive(false); setSeconds(1500); }}>
        Reset
      </button>
    </div>
  );
}
