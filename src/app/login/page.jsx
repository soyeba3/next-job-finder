/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import loginImage from "public/contact.png";

const LoginPage = () => {
  return (
    <div className="min-h-[82vh] py-20 flex items-center justify-center bg-gray-100 c">
      <div className="flex-[1]">
        <Image className="w-full object-contain h-80" src={loginImage} alt="" />
      </div>
      <div className="flex-[1]">
        <div className="bg-white p-8 w-[70%] rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full boder bg-primary text-white py-2 mb-2 px-4 rounded hover:bg-[#3e9b6c] focus:outline-none focus:ring-2 focus:ring-blue-300">
            Login
          </button>
          <div className="my-4 border-t-2 border-gray-200 ">
            <p className="py-4">
              Don't have an account? Signup{" "}
              <Link className="text-primary" href="/register">
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
