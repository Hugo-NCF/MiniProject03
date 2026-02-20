import { useState } from "react";
import ItemList from "./ItemList";

function CalorieTracker() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 }
  ]);

  const [newName, setNewName] = useState("");
  const [newCalories, setNewCalories] = useState("");

  const handleAdd = () => {
    if (!newName || !newCalories) return;

    const newItem = {
      id: Date.now(),
      name: newName,
      calories: Number(newCalories)
    };

    setItems([...items, newItem]);
    setNewName("");
    setNewCalories("");
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleEdit = (id) => {
    const updatedName = prompt("Enter new name:");
    const updatedCalories = prompt("Enter new calories:");

    if (!updatedName || !updatedCalories) return;

    setItems(
      items.map(item =>
        item.id === id
          ? { ...item, name: updatedName, calories: Number(updatedCalories) }
          : item
      )
    );
  };

  const totalCalories = items.reduce(
    (total, item) => total + item.calories,
    0
  );

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={{ marginBottom: "25px" }}>Calorie Tracker</h1>

        <div style={formStyle}>
          <input
            type="text"
            placeholder="Item Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="Calories"
            value={newCalories}
            onChange={(e) => setNewCalories(e.target.value)}
            style={inputStyle}
          />

          <button onClick={handleAdd} style={addButtonStyle}>
            Add
          </button>
        </div>

        <ItemList
          items={items}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />

        <h2 style={{ marginTop: "25px" }}>
          Total Calories: {totalCalories}
        </h2>
      </div>
    </div>
  );
}

/* -------- STYLES -------- */

const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const cardStyle = {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "16px",
  boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
  width: "450px",
  textAlign: "center"
};

const formStyle = {
  display: "flex",
  gap: "10px",
  marginBottom: "25px"
};

const inputStyle = {
  flex: 1,
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const addButtonStyle = {
  padding: "10px 15px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#4CAF50",
  color: "white"
};

export default CalorieTracker;