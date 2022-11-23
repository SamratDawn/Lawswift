import React from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import LoginClient from "./Pages/Login/LoginClient";
import SignClient from "./Pages/Signup/SignClient";
import LoginLawyer from "./Pages/Login/LoginLawyer";
import SignLawyer from "./Pages/Signup/SignLawyer";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/loginclient" element={<LoginClient />} />
      <Route exact path="/signclient" element={<SignClient />} />
      <Route exact path="/loginlawyer" element={<LoginLawyer />} />
      <Route exact path="/signlawyer" element={<SignLawyer />} />
    </Routes>
  );
};

export default App;
