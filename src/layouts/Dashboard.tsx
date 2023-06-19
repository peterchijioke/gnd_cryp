import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import ToolBar from "./ToolBar";
import "./dasboard.scss";
import BackDrop from "./BackDrop";
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
  const ToggleSidebar = () => {
    setSidebarStatus((previousState) => !previousState);
  };
  return (
    <div className="page-wrapper">
      <SideBar openSidebar={openSidebar} sidebar={!sidebarStatus} />
      <div className="page-content">
        <BackDrop sidebar={!sidebarStatus} closeSidebar={ToggleSidebar} />
        <ToolBar openSidebar={openSidebar} />
        <div className="outlet-wrap">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
