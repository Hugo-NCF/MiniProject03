import CalorieItem from "./CalorieItem";

function ItemList({ items, onDelete, onEdit }) {
  return (
    <ul style={listStyle}>
      {items.map(item => (
        <CalorieItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0
};

export default ItemList;