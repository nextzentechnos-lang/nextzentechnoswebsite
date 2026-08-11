import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteProgressBar() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Reset and start loader
    setActive(true);
    setProgress(15);
    
    // Simulate steps of page load completion
    const step1 = setTimeout(() => setProgress(45), 60);
    const step2 = setTimeout(() => setProgress(75), 150);
    const step3 = setTimeout(() => setProgress(90), 240);
    
    // Complete page mount transition
    const completeTimer = setTimeout(() => {
      setProgress(100);
      const fadeOutTimer = setTimeout(() => {
        setActive(false);
      }, 150);
      return () => clearTimeout(fadeOutTimer);
    }, 320);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
      clearTimeout(completeTimer);
    };
  }, [location]);

  return (
    <div 
      className="global-route-progress-bar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        background: 'linear-gradient(90deg, var(--accent-orange) 0%, var(--accent-pink) 100%)',
        boxShadow: '0 0 8px var(--accent-orange), 0 0 15px rgba(255, 0, 127, 0.5)',
        zIndex: 99999,
        width: `${progress}%`,
        opacity: active ? 1 : 0,
        transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease-out',
        pointerEvents: 'none'
      }}
    />
  );
}
