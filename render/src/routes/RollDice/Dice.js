import React, { useEffect, useState } from "react";

export default function Dice({ number, duration = 5 }) {
  const [isRolling, setRolling] = useState(true);
  const [displayNumber, setDisplayNumber] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      if (isRolling) {
        setDisplayNumber(Math.floor(Math.random() * 6) + 1);
      }
    });
    return () => {
      clearInterval(interval);
    };
  }, [isRolling]);

  useEffect(() => {
    setRolling(true);
    const timer = setTimeout(() => {
      setRolling(false);
      setDisplayNumber(number);
    }, duration * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [number, duration]);

  return (
    <div
      className={`w-32 h-32 flex flex-col bg-gray-400 text-gray-700 rounded items-center justify-center ${
        isRolling ? `animate-spin` : ``
      }`}
    >
      <div className="font-bold text-6xl">{displayNumber}</div>
    </div>
  );
}
