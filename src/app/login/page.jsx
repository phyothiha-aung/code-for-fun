import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { TfiFacebook, TfiTwitterAlt, TfiGoogle } from "react-icons/tfi";

const LoginPage = () => {
  return (
    <main className="h-screen bg-gradient-to-tr from-cyan-200 via-blue-400 to-fuchsia-700 p-10">
      <div className="w-[400px] mx-auto flex flex-col items-center bg-white rounded-md py-10">
        <h1 className="font-sans font-semibold text-xl">Login</h1>

        <div className="w-4/5 mt-5 border-b border-gray-400">
          <label htmlFor="username" className="text-sm text-black/80">
            Username
          </label>
          <div className="flex w-full items-center gap-2">
            <FaRegUser className="text-black font-bold" />
            <input
              type="text"
              id="username"
              className="grow ring-0 border-0 outline-none h-[40px] text-base text-black/80 font-thiner placeholder:text-sm"
              placeholder="Type your username"
            />
          </div>
        </div>

        <div className="w-4/5 mt-5 border-b border-gray-400">
          <label htmlFor="password" className="text-sm text-black/80 m-0">
            Password
          </label>
          <div className="flex w-full items-center gap-2 m-0">
            <MdLockOutline size={20} className="text-black" />
            <input
              type="password"
              id="password"
              className="grow ring-0 border-0 outline-none h-[45px] text-base text-black/80 font-thiner placeholder:text-sm"
              placeholder="Type your password"
            />
          </div>
        </div>

        <div className="w-4/5 mt-2 flex justify-end">
          <p className="text-xs text-black/60">Forgot password?</p>
        </div>

        <div className="w-4/5 mt-5">
          <button className="uppercase bg-gradient-to-r from-10% from-cyan-200 via-blue-400 to-90% to-fuchsia-500 w-full text-sm py-3 rounded-2xl text-white hover:opacity-80">
            LOGIN
          </button>
        </div>

        <div className="mt-8 w-full">
          <p className="text-xs text-center">Or Sign Up Using</p>
          <div className="mt-3 flex justify-center items-center gap-3">
            <span className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-700 cursor-pointer">
              <TfiFacebook className="text-white" size={22} />
            </span>
            <span className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-500 cursor-pointer">
              <TfiTwitterAlt size={20} className="text-white" />
            </span>
            <span className="flex justify-center items-center w-12 h-12 rounded-full bg-red-500 cursor-pointer">
              <TfiGoogle className="text-white" size={20} />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
