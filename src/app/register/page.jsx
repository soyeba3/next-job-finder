"use client";

import Image from "next/image";
import loginImage from "public/contact.png";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex-[1]">
        <Image className="w-full object-contain h-80" src={loginImage} alt="" />
      </div>
      <div className="flex-[1]">
        <div className="bg-white p-8 w-[70%] rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
              placeholder="Enter your Password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
              placeholder="Enter your Password"
            />
          </div>
          <button className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-[#3e9b6c] focus:outline-none focus:ring-2 focus:ring-blue-300">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
