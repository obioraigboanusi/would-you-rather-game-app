import React from "react";
import NavBar from "../components/NavBar";

function NotFound() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "20vh",
        }}
      >
        <h1>404</h1>
        <p style={{ color: "teal" }}>Page not found!</p>
      </div>
    </div>
  );
}

export default NotFound;
