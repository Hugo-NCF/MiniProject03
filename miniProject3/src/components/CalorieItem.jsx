import React from "react";

const CalorieItem = ({ name, calories, count, onAdd, onRemove }) => {

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "grey",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "15px",
        width: "200px"
      }}
    >
      <h3>{name}</h3>
      <p>Calories per item: {calories}</p>
      <p>Count: {count}</p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={onAdd}>+</button>
        <button onClick={onRemove}>−</button>
      </div>
    </div>
  );
};

export default CalorieItem;
