"use client";
import React, { useState } from "react";
import SideBar from "@/components/SideBar";
import MainSection from "@/components/MainSection";

const Dashboard = () => {
  return (
    <div className="flex flex-row min-w-full gap-5 bg-gray-100">
      <div className="flex-1 pl-3 max-w:[25%] max-h:[95vh]">
        <SideBar />
      </div>

      <div className="flex-3 flex flex-wrap gap-4 pr-2  overflow-y-auto no-scrollable max-w-[80%] min-h-[95vh] max-md:flex-col max-md:justify-center max-md:items-center max-md:w-full ">
         
          <MainSection />
        
      </div>
    </div>
    
  );
};

export default Dashboard;
 