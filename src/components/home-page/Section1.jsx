import React from 'react'
import call from "../../assets/call.svg"
import category from "../../assets/category.svg"
import fire from "../../assets/fire.svg"
import { FaArrowRight } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";

function Section1() {
  const btns = [
    {
      icon: category,
      title: "Find by Category",
    },
    {
      icon: fire,
      title: "Get Job Referral"
    },
    {
      icon: call,
      title: "Get HR list"
    },
    {
      icon: call,
      title: "Free Resources"
    }
  ]
  return (
    <div className="bg-[#EBE5D0] font-[Gilroy]">
      <div className="flex mx-[180px] ">
        {/* Content */}
        <div className="mt-[60px] w-[570px] ">
          {/* Heading */}
          <div className="text-[65px] font-bold">
            <h1 className="">All that you need to crack that job</h1>
          </div>
          {/* paragraph */}
          <div>
            <p className="text-[22px]  font-semibold mb-4">
              1:1 sessions and resources from people who've already cracked it.
              Get actionable startegies, mock interviews, referrals, and clarity
              - in minutes.
            </p>
          </div>
          {/*4 Button */}
          <div className="flex flex-wrap">
            {btns.map((item, index) => (
              <div key={index} className="">
                <div className="flex gap-4 bg-white rounded-xl h-[80px] w-[263px] my-[7.5px] mr-[15px]">
                  <div className="flex justify-center items-center pl-[16px]">
                    <img src={item.icon} className="w-[34px] h-[34px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <h3 className="text-xl font-semibold ">{item.title}</h3>
                  </div>
                  <div className="flex items-center justify-center">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* 2 Buttons */}
          <div className="flex items-center h-[46px] gap-3 text-sm  mt-[50px] mb-[60px]">
            <div className="flex items-center justify-center gap-1 border-gray-400 rounded-xl border-1 w-[197px] h-[46px] ">
              <div className="font-semibold">100K+</div>
              <div className="flex mt-1">
                {Array(5)
                  .fill(0)
                  .map((__, idx) => (
                    <IoStarOutline key={idx} />
                  ))}
              </div>
              <div className="font-semibold">reviews</div>
            </div>
            <div className="font-semibold flex items-center justify-center gap-1 border-gray-400 rounded-xl border-1 w-[162px] h-[46px]">
              1mn+ professionals
            </div>
          </div>
        </div>
        {/* Image */}
        <div>
          <img
            src="home-referral-jobs.png"
            className="mt-[60px] w-[510px] h-[510px] pl-[90px]"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Section1