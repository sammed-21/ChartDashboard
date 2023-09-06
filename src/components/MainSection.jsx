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
import Bell from "/public/bell.png";
import UserProfile from "@/components/UserProfile";
import DounutChart from "./DounutChart";

const MainSection = () => {
  const { data: session } = useSession();
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
    setIsOpen(!isOpen); 
  };
  return (
    <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-6">
      <div className="w-full overflow-y-auto h-full   flex flex-col justify-center max-md:w-full no-scrollbar max-sm:w-fit max-sm:overflow-x-hidden">
        <div className="flex w-full justify-between my-2 max-sm:items-end max-md:justify-center max-sm:justify-center">
          <h1 className="font-bold text-2xl  max-sm:hidden">Dashboard</h1>
          <div className="flex justify-between items-center mb-4">
          <div className="relative w-48 ">
            <Image
              src={searchIcon}
              width={15}
              height={15}
              className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-2"
              alt="Search Icon"
            />
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="py-2 px-5  w-full bg-white rounded-full "
            />
          </div>
          <div className="flex gap-3 items-center">
            <Image
              src={Bell}
              width={20}
              height={20}
              className="rounded-full cursor-pointer"
              alt="Bell Icon"
            />
            {session?.user && (
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                onClick={() => signOut()}
                className="rounded-full cursor-pointer "
                alt="User Profile"
              />
            )}
          </div>
        </div>
        </div>
        <main className="max-h-[90vh] min-w-full max-sm:h-[90vh] overflow-y-auto no-scrollbar" >

        {/* <div className="overflow-y-auto max-md:ml-9 max-xl:h-[90vh] w-full no-scrollbar"> */}
        <div className="flex flex-wrap w-full justify-center items-center gap-3 md:gap-6">
          {dummyBoxData.map((item, i) => (
            <ProductBox
              key={i}
              image={item.image}
              bgColor={item.bgColor}
              title={item.title}
              text={item.text}
              number={item.number}
              percentage={item.percentage}
              downArrow={item.downArrow}
              />
              ))}
        </div>
          <section className="w-full relative overflow-hidden drop-shadow-xl">
            <div className="bg-white p-5  pb-3 flex justify-center items-start flex-col w-full rounded-3xl max-h-72 mt-2 max-md:max-w-full ">
              <div className="flex flex-col">
                <h1 className="font-xl font-bold text-md">Activities</h1>
                <p className="text-gray-400 text-xs">May - June 2021</p>
              </div>

              <BarChart />
            </div>
          </section>
          <div className="w-full  flex flex-wrap justify-between pt-1 drop-shadow-md gap-6 items-center shadow-xl max-xl:flex-col">
            <div className="flex-1 justify-center bg-white rounded-3xl mt-2 shadow-2xl p-1 max-md:w-full  h-52   items-center">
              {/* <div className=""> */}
              <DounutChart />
              {/* </div> */}
            </div>
            <div className="flex-1 justify-center bg-white  rounded-3xl drop-shadow-md mt-2 shadow-xl p-1 max-md:w-full w-full h-52 flex items-center">
              {!userProfileData.name ? (
                // Render image with "+" when userProfileData.name is empty
                <div className="min-w-full flex-col gap-3 items-center flex justify-center max-sm:h-72">
                  <button
                    type="button"
                    onClick={toggleModal}
                    data-modal-target="defaultModal"
                    data-modal-toggle="defaultModal"
                    className="flex justify-center items-center w-16 h-[3.7rem] bg-gray-200 rounded-full "
                    >
                    <Image
                      src={Control}
                      width={40}
                      height={40}
                      alt="add profile"
                      />
                  </button>
                  <p className="text-gray-400">Add Profile</p>
                </div>
              ) : (
                // Render user data when userProfileData.name is not empty
                <div className="flex min-w-full px-4 flex-col gap-2 max-sm:flex-col drop-shadow-md max-sm:items-start ">
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
            </main>
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
    // </div>
  );
};

export default MainSection;
