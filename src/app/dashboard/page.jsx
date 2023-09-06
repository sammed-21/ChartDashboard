"use client";
import React, { useState } from "react";
import SideBar from "@/components/SideBar";
import MainSection from "@/components/MainSection";

const Dashboard = () => {
  return (
     
    <div className="p-3 max-sm:p-1 max-w-full max-h-screen flex flex-row justify-start">
      {/* <div className="flex-1  z-20 pl-3 max-w:[30%]  min-h-[90vh] max-md:fixed"> */}
    
        <SideBar />
 

      <div className="flex-1 p-2 pl-3 max-sm:max-w-fit  max-sm:p-1">
      {/* <div className=" flex flex-wrap gap-2 max-w-full max-md:ml-[8rem] max-md:h-full max-sm:ml-[4.5rem] max-md:mx-3  no-scrollable  min-h-full max-md:flex-col max-md:justify-center max-md:items-end max-md:w-full "> */}
         
          <MainSection />
        
      </div>
    </div>
    // <div className="flex   min-w-full min-h-full relative p-2 bg-gray-100 overflow-y-hidden">
    //   {/* <div className="flex-1  z-20 pl-3 max-w:[30%]  min-h-[90vh] max-md:fixed"> */}
    //   <div className="  z-10 ">
    //     <SideBar />
    //   </div>

    //   <div className="w-full ">
    //   {/* <div className=" flex flex-wrap gap-2 max-w-full max-md:ml-[8rem] max-md:h-full max-sm:ml-[4.5rem] max-md:mx-3  no-scrollable  min-h-full max-md:flex-col max-md:justify-center max-md:items-end max-md:w-full "> */}
         
    //       <MainSection />
        
    //   </div>
    // </div>
     


  

  );
};

export default Dashboard;
 