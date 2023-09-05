'use client'
import Image from "next/image";
import React from "react";
import discord from "/public/carbon_logo-discord.png"
// import discord from "/public/carbon_logo-discord.png";
import linkedin from "/public/carbon_logo-linkedin.png";
import github from "/public/github.png";
import Vector from "/public/twiter.png";
import { useSession ,signIn,signOut} from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session,status  } = useSession();
   return (
    <div className="relative   bg-gray-100 md:overflow-hidden md:flex w-full ">
      <div className="w-1/2 hidden md:flex relative">
        <span className="bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 border border-blue-500 min-h-[180vh] -left-28 absolute z-10 w-full -top-[20vh] overflow-visible rotate-12   inset-0">
           <div className="-rotate-12 pl-10">

          <div className=" absolute w-1/2 z-20 top-[23vh] flex flex-col justify-between h-[90vh] mr-10 ">
              <h1 className="text-white w-10 font-extrabold text-center text-Poppins font-Poppins ">LOGO</h1>

              <div className="w-full flex justify-center items-center">
                <h1 className="logo">Board.</h1>
              </div>

              <div className="flex w-full items-center justify-center gap-7 ">
                <Image src={github} width={40} height={40} alt="discord" />
                <Image src={Vector} width={40} height={40} alt="discord" />
                <Image src={linkedin} width={40} height={40} alt="discord" />
                <Image src={discord} width={40} height={40} alt="discord" />
              </div>
            </div>
          </div>
         </span>
      </div>

       <div className="max-md:items-center max-md:w-full flex justify-center w-1/2 min-h-screen items-center flex-1 ">
        <section className="  min-h-[30vh] flex items-center justify-center">
          <div className="bg-gray-100  flex rounded-2xl  ">
            <div className="px-5">
              <h1 className="text-2xl font-bold text-black ">Sign In</h1>
              <p className="text-sm mt-4 text-black">Sign in to your account</p>
              <div className="w-full gap-5 flex justify-around">
                {/* <button className="flex bg-white w-1/2"> */}
                <button onClick={()=>signIn()} className="bg-white border py-1 w-1/2 rounded-xl mt-5 flex justify-around items-center text-sm hover:scale-105 duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_0_170)">
                      <path
                        d="M15.4001 8.116C15.4001 7.48636 15.3478 7.02688 15.2346 6.5504H7.87695V9.39229H12.1957C12.1087 10.0985 11.6385 11.1621 10.5936 11.8768L10.579 11.972L12.9053 13.7331L13.0665 13.7488C14.5467 12.4129 15.4001 10.4474 15.4001 8.116Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M7.87696 15.6037C9.9928 15.6037 11.7691 14.923 13.0665 13.7488L10.5936 11.8768C9.93187 12.3278 9.04371 12.6426 7.87696 12.6426C5.80464 12.6426 4.04578 11.3068 3.4188 9.4604L3.32689 9.46803L0.907916 11.2974L0.876282 11.3834C2.16495 13.8849 4.81197 15.6037 7.87696 15.6037Z"
                        fill="#34A853"
                      />
                      <path
                        d="M3.41874 9.4604C3.2533 8.98391 3.15756 8.47335 3.15756 7.94583C3.15756 7.41825 3.2533 6.90775 3.41003 6.43126L3.40565 6.32978L0.95636 4.47101L0.876224 4.50826C0.345103 5.54634 0.0403442 6.71206 0.0403442 7.94583C0.0403442 9.1796 0.345103 10.3453 0.876224 11.3833L3.41874 9.4604Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M7.87696 3.24898C9.34847 3.24898 10.3411 3.87011 10.9071 4.38918L13.1187 2.279C11.7604 1.04523 9.9928 0.287949 7.87696 0.287949C4.81197 0.287949 2.16495 2.0067 0.876282 4.50826L3.41009 6.43127C4.04578 4.58487 5.80464 3.24898 7.87696 3.24898Z"
                        fill="#EB4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_170">
                        <rect
                          width="15.3686"
                          height="15.3686"
                          fill="white"
                          transform="translate(0.0396118 0.287949)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-xs font-light text-gray-400">
                    sign in with Google
                  </span>
                </button>
                <button className="bg-white border py-1 w-1/2 rounded-xl mt-5 flex justify-around items-center text-sm hover:scale-105 duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_0_178)">
                      <path
                        d="M7.53348 1.52879C8.55093 0.197925 9.96544 0.191437 9.96544 0.191437C9.96544 0.191437 10.1758 1.44268 9.16505 2.64802C8.08578 3.93506 6.85904 3.72446 6.85904 3.72446C6.85904 3.72446 6.62869 2.71225 7.53348 1.52879ZM6.98845 4.60095C7.51188 4.60095 8.48334 3.8869 9.74783 3.8869C11.9244 3.8869 12.7807 5.42395 12.7807 5.42395C12.7807 5.42395 11.106 6.2737 11.106 8.33559C11.106 10.6616 13.1922 11.4632 13.1922 11.4632C13.1922 11.4632 11.7339 15.5368 9.76404 15.5368C8.8593 15.5368 8.15592 14.9317 7.20264 14.9317C6.23118 14.9317 5.26715 15.5594 4.63927 15.5594C2.84051 15.5594 0.568054 11.6952 0.568054 8.58896C0.568054 5.53288 2.49154 3.92971 4.29569 3.92971C5.46855 3.92971 6.3787 4.60095 6.98845 4.60095Z"
                        fill="#999999"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_178">
                        <rect
                          width="12.6242"
                          height="15.3686"
                          fill="white"
                          transform="translate(0.568054 0.190186)"
                        />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                  <span className="text-xs font-light text-gray-400">
                    sign in with Apple
                  </span>
                </button>
              </div>
              <form
                className="mt-6 bg-white p-7 rounded-xl"
                action="#"
                method="POST"
              >
                <div>
                  <label className="block font-xs font-Loto  text-black">
                    Email address
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-1.5 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autoFocus
                    autoComplete="required"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-black">Password</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Enter Password"
                    minLength="6"
                    className="w-full px-4 py-1.5 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    required
                  />
                </div>

                <div className="text-left mt-2 pt-3">
                  <a
                    href="#"
                    className="text-sm font-semibold text-blue-400 hover:text-blue-700 focus:text-blue-700"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400   text-white font-semibold rounded-lg px-4 py-1.5 mt-6"
                >
                  Sign In
                </button>
              </form>

              <div className="text-sm flex gap-1 text-[#858585] justify-center items-center mt-5">
                <p>don&apos;t have an account?</p>
                <button className="text-sm font-semibold text-[#346BD4] hover:text-blue-700 focus:text-blue-700">
                  Register
                </button>
              </div>
            </div>

        
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
