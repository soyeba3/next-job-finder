"use client";

import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "public/nextLogo.svg";
import { useState } from "react";
import {
  useGetAllJobs,
  useGetLoggedUser,
  useGetSavedJobs,
} from "../hooks/hooks";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  // Get saved jobs from local storage using tanstack query
  const [savedJobs, reload] = useGetSavedJobs([]);

  const [user, refetch] = useGetLoggedUser();

  const [data, reloadAll] = useGetAllJobs([]);

  const appliedJobs =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("applied"));

  // Logout handler function
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
    refetch();
    setActive(false);
    router.push("/");
  };

  return (
    <nav className="flex justify-between relative sm:pr-1 bg-white max-w-[90rem] mx-20 sm:mx-5 my-6">
      <Link className="flex gap-2 justify-center items-center" href="/">
        <Image width={20} className="sm:w-4" src={logo} alt="" />
        <h1 className="text-xl font-bold sm:text-base">
          Next <span className="text-primary">Job</span> Finder
        </h1>
      </Link>
      {user?.name ? (
        <button
          onClick={() => setActive((prev) => !prev)}
          className="my-auto text-sm flex items-center gap-1 rounded-full px-4 sm:px-2 py-2 sm:py-1 bg-primary hover:bg-primary_deep text-white duration-300 ease-in-out transform hover:scale-105"
        >
          <UserCircleIcon className="h-5 sm:h-4 w-5 sm:w-4 text-white" />
          {user?.name}
        </button>
      ) : (
        <div className="flex justify-between gap-2 sm:gap-1">
          <Link
            href="/login"
            className="my-auto rounded-full px-4 sm:px-4 py-2 sm:py-1 sm:text-sm bg-primary hover:bg-primary_deep text-white transition duration-300 ease-in-out transform hover:scale-105 "
          >
            Login
          </Link>
          <Link
            href="/register"
            className="my-auto sm:hidden rounded-full px-4 sm:px-3 py-2 sm:py-1 sm:text-sm bg-primary hover:bg-primary_deep text-white duration-300 ease-in-out transform hover:scale-105"
          >
            Sign up
          </Link>
        </div>
      )}
      {active ? (
        <div className="w-[13%] sm:w-[40%] md:w-[26%] absolute right-0 top-10 drop-shadow-md z-20 bg-white border-[1px] border-gray-200">
          <Link
            onClick={() => setActive(false)}
            href="/wishlist"
            className="flex justify-between group px-3 py-2 text-sm cursor-pointer hover:bg-primary hover:text-white transition duration-300 ease-in-out transform hover:scale-105 text-gray-500"
          >
            <p>Saved</p>
            <p className="bg-primary group group-hover:bg-white group-hover:text-primary px-2 text-white rounded-full">
              {savedJobs?.length < 0 || savedJobs === null
                ? 0
                : savedJobs?.length}
            </p>
          </Link>
          <Link
            onClick={() => setActive(false)}
            href="/applied"
            className="flex justify-between group px-3 py-2 text-sm cursor-pointer  hover:bg-primary hover:text-white transition duration-300 ease-in-out transform hover:scale-105 text-gray-500"
          >
            <p>Applied</p>
            <p className="bg-primary group group-hover:bg-white group-hover:text-primary px-2 text-white rounded-full">
              {appliedJobs === null ? 0 : appliedJobs?.length}
            </p>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left text-sm px-3 py-2  hover:bg-primary hover:text-white text-gray-500 fduration-300 ease-in-out transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
