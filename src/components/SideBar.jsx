"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Transaction from "/public/transaction_icon.png";
import Schedule from "/public/schedule_icon.png";
import Setting from "/public/setting_icon.png";
import UserI from "/public/user_icon.png";
import Dashboard from "/public/dashboard_icon.png";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";

const SideBar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    // try something diff in end mobile view
    <nav
      className={`loginbackground rounded-lg   z-50 text-white w-72 transition duration-700 ease-in-out max-md:w-fit max-xl:w-fit `}
    >
      <div className="p-5 py-5 md:flex min-h-[95vh] max-sm:p-2  ">
        <div className="flex justify-end xl:hidden transition translate-x-2">
          {openSidebar ? (
            <GrClose
              className="invert"
              size={30}
              onClick={() => setOpenSidebar((prev) => !prev)}
            />
          ) : (
            <HiBars3BottomRight
              size={30}
              onClick={() => setOpenSidebar((prev) => !prev)}
            />
          )}
        </div>
        <div
          className={`flex-col px-9 justify-between  xl:flex ${
            openSidebar ? "flex z-50" : "hidden"
          }   min-h-[90vh]
          items-center
          flex-col
          py-5
          
          justify-between
          flex max-md:px-3`}
        >
          <div className="flex flex-col  justify-center gap-9">
            <h1 className="!text-4xl logo !font-semibold">Board.</h1>

            <Link className="flex gap-3" href={""}>
              <Image src={Schedule} width={20} height={20} alt="discord" />
              Dashboard
            </Link>
            <Link className="flex gap-3" href={""}>
              <Image src={Transaction} width={20} height={20} alt="discord" />
              Transactions
            </Link>
            <Link className="flex gap-3" href={""}>
              <Image src={Setting} width={20} height={20} alt="discord" />
              Schedule
            </Link>
            <Link className="flex gap-3" href={""}>
              <Image src={UserI} width={20} height={20} alt="discord" />
              Users
            </Link>
            <Link className="flex gap-3" href={""}>
              <Image src={Dashboard} width={20} height={20} alt="discord" />
              Settings
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href="">Help</Link>
            <Link href="">Contact us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
