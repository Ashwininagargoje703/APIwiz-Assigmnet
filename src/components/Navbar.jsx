import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Button from "@mui/material/Button";
import { Chip, Link, useMediaQuery } from "@mui/material";
import { IoMdSettings } from "react-icons/io";
import { BiSolidBellRing } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:740px)");
  return (
    <div
      style={{
        marginLeft: isMobile ? 40 : 50,
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
        {/* HiOutlineArrowLeft Button */}
        <Button
          sx={{
            color: "#000000",
            fontSize: 16,
            fontWeight: 500,
            border: "1px solid #d8d1e3",
            padding: "10px 5px",
            display: isMobile ? "none" : "", // Hide on mobile
          }}
        >
          <HiOutlineArrowLeft />
        </Button>

        {/* Link */}
        <Link
          to="/"
          style={{
            color: "#000000",
            textDecoration: "none",
            fontSize: isMobile ? 16 : 22,
            fontWeight: 500,
          }}
        >
          Kanban Project
        </Link>

        {/* Chip */}
        <Chip
          label="#BSKP"
          size="small"
          style={{
            backgroundColor: "#04ccad",
            color: "white",
            marginTop: -5,
          }}
        />

        {/* Completed Button */}
        <Button
          sx={{
            color: "#c5c5c5",
            fontSize: 14,
            fontWeight: 500,
            border: "1px solid #c5c5c5",
            height: 25,
            textTransform: "none",
            display: isMobile ? "none" : "",
          }}
        >
          Completed
        </Button>

        {/* IoMdSettings Icon */}
        <Link to="">
          <IoMdSettings
            style={{
              color: "#c5c5c5",
              fontSize: 22,
            }}
          />
        </Link>

        {/* BiSolidBellRing Icon */}
        <Link to="">
          <BiSolidBellRing
            style={{
              color: "#04ccad",
              fontSize: 22,
            }}
          />
        </Link>

        {/* MdMoreHoriz Icon */}
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
          gap: isMobile ? 10 : 20,
          padding: "10px",
          paddingLeft: 1,
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
          {isMobile ? "" : "Timesheets"}
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
          {isMobile ? "" : "Discussions"}
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
          {isMobile ? "" : "  Activity Feed"}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
