import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      <Routes>
        {/* Root path "/" */}
        <Route
          path="/"
          element={
            token ? (
              <Navigate to="/login" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Home page (protected) */}
        {/* <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/login" replace />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
