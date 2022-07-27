import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { SelectBtnContext } from "../../Context/SelectBtnContext";
import '../AdminSideBar/AdminSideBar.css'
function Sidebar() {
  const [open, setOpen] = useState(false);
  const [selectBtn,setSelectBtn]=useState(SelectBtnContext)

const navigate =useNavigate()
  const Menus = [
    { title: "Dashboard", src: "dashboard",nav:'/app' },
    { title: "Status", src: "status",nav:'/status' },
    { title: "Profile", src: "profile",nav:'/profile' },
  ];
  const handleSelect=(index)=>{
    setSelectBtn(index)
    return selectBtn
  }

  return (
   
      <div id={!open?"navbar":''}
        className={` ${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p- pt-8   relative  shadow-2xl  bg-gray-50  `}
      >
        <img id={!open?'navicon':''}
          onClick={() => setOpen(!open)}
          src="./icons/arrow-left-3099.png"
          className={`absolute cursor-pointer  rounded-full
-right-3 top-9 w-7 border-2 border-dark-purple duration-500  ${
            !open && "rotate-180"
          }`}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
            className={` ${
              !open && "rotate-180  "
            } cursor-pointer duration-500 w-7 ml-6`}
          />
          <h1
            className={`text-purple-700 origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            } `}
          >
            Nest{" "}
          </h1>
        </div>
        <ul className="pt-6 ">
          {Menus.map((menu, index) => (
            <li onClick={()=>{    handleSelect(index); navigate(menu.nav);  }}
              className={`text-gray-500 font-bold text-sm flex items-center gap-x-4 ml-4 mr-4 cursor-pointer p-2 hover:bg-slate-200 rounded-md mt-2 ${
                index === selectBtn && "bg-slate-200"
              }`}
              key={index}
            >
              <img
                className="w-8 duration-500"
                src={`./icons/${menu.src}.png`}
                alt=""
              />
              <span
                className={`    ${
                  !open && "scale-0 duration-300 "
                } origin-left duration-300`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      
      
 

   
  );
}

export default Sidebar;
