import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/login"></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Dashboard />} path="/"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
