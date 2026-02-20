function CalorieItem({ item, onDelete, onEdit }) {
  return (
    <li style={listItemStyle}>
      <span>
        {item.name} — {item.calories} cal
      </span>

      <div style={{ display: "flex", gap: "6px" }}>
        <button
          onClick={() => onEdit(item.id)}
          style={editButtonStyle}
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(item.id)}
          style={deleteButtonStyle}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

const listItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0",
  borderBottom: "1px solid #eee"
};

const editButtonStyle = {
  padding: "6px 10px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#2196F3",
  color: "white",
  cursor: "pointer"
};

const deleteButtonStyle = {
  padding: "6px 10px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#f44336",
  color: "white",
  cursor: "pointer"
};

export default CalorieItem;