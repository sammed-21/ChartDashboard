"use client";
import React, { useState } from "react";
import Control from "/public/Controls.png";
import ProductBox from "./ProductBox";
import Image from "next/image";
import { dummyBoxData } from "@/utils/dummy";
import BarChart from "./BarChart";
import UserProfile from '@/components/UserProfile'
import DounutChart from "./DounutChart";

const MainSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userProfileData,setUserProfileData]=useState({name:"",email:"",phoneNo:"",instaLink:"",youTubeLink:""})
  const toggleModal = () => {
    setIsOpen(!isOpen); // Toggle modal visibility
  };
  return (
    <div className="w-full overflow-hidden h-full px-3 flex flex-col justify-center  max-md:w-full no-scrollbar">
      <div className="flex justify-evenly my-3">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <h1 className="font-bold text-2xl">Dashboard</h1>
      </div>

      <section className="mt-1 w-full flex flex-wrap gap-4 max-md:items-center max-md:justify-center ">
        {dummyBoxData.map((item, i) => {
          return (
            <div key={i}>
              <ProductBox
                image={item.image}
                bgColor={item.bgColor}
                title={item.title}
                text={item.text}
                number={item.number}
                percentage={item.percentage}
                downArrow={item.downArrow}
              />
            </div>
          );
        })}
      </section>
      <section className="w-full relative overflow-hidden drop-shadow-2xl">
        <div className="bg-white p-6 pb-3 flex justify-center items-start flex-col w-full rounded-3xl max-h-72 mt-3 ">
          <div className="flex flex-col">
            <h1 className="font-xl font-bold text-md">Activities</h1>
            <p className="text-gray-400 text-xs">May - June 2021</p>
          </div>

          <BarChart />
        </div>
      </section>
      <div className="w-full  flex flex-wrap justify-between gap-9 items-center shadow-2xl max-md:flex-col ">
        <div className="flex-1 justify-center rounded-3xl bg-white mt-2 shadow-2xl p-1 max-md:w-full  h-52  items-center">
          <div className="min-w-full">
            <DounutChart />
          </div>
        </div>
        <div className="flex-1 justify-center  rounded-3xl bg-white mt-2 shadow-2xl p-1 max-md:w-full  h-52 flex items-center">
       {
        userProfileData !==null 
       }
          <button type="button" onClick={toggleModal}  data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="flex justify-center items-center w-16 h-[3.7rem] rounded-full bg-gray-200" >
            <Image src={Control} width={40} height={40} alt="add profile " />
          </button>
        </div>
      </div>
      <div className="relative">
          
          {/* Main modal */}
          {
            isOpen &&
  
          <UserProfile   setIsOpen={setIsOpen} />
          }
        </div>
      {/* modal */}
          
    </div>
  );
};

export default MainSection;
