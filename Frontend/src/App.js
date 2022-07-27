import logo from './logo.svg';
import './App.css';
import React,{useEffect,useContext, useState} from 'react';
import {BrowserRouter,Route,Routes}  from 'react-router-dom'
 
import Home from './Pages/Home';
import {AuthPageContext,AuthSignupPageContext} from './Context/AuthPageContext'
import AppHome from './Pages/client/AppHome';
import Profile from './Pages/client/Profile';
import Status from './Pages/client/Status';
import { SelectBtnContext } from './Context/SelectBtnContext';
import AdminHome from './Pages/admin/AdminHome';
import AdminUsers from './Pages/admin/AdminUsers';
import AdminApprovals from './Pages/admin/AdminApprovals';

function App() {
  const [showLogin,setShowLogin] = useState(false)
  const [showSignup,setShowSignup] = useState(false)
  const [selectBtn,setSelectBtn]=useState()
  return (
    <AuthPageContext.Provider value={{showLogin,setShowLogin} }>
      <AuthSignupPageContext.Provider value={{showSignup,setShowSignup} }>
        <SelectBtnContext.Provider value={{selectBtn,setSelectBtn}}>
      <BrowserRouter> 
   
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/app" element={<AppHome/>} />
     <Route path="/profile" element={<Profile/>} />
     <Route path="/status" element={<Status/>} />


     <Route path="/admin" element={<AdminHome/>} />
       
        <Route path="/admin-users" element={<AdminUsers/>} />
        <Route path="/admin-approval-req" element={<AdminApprovals/>} />
   </Routes>
    
   </BrowserRouter>
   </SelectBtnContext.Provider>
   </AuthSignupPageContext.Provider>
<AuthSignupPageContext.Provider />
    </AuthPageContext.Provider>
  );
}

export default App;
