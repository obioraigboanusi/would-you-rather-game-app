import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function NotFound() {
  return (
    <>
      <NavBar />
      <main>
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
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
