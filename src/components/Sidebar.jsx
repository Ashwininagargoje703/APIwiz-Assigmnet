import React, { useState } from "react";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import "./Sidebar.css"; // Import CSS file for styling
import { AiOutlineHome } from "react-icons/ai";
import { ImFilesEmpty } from "react-icons/im";
import { BsCalculator } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { MdScreenRotation } from "react-icons/md";
import { RiSignalTowerFill } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { FiCloudDrizzle } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";
import { FiTool } from "react-icons/fi";
import { Divider } from "@mui/material";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src="https://i.ibb.co/Zf1WsbK/Whats-App-Image-2023-12-06-at-3-50-19-PM.jpg"
          alt="alt"
          style={{
            width: "60px",
            height: "35px",
          }}
        />
      </div>
      <Divider color={"#71717e"} />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#">
              <AiOutlineHome fontSize={22} />
            </a>
          </li>
          <li>
            <a href="#">
              <ImFilesEmpty fontSize={22} />
            </a>
          </li>
          <li>
            <a href="#">
              <IoPersonOutline fontSize={22} />
            </a>
          </li>
          <li>
            <a href="#">
              <BsCalculator fontSize={22} />
            </a>
          </li>
          <li>
            <a href="#">
              <MdScreenRotation fontSize={22} />
            </a>
          </li>

          <li>
            <a href="#">
              <RiSignalTowerFill fontSize={22} />
            </a>
          </li>

          <li>
            <a href="#">
              <IoTimerOutline fontSize={22} />
            </a>
          </li>

          <li>
            <a href="#">
              <LuCircleDollarSign fontSize={22} />
            </a>
          </li>

          <li>
            <a href="#">
              <FiCamera fontSize={22} />
            </a>
          </li>
          <li>
            <a href="#">
              <LuWallet fontSize={22} />
            </a>
          </li>
          <li>
            <a href="#">
              <FiTool fontSize={22} />
            </a>
          </li>

          <div className="avatar-bottom">
            <img
              src="https://cdn.wallpapersafari.com/15/55/Jh0ZKD.jpg" // Replace with your avatar image URL
              alt="avatar"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                margin: "10px",
              }}
            />
            <span style={{ color: "#fff" }}>Ash</span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
