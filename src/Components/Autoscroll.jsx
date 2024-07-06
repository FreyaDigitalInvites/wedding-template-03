// src/Components/Autoscroll.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Autoscroll.css';

const Autoscroll = () => {
  const [speed, setSpeed] = useState(1); // Default speed
  const intervalRef = useRef(null);

  const startScrolling = () => {
    clearInterval(intervalRef.current); // Clear any existing interval
    intervalRef.current = setInterval(() => {
      window.scrollBy(0, speed);
    }, 20);
  };

  const stopScrolling = () => {
    clearInterval(intervalRef.current);
  };

  const handleSpeedChange = (event) => {
    setSpeed(Number(event.target.value));
  };

  return (
    <div className="autoscroll-container">
      <button
        className="autoscroll-button"
        onClick={startScrolling}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
        onTouchStart={startScrolling}
        onTouchEnd={stopScrolling}
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  );
};

export default Autoscroll;