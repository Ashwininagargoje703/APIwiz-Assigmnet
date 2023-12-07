import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { FaFilter } from "react-icons/fa";
import TaskBoard from "./components/TaskBoard";
import { RiSearchLine } from "react-icons/ri";
import { Divider, useMediaQuery } from "@mui/material";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
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
      console.log("data", data);
    } catch (e) {
      console.log("something went wrong", e.message);
    }
  };

  useEffect(() => {
    fetchTaskData();
  }, []);

  const groupByAssignee = (data) => {
    let temp = [];

    data.forEach((item) => {
      if (!temp.includes(item.assignee) && item.assignee !== "") {
        temp.push(item.assignee);
      }
    });

    return temp;
  };

  const groupBySeverty = (data) => {
    let temp = [];

    data.forEach((item) => {
      if (!temp.includes(item.priority) && item.priority !== "") {
        temp.push(item.priority);
      }
    });

    return temp;
  };

  const groupByStartDate = (data) => {
    let temp = [];

    data.forEach((item) => {
      if (!temp.includes(item.startDate) && item.startDate !== "") {
        temp.push(item.startDate);
      }
    });

    return temp;
  };

  const groupByEndDate = (data) => {
    let temp = [];

    data.forEach((item) => {
      if (!temp.includes(item.endDate) && item.endDate !== "") {
        temp.push(item.endDate);
      }
    });

    return temp;
  };

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

  const handleAssigneeSelect = (e) => {
    const selectedValue = e.target.value;
    setFilterHandler((prev) => ({
      ...prev,
      assignee: selectedValue,
    }));
  };

  const handleSeveritySelect = (e) => {
    const selectedValue = e.target.value;
    setFilterHandler((prev) => ({
      ...prev,
      severty: selectedValue,
    }));
  };

  const handleStartDateSelect = (e) => {
    const selectedValue = e.target.value;
    setFilterHandler((prev) => ({
      ...prev,
      startDate: selectedValue,
    }));
  };

  const handleEndDateSelect = (e) => {
    const selectedValue = e.target.value;
    setFilterHandler((prev) => ({
      ...prev,
      endDate: selectedValue,
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
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Navbar />
          <Divider />
          <div
            style={{
              marginLeft: isMobile ? 30 : 50,
            }}
          >
            <div style={{ marginBottom: "2rem", marginTop: 5 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: 15,
                  padding: 5,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <button
                    onClick={() => setShowFilter(!showFilter)}
                    style={{
                      padding: "8px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      backgroundColor: "#f9f9f9",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FaFilter style={{ marginRight: "5px" }} /> Filter
                  </button>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "200px",
                    marginLeft: "10px",
                  }}
                >
                  <input
                    type="search"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder="Search..."
                    style={{
                      padding: "12px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      height: "40px", // Adjust height here
                      width: "100%",
                      paddingRight: "30px", // Space for the icon
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: "8px",
                      color: "#888",
                    }}
                  >
                    <RiSearchLine />
                  </div>
                </div>
              </div>

              {showFilter && (
                <div
                  style={{
                    marginTop: "10px",
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: "#f9f9f9",
                    display: "grid",
                    maxWidth: 250,
                    gap: 10,
                    zIndex: 99999,
                    position: "absolute",
                  }}
                >
                  <select
                    className="selectInput"
                    onChange={handleAssigneeSelect}
                    value={filterHandler.assignee}
                    name="assignee"
                    id="assignee-select"
                  >
                    <option value="">--Choose Assignee--</option>
                    {groupByAssignee(allTasks).map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    className="selectInput"
                    onChange={handleSeveritySelect}
                    value={filterHandler.severty}
                    name="severity"
                    id="severity-select"
                  >
                    <option value="">--Choose Severty--</option>
                    {groupBySeverty(allTasks).map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    className="selectInput"
                    onChange={handleStartDateSelect}
                    value={filterHandler.startDate}
                    name="startdate"
                    id="start-date-select"
                  >
                    <option value="">--Choose start date--</option>
                    {groupByStartDate(allTasks).map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <select
                    className="selectInput"
                    onChange={handleEndDateSelect}
                    value={filterHandler.endDate}
                    name="enddate"
                    id="end-date-select"
                  >
                    <option value="">--Choose end date--</option>
                    {groupByEndDate(allTasks).map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <TaskBoard allTaks={filterAllData(searchData(allTasks, search))} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
