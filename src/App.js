import React, { useState } from "react";
import Home from "./Compoment/Home/Home";
import Login from "./Compoment/Login/login";
import Signup from "./Compoment/Signup/signup";

export default function App() {
  const [tab, setTab] = useState("signup");

  return (
    <div>
      {tab === "login" && <Login />}
      {tab === "home" && <Home />}
      {tab === "signup" && <Signup />}
    </div>
  );
}
