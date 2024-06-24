"use client"; // Ensures this component is rendered on the client side

import React, { useState, useEffect } from "react";

const GRID_ROWS = 18; // Number of rows in the grid
const GRID_COLS = 20; // Number of columns in the grid

const MGrid = () => {
  const [grid, setGrid] = useState<boolean[][]>([]);

  useEffect(() => {
    // Function to create the initial grid with random boolean values
    const createInitialGrid = (): boolean[][] => {
      return Array.from({ length: GRID_COLS }, () =>
        Array.from(
          { length: GRID_ROWS },
          () => (Math.random() > 0.5 ? false : true), // Randomly assign true or false
        ),
      );
    };

    setGrid(createInitialGrid());

    // Function to toggle a random tile in the grid
    const addRandomTile = () => {
      const randomColIndex = Math.floor(Math.random() * GRID_COLS);
      const randomRowIndex = Math.floor(Math.random() * GRID_ROWS);

      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            if (rowIndex === randomRowIndex && colIndex === randomColIndex) {
              return !cell; // Toggle the boolean value
            }
            return cell;
          }),
        );
        return newGrid;
      });
    };

    // Set an interval to toggle a random tile every 100 milliseconds
    const intervalId = setInterval(addRandomTile, 100);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once after mount

  if (grid.length === 0) {
    return null; // Render nothing while the grid is being created
  }

  return (
    // Container for the grid, positioned absolutely on the right side
    <div className="absolute inset-y-0 right-0 z-0 hidden h-fit flex-col overflow-hidden md:flex">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {" "}
          {/* Row container */}
          {row.map((isVisible, columnIndex) => (
            <div
              key={columnIndex}
              className={`flex items-center justify-center border-black px-2`} // Tile styling
            >
              <span className="h-6 w-6 text-xl">{isVisible ? "M" : ""}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MGrid;
