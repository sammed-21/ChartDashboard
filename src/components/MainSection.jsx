"use client";
import React, { useState } from "react";
import Control from "/public/Controls.png";
import ProductBox from "./ProductBox";
import logoinsta from "/public/logoinsta.png";
import logotwiter from "/public/logotwitter.png";
import logoWatsapp from "/public/logowatsapp.png";
import logoMail from "/public/Mail.png";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { dummyBoxData } from "@/utils/dummy";
import BarChart from "./BarChart";
import searchIcon from "/public/search.png";
import ContactBox from "./ContactBox";
import UserProfile from "@/components/UserProfile";
import DounutChart from "./DounutChart";

const MainSection = () => {
  const { data: session } = useSession();
  // console.log(session.user.image)
  const [isOpen, setIsOpen] = useState(false);
  const [userProfileData, setUserProfileData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    instaLink: "",
    youTubeLink: "",
  });
  // console.log(userProfileData);
  const toggleModal = () => {
    setIsOpen(!isOpen); // Toggle modal visibility
  };
  return (
    <div className="max-md:w-full">

    <div className="w-full overflow-y-auto h-full px-2 flex flex-col justify-center  max-md:w-full no-scrollbar">
      <div className="flex w-full justify-between my-3 max-sm:items-end max-sm:justify-end">
        <h1 className="font-bold text-2xl  max-sm:hidden">Dashboard</h1>
        <div className="flex gap-2 w-full justify-end items-end max-sm:items-end">

        <div
          htmlFor="email"
          className="relative text-gray-400 focus-within:text-gray-600 block"
          >
            
          <Image
            src={searchIcon}
            width={15}
              height={15}
              
            className="pointer-events-none   absolute top-1/2 transform -translate-y-1/2 right-2 "
            />

          <input
            type="text"
            name="search"
            placeholder="Search..."
            className=" py-2 px-5 w-full max-sm:px-3 rounded-full"
            />
            </div>
          <div className="w-20 h-9">
            
          {session?.user &&(
            
            
            <Image
            src={session?.user.image}
            width={37}
                height={37}
                onClick={()=>signOut()}
                className="rounded-full"
                alt="profile"
                />
            
            )}
            </div>
            </div>

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
      <section className="w-full relative overflow-hidden drop-shadow-xl">
        <div className="bg-white p-6 pb-3 flex justify-center items-start flex-col w-full rounded-3xl max-h-72 mt-3 ">
          <div className="flex flex-col">
            <h1 className="font-xl font-bold text-md">Activities</h1>
            <p className="text-gray-400 text-xs">May - June 2021</p>
          </div>

          <BarChart />
        </div>
      </section>
      <div className="w-full  flex flex-wrap justify-between gap-9 items-center shadow-xl max-md:flex-col ">
        <div className="flex-1 justify-center rounded-3xl bg-white mt-2 shadow-2xl p-1 max-md:w-full  h-52   items-center">
          {/* <div className=""> */}
          <DounutChart />
          {/* </div> */}
        </div>
        <div className="flex-1 justify-center  rounded-3xl bg-white mt-2 shadow-xl p-1 max-md:w-full  h-52 flex items-center">
          {!userProfileData.name ? (
            // Render image with "+" when userProfileData.name is empty
            <div className="min-w-full items-center flex justify-center max-sm:h-52">
              <button
                type="button"
                onClick={toggleModal}
                data-modal-target="defaultModal"
                data-modal-toggle="defaultModal"
                className="flex justify-center items-center w-16 h-[3.7rem] rounded-full bg-gray-200"
                >
                <Image src={Control} width={40} height={40} alt="add profile" />
              </button>
            </div>
          ) : (
            // Render user data when userProfileData.name is not empty
            <div className="flex min-w-full px-4 flex-col gap-2 max-sm:flex-col max-sm:items-start ">
              <h1 className="font-bold justify-around px-3">
                {userProfileData.name}
              </h1>
              <div className="flex justify-between px-3 max-sm:flex-col  max-sm:items-start gap-3">
                <ContactBox
                  image={logoWatsapp}
                  text={userProfileData.phoneNo}
                  bgColor={"#E9F9EB"}
                  />
                <ContactBox
                  image={logoinsta}
                  text={userProfileData.instaLink}
                  bgColor={"#FFE9EC"}
                  />
              </div>
              <div className="flex min-w-full justify-between px-3 max-sm:flex-col max-md:h-full max-sm:items-start gap-3 ">
                <ContactBox
                  image={logoMail}
                  text={userProfileData.email}
                  bgColor={"#EBE6F9"}
                  />
                <ContactBox
                  image={logotwiter}
                  text={userProfileData.youTubeLink}
                  bgColor={"#FFE9E9"}
                  />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="relative">
        {/* Main modal */}
        {isOpen && (
          <UserProfile
          setIsOpen={setIsOpen}
          setUserProfileData={setUserProfileData}
          />
          )}
      </div>
      {/* modal */}
    </div>
          </div>
  );
};

export default MainSection;
