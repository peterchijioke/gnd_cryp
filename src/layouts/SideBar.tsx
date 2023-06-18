import React, { useEffect, useState } from "react";

import "./sidebar.scss";
import { RxDashboard } from "react-icons/rx";
import { ImProfile } from "react-icons/im";
import { AiFillCaretLeft } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/icons/logo-.svg";

export default function SideBar({ sidebar, openSidebar, ...props }: any) {
  const navigate = useNavigate();
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1000px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 1000px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, [window.matchMedia("(max-width: 1000px)").matches]);
  const [sidebarStatus, setSidebarStatus] = useState(matches);

  return (
    <div className={sidebar ? "sidebar sidebar-open" : "sidebar"}>
      <li
        style={{
          backgroundColor: "white",
          color: "#08093C",
          borderBottom: "1px solid #08093C",
        }}
      >
        <div className="app-logo">
          <img src={Logo} alt="app logo" />
        </div>
        {matches && (
          <GrFormClose
            onClick={openSidebar}
            style={{
              position: "absolute",
              right: 0,
              marginRight: "1rem",
            }}
            size={25}
          />
        )}
      </li>
      <>
        <li
          onClick={() => {
            navigate("/professions/recently-edited", { replace: true });
          }}
        >
          <div className="icon-wrap"></div>
        </li>
        <li
          onClick={() => {
            navigate("/professions");
          }}
        >
          <ImProfile />
          Profession
          <AiFillCaretLeft
            style={{
              position: "absolute",
              right: 0,
              color: "#08093C",
            }}
            size={45}
          />
        </li>
        <div className="log-out-wrapper">
          <button onClick={() => {}} type="button">
            Log Out
          </button>
        </div>
      </>
    </div>
  );
}
