import React from "react";
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

export default function AppRoute({ ...props }) {
  return (
    <BrowserRouter>
      <Routes location={props.location}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          element={
            <div>
              <h1>PETER CHIJIOKE</h1>
              <Outlet />
            </div>
          }
        >
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
