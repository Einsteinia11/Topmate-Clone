import React from "react";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
function Navbar() {
  const [activeNav, setActiveNav] = useState("Home");
  return (
    <nav>
      <div className="flex pt-[11px] font-[Gilroy] justify-around px-9">
        <div className="pt-[7px] lg:pt-[12px] ">
          <img src="topmate-dark.svg" className = "w-[100px] h-[27px] lg:w-[140px] lg:h-[27px] "></img>
        </div>
        <div className="hidden md:flex border-[#232323] border-2 justify-between items-center w-[430px] h-[40px] lg:w-[430px] lg:h-[50px] text-white bg-[#0B0B0F] p-1 rounded-xl">
          {["Home", "Listing", "For Experts", "Clips"].map((item, index) => (
            <div key={index} className="cursor-pointer ">
              {activeNav === item ? (
                <div className="px-[16px] py-[5px] lg:px-[24px] lg:py-[7px] font-semibold rounded-lg bg-[#2E2E2E] flex justify-center items-center">
                  <button>{item}</button>
                </div>
              ) : (
                <div className="px-[20px] font-semibold flex justify-center items-center">
                  <button onClick={() => setActiveNav(item)}>{item}</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-2 md:mt-0">
          <button className="bg-[#FFFFFF] w-[60px] h-[30px] lg:w-[90px] lg:h-[48px] text-xs md:text-md lg:text-[16px] rounded-xl font-[Gilroy] font-bold">
            Sign Up
          </button>
          <button className="text-white w-[30px] h-[30px] lg:w-[48px] lg:h-[48px] lg:text-[30px] bg-[#2E2E2E] flex justify-center items-center rounded-xl">
            <IoIosMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
