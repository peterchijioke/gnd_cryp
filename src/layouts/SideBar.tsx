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
          <div
            className="icon-wrap"
            style={{
              color: active === "dashboard" ? "#5250FA" : "#ECEFF8",
              backgroundColor: active === "dashboard" ? "#5250FA" : "#ECEFF8",
            }}
          >
            <RxDashboard
              style={{ color: active === "dashboard" ? "#fff" : "#565656" }}
              onClick={openSidebar}
              size={18}
            />
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
          <div
            className="icon-wrap"
            style={{
              color: active === "wallet" ? "#5250FA" : "#ECEFF8",
              backgroundColor: active === "wallet" ? "#5250FA" : "#ECEFF8",
            }}
          >
            <FaWallet
              style={{ color: active === "wallet" ? "#fff" : "#565656" }}
              size={18}
            />
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
          <div
            style={{
              color: active === "currency" ? "#5250FA" : "#ECEFF8",
              backgroundColor: active === "currency" ? "#5250FA" : "#ECEFF8",
            }}
            className="icon-wrap"
          >
            <BsCurrencyExchange
              style={{ color: active === "currency" ? "#fff" : "#565656" }}
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
          <div
            style={{
              color: active === "account" ? "#5250FA" : "#ECEFF8",
              backgroundColor: active === "account" ? "#5250FA" : "#ECEFF8",
            }}
            className="icon-wrap"
          >
            <FaUser
              style={{ color: active === "account" ? "#fff" : "#565656" }}
              onClick={openSidebar}
              size={18}
            />
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
