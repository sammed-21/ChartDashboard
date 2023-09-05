"use client";
import React, { useState } from "react";
import SideBar from "@/components/SideBar";
import MainSection from "@/components/MainSection";

const Dashboard = () => {
  return (
     
    <div className="flex   min-w-full min-h-full relative p-2 gap-2 bg-gray-100 overflow-y-hidden">
      <div className="flex-1 z-50  pl-3 max-w:[30%]  min-h-[90vh] max-md:fixed">
      {/* <div className="flex-1  z-50 pl-3 max-w:[30%] max-md:fixed min-h-[90vh]"> */}
        <SideBar />
      </div>

      <div className="flex-3 flex flex-wrap gap-2 max-w-full max-md:ml-[8rem] max-md:h-full max-sm:ml-[4.5rem] max-md:mx-3  no-scrollable  min-h-full max-md:flex-col max-md:justify-center max-md:items-end max-md:w-full ">
         
          <MainSection />
        
      </div>
    </div>
     


  

  );
};

export default Dashboard;
 