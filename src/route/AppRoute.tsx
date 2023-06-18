import React from "react";
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Dashboard from "../layouts/Dashboard";

export default function AppRoute({ ...props }) {
  return (
    <BrowserRouter>
      <Routes location={props.location}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Dashboard />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        {props.children}
      </Routes>
    </BrowserRouter>
  );
}

const NotFound = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    page not found
  </div>
);
