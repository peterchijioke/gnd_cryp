import React, { useEffect, useState } from "react";

import "./sidebar.scss";
import { RxDashboard } from "react-icons/rx";
import { FaUser, FaWallet } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { BsCurrencyExchange } from "react-icons/bs";
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
  const [active, setActive] = useState("");

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
        {/* ==============Dashboard */}
        <li
          onClick={() => {
            setActive("dashboard");
            // navigate("/professions/recently-edited", { replace: true });
          }}
        >
          <div className="icon-wrap">
            <RxDashboard onClick={openSidebar} size={18} />
          </div>
          Dashboard
        </li>
        {/* =======Wallet====== */}
        <li
          onClick={() => {
            setActive("wallet");
            // navigate("/professions/recently-edited", { replace: true });
          }}
        >
          <div className="icon-wrap">
            <FaWallet size={18} />
          </div>
          Wallet
        </li>
        {/* =========Currencies====== */}
        <li
          onClick={() => {
            setActive("currency");
            // navigate("/professions/recently-edited", { replace: true });
          }}
        >
          <div style={{ background: "#5250FA" }} className="icon-wrap">
            <BsCurrencyExchange
              style={{ color: "#fff" }}
              onClick={openSidebar}
              size={18}
            />
          </div>
          Currencies
        </li>
        {/* =============== */}
        <li
          onClick={() => {
            setActive("account");
            // navigate("/professions/recently-edited", { replace: true });
          }}
        >
          <div className="icon-wrap">
            <FaUser onClick={openSidebar} size={18} />
          </div>
          Account
        </li>
        {/* =============== */}
        <div className="log-out-wrapper">
          <button onClick={() => {}} type="button">
            Log Out
          </button>
        </div>
      </>
    </div>
  );
}
