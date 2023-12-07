import { Card, Chip } from "@mui/material";
import React from "react";

export default function TaskCard({
  item,
  boardName,
  draggedItem,
  handleDragStart,
  handleDrop,
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
    <Card
      key={item.id}
      draggable
      onDragStart={(e) => handleDragStart(e, item, boardName)}
      onTouchStart={(e) => handleDragStart(e, item, boardName)}
      onDrop={(e) => handleDrop(e, boardName, item)}
      onTouchEnd={(e) => handleDrop(e, boardName, item)}
      style={{
        border: "1px solid #ccc",
        marginBottom: "8px",
        backgroundColor: draggedItem === item ? "#e1d8d8" : "white",
        position: "relative",
        borderRadius: 8,
      }}
    >
      <div style={{ textAlign: "left", padding: 8, paddingLeft: 15 }}>
        <h4>{item.name}</h4>
        <p>{item.assignee}</p>
        <p>
          <strong>Start Date : </strong>
          <Chip label={item?.startDate} />
        </p>
        <p>
          <strong>End Date : </strong>
          <Chip label={item?.endDate} />
        </p>
      </div>
      {getStatusIcon(item.priority)}
    </Card>
  );
}
