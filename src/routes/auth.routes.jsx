import { Routes, Route, Navigate } from "react-router-dom";

import { SingIn } from "../Pages/SingIn";
import { SingUp } from "../Pages/SingUp";

export function AuthRoutes() {
  const user = localStorage.getItem("@mranotes:user");

  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/register" element={<SingUp />} />

      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  );
}
