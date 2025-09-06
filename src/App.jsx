import logo from "../src/assets/logo.png";
 import { FaRegMoon } from "react-icons/fa6";
import List from "./component/List";
import Gridlist from "./component/Gridlist";
import { useState } from "react";
 export default function App() {
  const [isDark, setIsDark]= useState(false);
   return (
    <>
     <div className={(isDark ? 'dark ' : '') + "w-full h-[1200px] bg-[#EBF2FC] flex justify-center dark:bg-[#04091B]"}> 
     <div className="container">
      <div className="w-full h-[74px] rounded-3xl shadow-[#b3becc] bg-[#FBFDFE] mt-[40px] flex items-center justify-around dark:bg-[#202535]">
        <div className="w-[90%] h-[41px] flex items-center gap-4">
          <img src={logo} alt="" />
          <div>
            <h2 className="text-2xl text-[#091540] font-bold dark:text-[#FFFFFF]">Extensions</h2>
          </div>
        </div>
        <div>
          <button onClick={()=>
            {
              setIsDark(!isDark);
            }} 
          className="w-[50px] h-[50px] bg-[#EEEEEE] rounded-2xl flex items-center justify-center dark:bg-[#2F364B]">
          <FaRegMoon className="w-[22px] h-[22px] text-[#091540] dark:text-[#FBFDFE] " />
          </button>
        </div>
      </div>
      <List />
      <Gridlist />
     </div>
     </div>

    
     </>
   )
 }