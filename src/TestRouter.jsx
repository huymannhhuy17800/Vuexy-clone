import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import { User } from "./components/DashBoard/User/User";

export const TestRouter = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/user"}>User</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  );
};
