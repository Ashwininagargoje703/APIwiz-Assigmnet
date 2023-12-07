import { Button, Chip, useMediaQuery } from "@mui/material";
import React from "react";

export default function TaskCard({
  item,
  boardName,
  draggedItem,
  handleDragStart,
  handleDrop,
}) {
  const getStatusIcon = (status) => {
    const isMobile = useMediaQuery("(max-width:740px)");

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
      onDrop={(e) => {
        e.stopPropagation();
        handleDrop(e, boardName, item);
      }}
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        marginBottom: "8px",
        backgroundColor: draggedItem === item ? "#e1d8d8" : "white",
        position: "relative",
      }}
    >
      <div style={{ textAlign: "left", padding: 8 }}>
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
    </div>
  );
}
