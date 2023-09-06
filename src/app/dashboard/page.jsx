"use client";
import React, { useState } from "react";
import SideBar from "@/components/SideBar";
import MainSection from "@/components/MainSection";

const Dashboard = () => {
  return (
     
    <div className="p-3 max-sm:p-2 max-w-full max-h-screen flex flex-row justify-start ">
     
        <SideBar />
 

      <div className="flex-1 p-2 pl-3 max-sm:max-w-fit  max-sm:p-1">
          
          <MainSection />
        
      </div>
    </div>
  
     


  

  );
};

export default Dashboard;
 