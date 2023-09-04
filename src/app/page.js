"use client";
import React, { useState } from "react";
import Login from "./login/page";
import Dashboard from "./dashboard/page";
// import { SignOut, signIn, getProviders } from "next-auth/react";
export default function Home() {
  const [providers, setProvider] = useState(null);
  // const isUserLoggedIn = true;
  return (
    <main className="md:flex min-h-screen   items-center justify-between  ">
      <Dashboard /> 
      {/* <Login /> */}
    </main>
  );
}
