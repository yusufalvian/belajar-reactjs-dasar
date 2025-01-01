import React, { useState, useEffect } from 'react';

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // Effect to handle window resize
  useEffect(() => {
    // Handler function to update state
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return (
    <div>
      <h1>Window Size</h1>
      <p>
        Width: {width}px, Height: {height}px
      </p>
    </div>
  );
}

export default WindowSize;
