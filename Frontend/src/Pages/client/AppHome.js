import Sidebar from "../../Components/Sidebar/Sidebar";
import React, { useState } from "react";
import Profile from "./Profile";
import HomePage from "../../Components/Home/HomePage";

function AppHome() {
  return (
    <div>
      <div className="flex">
        <Sidebar />

       <HomePage/>

        <div className="p-7  "></div>
      </div>
    </div>
  );
}

export default AppHome;
