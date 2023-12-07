import React, { useState } from "react";
import FilterSelect from "./FilterSelect";
import { RiSearchLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";

export default function Header({
  allTasks,
  filterHandler,
  handleSelectChange,
  search,
  setSearch,
}) {
  const groupBy = (data, key) => {
    let temp = [];

    data.forEach((item) => {
      if (!temp.includes(item[key]) && item[key] !== "") {
        temp.push(item[key]);
      }
    });

    return temp;
  };
  const [showFilter, setShowFilter] = useState(false);
  const isMobile = useMediaQuery("(max-width:740px)");

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        <div
          style={{
            gap: "0.25rem",
          }}
        >
          <button
            onClick={() => setShowFilter(!showFilter)}
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
            <FaFilter style={{ marginRight: "5px" }} /> Filter
          </button>
        </div>
        <div>
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
              <FilterSelect
                options={groupBy(allTasks, "assignee")}
                value={filterHandler.assignee}
                onChange={(e) => handleSelectChange("assignee", e.target.value)}
                placeholder="--Choose Assignee--"
              />

              <FilterSelect
                options={groupBy(allTasks, "priority")}
                value={filterHandler.severty}
                onChange={(e) => handleSelectChange("severty", e.target.value)}
                placeholder="--Choose Severity--"
              />

              <FilterSelect
                options={groupBy(allTasks, "startDate")}
                value={filterHandler.startDate}
                onChange={(e) =>
                  handleSelectChange("startDate", e.target.value)
                }
                placeholder="--Choose Start Date--"
              />

              <FilterSelect
                options={groupBy(allTasks, "endDate")}
                value={filterHandler.endDate}
                onChange={(e) => handleSelectChange("endDate", e.target.value)}
                placeholder="--Choose End Date--"
              />
            </div>
          )}
        </div>
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
  );
}
