import React, { useState } from "react";

const CalorieItem = ({ name }) => {
  
  const myStyle = {
    color: "white",
    backgroundColor: "grey",
    padding: "10px",
    fontFamily: "Arial",
    borderRadius: "10px",
    margin: "10px",
  };

  const buttonContainer = {
    display: "flex",
    gap: "10px",
  };

  const [item, setItem] = useState(0);

  const itemUp = () => {
    setItem(item + 1);
  };

  const itemDown = () => {
    if (item > 0) {
      setItem(item - 1);
    }
  };

  return (
    <div style={myStyle}>
      <h2>{name}</h2>
      <p>Count: {item}</p>

      <div style={buttonContainer}>
        <button onClick={itemUp}>Add</button>
        <button onClick={itemDown}>Remove</button>
      </div>
    </div>
  );
};

export default CalorieItem;
