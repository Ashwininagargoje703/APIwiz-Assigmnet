import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { useMediaQuery } from "@mui/material";

export default function TaskBoard({ allTaks }) {
  const [tasks, setTaks] = useState({
    Ready: [],
    "In Progress": [],
    Testing: [],
    Done: [],
  });

  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedFromBoard, setDraggedFromBoard] = useState(null);

  const seprateTaks = (data) => {
    let temp = {
      Ready: [],
      "In Progress": [],
      Testing: [],
      Done: [],
    };

    const tempData = {};

    data.forEach((item) => {
      if (item.status !== "") {
        tempData[item.status] = [...(tempData[item.status] || []), item];
      }
    });

    temp = { ...temp, ...tempData };
    setTaks(temp);
  };

  useEffect(() => {
    seprateTaks(allTaks);
  }, [allTaks]);

  const handleDragStart = (e, item, fromBoard) => {
    setDraggedItem(item);
    setDraggedFromBoard(fromBoard);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, toBoard, task) => {
    e.preventDefault();
    e.stopPropagation();

    if (draggedItem && draggedFromBoard !== toBoard) {
      const updatedBoards = { ...tasks };

      updatedBoards[draggedFromBoard] = updatedBoards[draggedFromBoard].filter(
        (item) => item !== draggedItem
      );

      let index = updatedBoards[toBoard].findIndex(
        (item) => item.id === task.id
      );

      if (!task) {
        updatedBoards[toBoard] = [...updatedBoards[toBoard], draggedItem];
      } else {
        updatedBoards[toBoard].splice(index, 0, draggedItem);
      }

      setTaks(updatedBoards);
      setDraggedItem(null);
      setDraggedFromBoard(null);
    }
  };

  const getColor = (boardName) => {
    switch (boardName) {
      case "Ready":
        return "skyblue";
      case "In Progress":
        return "orange";
      case "Testing":
        return "yellow";
      case "Done":
        return "Green";

      default:
        break;
    }
  };
  const isMobile = useMediaQuery("(max-width:740px)");

  return (
    <div style={{ display: isMobile ? "grid" : "flex" }}>
      {Object.keys(tasks).map((boardName, ind) => (
        <div
          key={ind}
          onDragOver={handleDragOver}
          onDrop={(e) => {
            e.stopPropagation();
            tasks[boardName].length === 0 && handleDrop(e, boardName);
          }}
          style={{
            flex: 1,
            margin: isMobile ? "" : "8px",
            minWidth: isMobile ? "90%" : "16.8rem",
            backgroundColor: "#f3f3f3",
            padding: 8,
          }}
        >
          <h3
            style={{
              marginBottom: "3rem",
              borderBottom: `0.25rem ${getColor(boardName)} solid`,
              borderRadius: "5px",
            }}
          >{`${boardName}(${tasks[boardName].length})`}</h3>
          {tasks[boardName].map((item) => (
            <TaskCard
              key={item.id}
              item={item}
              boardName={boardName}
              draggedItem={draggedItem}
              handleDragStart={handleDragStart}
              handleDrop={handleDrop}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
