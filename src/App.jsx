import React, { useEffect, useState } from "react";
import "./App.css";
import TaskBoard from "./components/TaskBoard";
import FilterSelect from "./components/FilterSelect";
import Header from "./components/Header";
import Metrics from "./components/Metrics";
import { IoMdArrowDropdown } from "react-icons/io";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Divider, useMediaQuery } from "@mui/material";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const [filterHandler, setFilterHandler] = useState({
    assignee: "",
    severty: "",
    startDate: "",
    endDate: "",
  });

  document.title = "Task Board";

  const fetchTaskData = async () => {
    try {
      const res = await fetch("https://stage-mock.apiwiz.io/v1/tasks", {
        headers: {
          "x-tenant": "b8e236df-4b26-49ef-9532-5e43ea0c10a4",
        },
      });
      const data = await res.json();
      setAllTasks(data);
      console.log(data);
    } catch (e) {
      console.log("something went wrong", e.message);
    }
  };

  useEffect(() => {
    fetchTaskData();
  }, []);

  const filterAllData = (arr) => {
    let temp = [...arr];

    if (filterHandler.assignee !== "") {
      temp = temp.filter((item) => item.assignee === filterHandler.assignee);
    }

    if (filterHandler.severty !== "") {
      temp = temp.filter((item) => item.priority === filterHandler.severty);
    }

    if (filterHandler.startDate !== "") {
      temp = temp.filter((item) => item.startDate === filterHandler.startDate);
    }

    if (filterHandler.endDate !== "") {
      temp = temp.filter((item) => item.endDate === filterHandler.endDate);
    }

    return temp;
  };

  const handleSelectChange = (field, value) => {
    setFilterHandler((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const searchData = (data, searchTerm) => {
    if (searchTerm === "") return data;

    const searchKeys = [
      "assignee",
      "effortSpent",
      "endDate",
      "name",
      "priority",
      "startDate",
      "status",
      "summary",
      "type",
    ];
    let tempData = [...data];

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredData = tempData.filter((item) => {
      return searchKeys.some((key) => {
        const value = item[key];
        return (
          value && value.toString().toLowerCase().includes(lowerCaseSearchTerm)
        );
      });
    });

    return filteredData;
  };
  const isMobile = useMediaQuery("(max-width:740px)");
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Divider />
      <div
        style={{
          marginLeft: isMobile ? 30 : 40,
        }}
      >
        <div
          style={{
            display: isMobile ? "grid" : "flex",
            justifyContent: "space-between",
            marginTop: 10,
            marginLeft: isMobile ? "" : 8,
          }}
        >
          <Header
            allTasks={allTasks}
            handleSelectChange={handleSelectChange}
            search={search}
            setSearch={setSearch}
            filterHandler={filterHandler}
          />

          <div>
            <button
              onClick={togglePopup}
              style={{
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                height: 40,
              }}
            >
              Metrics <IoMdArrowDropdown />
            </button>
            {showPopup && (
              <Metrics allTaks={filterAllData(searchData(allTasks, search))} />
            )}
          </div>
        </div>

        <TaskBoard allTaks={filterAllData(searchData(allTasks, search))} />
      </div>
    </div>
  );
}

export default App;
