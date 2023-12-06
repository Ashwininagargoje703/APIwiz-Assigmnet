import React, { useEffect, useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasks, setTaks] = useState({
    Ready: [],
    "In Progress": [],
    Testing: [],
    Done: [],
  });
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedFromBoard, setDraggedFromBoard] = useState(null);

  const fetchTaskData = async () => {
    try {
      const res = await fetch("https://stage-mock.apiwiz.io/v1/tasks", {
        headers: {
          "x-tenant": "b8e236df-4b26-49ef-9532-5e43ea0c10a4",
        },
      });
      const data = await res.json();

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
    } catch (e) {
      console.log("something went wrong", e.message);
    }
  };

  useEffect(() => {
    fetchTaskData();
  }, []);

  const handleDragStart = (e, item, fromBoard) => {
    setDraggedItem(item);
    setDraggedFromBoard(fromBoard);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, toBoard) => {
    e.preventDefault();

    if (draggedItem && draggedFromBoard !== toBoard) {
      // Clone the boards object to avoid directly mutating the state
      const updatedBoards = { ...tasks };

      // Remove the item from the draggedFromBoard
      updatedBoards[draggedFromBoard] = updatedBoards[draggedFromBoard].filter(
        (item) => item !== draggedItem
      );

      // Add the item to the toBoard
      updatedBoards[toBoard] = [...updatedBoards[toBoard], draggedItem];

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

  return (
    <div style={{ display: "flex" }}>
      {Object.keys(tasks).map((boardName) => (
        <>
          <div
            key={boardName}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, boardName)}
            style={{
              flex: 1,
              padding: "8px",
              marginRight: "8px",
              minWidth: "20rem",
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
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default App;
