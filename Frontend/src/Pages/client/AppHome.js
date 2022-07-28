import Sidebar from "../../Components/Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import HomePage from "../../Components/Home/HomePage";
import {useNavigate} from 'react-router-dom'

function AppHome() {

  const navigate=useNavigate()
  useEffect(()=>{
    const userInfo =localStorage.getItem("userInfo");
    if(userInfo){
      navigate('/app')
    }
  },[]);
  
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
