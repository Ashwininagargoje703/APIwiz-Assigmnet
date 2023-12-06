import React from "react";

export default function TaskCard({
  item,
  boardName,
  draggedItem,
  handleDragStart,
}) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "Urgent":
        return (
          <div
            style={{
              padding: "0.05rem",
              backgroundColor: "red",
              width: "1.5rem",
              borderRadius: "1rem",
              color: "white",
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            !
          </div>
        );
      case "High":
        return (
          <div
            style={{
              padding: "0.05rem",
              backgroundColor: "orange",
              width: "1.5rem",
              borderRadius: "1rem",
              color: "white",
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            ↑
          </div>
        );

      case "Medium":
        return (
          <div
            style={{
              padding: "0.05rem",
              backgroundColor: "yellowgreen",
              width: "1.5rem",
              borderRadius: "1rem",
              color: "white",
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            ^
          </div>
        );

      case "Low":
        return (
          <div
            style={{
              padding: "0.05rem",
              backgroundColor: "green",
              width: "1.5rem",
              borderRadius: "1rem",
              color: "white",
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            ↓
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div
      key={item.id}
      draggable
      onDragStart={(e) => handleDragStart(e, item, boardName)}
      style={{
        border: "1px solid #ccc",
        padding: "8px",
        marginBottom: "8px",
        backgroundColor: draggedItem === item ? "#e1d8d8" : "white",
        position: "relative",
      }}
    >
      <h4>{item.name}</h4>
      <p>{item.assignee}</p>
      {getStatusIcon(item.priority)}
    </div>
  );
}
