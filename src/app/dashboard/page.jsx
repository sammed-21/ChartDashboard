 'use client'
import React,{useState} from "react";
import SideBar from "@/components/SideBar";
import MainSection from "@/components/MainSection";

const Dashboard = () => {
 
  return (
  
 
    // <div className="relative w-full flex justify-between overflow-x-hidden bg-gray-100  p-3">
    //   <div className="  relative ">
    //     <SideBar />
    //   </div>
    

    //   <div className="  max-md:top-10 max-md:h-full max-md:w-[100%] mx-3 rounded-lg max-md:overflow-y-auto md:overflow-hidden max-md:mt-5 w-full h-full max-sm:p-1 max-sm:mx-1 max-md:no-scrollbar">
    //     <MainSection   />
    //   </div>
 
       
    //   </div>
    <div className="relative w-full flex justify-between overflow-x-hidden bg-gray-100  p-3">
      <div className="bg-gray-100  relative ">
        <SideBar />
      </div>
    

      <div className="  max-md:top-10 max-md:h-full max-md:w-[100%] mx-3 rounded-lg max-md:overflow-y-auto md:overflow-hidden max-md:mt-5 w-full h-full max-sm:p-1 max-sm:mx-1 max-md:no-scrollbar">
        <MainSection   />
      </div>
 
       
      </div>
 
  );
};

export default Dashboard;
 