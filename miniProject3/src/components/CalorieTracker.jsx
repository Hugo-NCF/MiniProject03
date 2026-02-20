import React, { useState } from "react";
import CalorieItem from "./CalorieItem";
import ItemList from "./ItemList";

const CalorieTracker = () => {

  const [items, setItems] = useState([
    { id: 1, name: "Pizza Slice", calories: 285, count: 0 },
    { id: 2, name: "Burger", calories: 355, count: 0 },
    { id: 3, name: "Fries", calories: 365, count: 0 }
  ]);

  const handleAdd = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>Calorie Tracker</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          marginTop: "30px"
        }}
      >
        <div>
          {items.map(item => (
            <CalorieItem
              key={item.id}
              name={item.name}
              calories={item.calories}
              count={item.count}
              onAdd={() => handleAdd(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
        </div>

        <ItemList items={items} />
      </div>
    </div>
  );
};

export default CalorieTracker;
