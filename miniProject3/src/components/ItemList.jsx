import React from "react";

const ItemList = ({ items }) => {

  const totalCalories = items.reduce((total, item) => {
    return total + item.calories * item.count;
  }, 0);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "lightblue",
        borderRadius: "12px",
        width: "180px",
        height: "fit-content",
        textAlign: "center"
      }}
    >
      <h2>Total</h2>
      <h3>{totalCalories} cal</h3>
    </div>
  );
};

export default ItemList;
