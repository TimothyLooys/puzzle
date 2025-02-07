// src/components/PuzzleGame.js
// Importing React and useState for managing component state
import React, { useState, useEffect } from "react";
import imgSrc from "../assets/logo.png";
// ...other imports
const PuzzleGame = () => {
  // Define the image URL and initial positions of puzzle pieces
  const imgUrl = imgSrc; // Make sure this image exists in the public folder
  const [positions, setPositions] = useState([...Array(16).keys()]);

  useEffect(() => {
    // Shuffle the positions for the initial puzzle setup
    setPositions((prevPositions) => {
      const newPos = [...prevPositions];
      newPos.sort(() => Math.random() - 0.5);
      return newPos;
    });
  }, []);
  // Handling the start of a drag event
  const handleDragStart = (e, position) => {
    e.dataTransfer.setData("text/plain", position);
  };

  // Handling the drop event
  const handleDrop = (e, position) => {
    e.preventDefault();
    const originalPosition = e.dataTransfer.getData("text");
    // Add logic here to swap positions of puzzle pieces
    setPositions((prevPositions) => {
      const newPos = [...prevPositions];
      [newPos[originalPosition], newPos[position]] = [
        newPos[position],
        newPos[originalPosition]
      ];
      return newPos;
    });
  };

  // Allowing the drop action by preventing default behavior
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Component's return statement
  return (
    <div className="game-container">
      <div className="reference-image">
        <img src={imgUrl} alt="Reference Image" />
      </div>
      <div className="puzzle-container">
        {positions.map((pos, index) => {
          const x = (pos % 4) * 100;
          const y = Math.floor(pos / 4) * 100;
          return (
            <div
              key={index}
              className="puzzle-piece"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={handleDragOver}
              style={{
                backgroundImage: `url('${imgUrl}')`,
                backgroundPosition: `-${x}px -${y}px`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

// Exporting the component for use in other files
export default PuzzleGame;