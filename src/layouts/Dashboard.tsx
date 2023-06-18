import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import ToolBar from "./ToolBar";
import "./dasboard.scss";
export default function Dashboard() {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1000px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 1000px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, [window.matchMedia("(max-width: 1000px)").matches]);
  const [sidebarStatus, setSidebarStatus] = useState(matches);
  const openSidebar = () => setSidebarStatus(!sidebarStatus);
  return (
    <div className="page-wrapper">
      <SideBar openSidebar={openSidebar} sidebar={!sidebarStatus} />

      <div className="page-content">
        <ToolBar openSidebar={openSidebar} />
        <Outlet />
      </div>
    </div>
  );
}
