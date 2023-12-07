import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Button from "@mui/material/Button";
import { Chip, Link } from "@mui/material";
import { IoMdSettings } from "react-icons/io";
import { BiSolidBellRing } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";

const Navbar = () => (
  <div
    style={{
      width: "100%",
    }}
  >
    <nav
      style={{
        display: "flex",
        gap: 10,
        paddingBottom: 10,
        backgroundColor: "white",
      }}
    >
      <Button
        sx={{
          color: "#000000",
          fontSize: 16,
          fontWeight: 500,
          border: "1px solid #d8d1e3",
          padding: "10px 5px",
        }}
      >
        <HiOutlineArrowLeft />
      </Button>
      <Link
        to="/"
        style={{
          color: "#000000",
          textDecoration: "none",
          fontSize: 22,
          fontWeight: 500,
        }}
      >
        Basic Structure Kanban Project
      </Link>
      <Chip
        label="#BSKP"
        size="small"
        style={{
          backgroundColor: "#04ccad",
          color: "white",
          marginTop: -5,
        }}
      />
      <Button
        sx={{
          color: "#c5c5c5",
          fontSize: 14,
          fontWeight: 500,
          border: "1px solid #c5c5c5",
          height: 25,
          textTransform: "none",
        }}
      >
        Completed
      </Button>
      <Link to="">
        <IoMdSettings
          style={{
            color: "#c5c5c5",
            fontSize: 22,
          }}
        />
      </Link>
      <Link to="">
        <BiSolidBellRing
          style={{
            color: "#04ccad ",
            fontSize: 22,
          }}
        />
      </Link>

      <Link to="">
        <MdMoreHoriz
          style={{
            color: "#c5c5c5",
            fontSize: 22,
          }}
        />
      </Link>
    </nav>
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "10px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      <Link
        to=""
        style={{
          color: "#000000",
          textDecoration: "none",
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        Tasks
      </Link>
      <Link
        to="/milestones"
        style={{
          color: "#000000",
          textDecoration: "none",
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        Milestones
      </Link>
      <Link
        to="/timesheets"
        style={{
          color: "#000000",
          textDecoration: "none",
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        Timesheets
      </Link>
      <Link
        to="/files"
        style={{
          color: "#000000",
          textDecoration: "none",
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        Files
      </Link>
      <Link
        to="/discussions"
        style={{
          color: "#000000",
          textDecoration: "none",
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        Discussions
      </Link>
      <Link
        to="/activity-feed"
        style={{
          color: "#000000",
          textDecoration: "none",
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        Activity Feed
      </Link>
    </nav>
  </div>
);

export default Navbar;
