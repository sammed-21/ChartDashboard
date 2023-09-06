"use client";
import React, { useState } from "react";
import Login from "./login/page";
import Dashboard from "./dashboard/page";
// import { SignOut, signIn, getProviders } from "next-auth/react";
import { useSession } from "next-auth/react";
 
 
export default function Home() {
  const session = useSession();
  return (
    <main className=" min-h-screen overflow-hidden  items-center justify-between  ">
      {!session.data ? <Login /> : <Dashboard />}
    </main>
  );
}
