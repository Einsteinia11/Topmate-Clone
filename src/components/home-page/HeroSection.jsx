import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function HeroSection() {
  const card = [
    {
      title: "Find Jobs",
      desc: "I'm not getting call back from HRs",
      icon: "smart_search.png",
      button: "Try",
    },
    {
      title: "Interview Preparation",
      desc: "I'm confused about my upcoming interview round",
      icon: "match.png",
      button: "Try",
    },
    {
      title: "Referral Finder",
      desc: "I'm looking for referrals",
      icon: "referral.png",
      button: "Get Referral",
    },
    {
      title: "Profile Match",
      desc: "Paste the LinkedIn profile. Get the right people to talk to.",
      icon: "linkedin.png",
      button: "Try",
    },
  ];
  return (
    <div className="bg-[#0D0D0D] ">
      <div className=" text-white flex justify-center mt-[55px] md:mt-[85px] px-2">
        <div className="w-full">
          {/* Heading */}
          <h1 className="w-full text-[35px] sm:text-[38px] md:text-[48px] lg:text-[69px] font-[Gilroy-Bold] font-bold text-center leading-tight break-words max-w-[90%] mx-auto">
            Get ready for your Dream Job!
          </h1>
          {/* Subheading */}
          <h3 className="text-[#999999] text-center mt-6 text-base sm:text-lg lg:text-2xl px-3">
            Tell us what is stopping you from cracking it!
          </h3>
          {/* Searchbar */}
          <div className="flex justify-center items-center mt-[33px] px-3">
            <div className="rounded-xl border-2 border-[#232323] hover:border-[#333333] p-[18px] flex items-center w-full max-w-[800px] h-[52px] xl:w-[800px] xl:h-[72px] md:w-[600px] md:h-[62px] bg-[#171717] hover:bg-[#1A1A1A]">
              <input
                className="w-full bg-transparent outline-none text-white placeholder:text-[#888] text-sm"
                placeholder="Need help with something? Describe it here."
              />
              <button className="bg-[#F05502] w-[36px] h-[36px] flex justify-center items-center rounded-xl text-black ml-3">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-[24px]">
            {/* Cards */}
            <div className="flex flex-wrap gap-[12px] md:gap-[8px] px-3">
              {card.map((item) => (
                <div
                  key={item}
                  className="mb-5 w-full rounded-xl transition-transform duration-300 hover:-translate-y-2 bg-[#171717] hover:bg-[#262626] md:w-[170px] xl:w-[288px] md:h-[350px] xl:h-[270px] p-[8px] md:p-[21px]"
                >
                  <div className="md:mb-[40px] flex md:block justify-between">
                    <div className="md:h-[280px] xl:h-[192px]">
                      <div className="flex md:block ">
                        <img
                          className="w-[40px] h-[40px] md:w-[64px] md:h-[64px]"
                          src={item.icon}
                        ></img>
                        <div className="px-1.5 md:px-0">
                          <div className="md:mt-[30px] md:text-[16px] lg:text-[20px] font-bold ">
                            {item.title}
                          </div>
                          <div className="text-[#888] md:mt-2 text-[14px] md:text-[16px]">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <button className="font-bold bg-[#EAE1D8] text-black text-sm px-1.5 sm:px-3 h-[36px] min-w-[55px] w-auto rounded-full">
                        {item.button}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
