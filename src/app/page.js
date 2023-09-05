/* eslint-disable react/no-unescaped-entities */
"use client";

import Card from "@/components/card/Card";
import { categories } from "@/data";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import Contact from "public/contact.png";
import Hero from "public/hero.png";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  const { isLoading, data, error } = useQuery({
    queryKey: ["allData"],
    queryFn: () =>
      fetch("https://64eb3b83e51e1e82c5771ee6.mockapi.io/api/jobs")
        .then((res) => {
          if (!res.ok) {
            throw "Something went wrong!";
          }
          return res.json();
        })
        .catch((err) => {
          throw err;
        }),
  });

  const filterByInput =
    data?.length > 0
      ? data?.filter((item) => {
          if (item.length === 0) {
            return <div>No Job's Found</div>;
          }
          if (value === "") {
            return null;
          }
          return item?.jobTitle?.toLowerCase().includes(value?.toLowerCase());
        })
      : null;

  return (
    <>
      <title>Home</title>
      <div className="mx-20 sm:mx-5">
        <div className="flex items-center sm:flex-col-reverse gap-8">
          <div className="flex-[2] w-full flex flex-col gap-10 sm:gap-4">
            <h3 className="text-4xl md:text-2xl sm:text-2xl font-semibold">
              Find Your <span className="text-primary">Dream Job</span> Here
            </h3>
            <div className="w-3/4 sm:w-full relative flex gap-4">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-12 sm:h-10 w-full rounded-md bg-gray-50 px-5 font-thin outline-none border-2 border-primary drop-shadow-sm focus:bg-white focus:drop-shadow-lg"
                type="text"
                name=""
                placeholder="Search by keyword"
              />
              {filterByInput?.length > 0 ? (
                <div className="w-[83%] md:w-[71%] sm:w-[73%] bg-slate-200 my-1 z-20 rounded-md px-2 absolute flex flex-col gap-2 top-12 py-2">
                  {filterByInput
                    ? filterByInput?.slice(0, 4)?.map((item) => {
                        return (
                          <Link
                            href={`/${item?.category}/${item?.id}`}
                            key={item.id}
                            className="bg-white z-20 px-2 py-1 text-primary_deep font-medium hover:drop-shadow"
                          >
                            <h1>{item.jobTitle}</h1>
                          </Link>
                        );
                      })
                    : ""}
                </div>
              ) : null}
              <button className="bg-primary hover:bg-primary_deep duration-200 text-white font-bold py-1 px-4 rounded">
                Search
              </button>
            </div>
          </div>
          <div className="flex-[1]">
            <Image
              src={Hero}
              alt=""
              className="w-full h-80 sm:h-60 object-contain"
            />
          </div>
        </div>
        <div className="my-5">
          <h3 className="text-[32px] sm:mt-10 sm:text-xl sm:font-semibold">
            Browse Job by Categories
          </h3>
          <div className="flex sm:w-full sm:flex-col md:flex-wrap md:gap-10 justify-between md:justify-start sm:gap-4 items-center sm:items-start my-6 sm:px-1">
            {categories?.map((category) => {
              return (
                <Card
                  key={category.id}
                  title={category?.title}
                  url={category?.url}
                />
              );
            })}
          </div>
        </div>
        <div className="flex items-center my-20 sm:flex-col-reverse md:flex-col-reverse gap-20">
          <div className="flex-[1] pr-10 md:pr-0 sm:pr-0">
            <Image
              src={Contact}
              alt=""
              className="w-full h-80 sm:h-60 object-contain"
            />
          </div>
          <div className="flex-[1] w-full flex flex-col gap-10 sm:gap-4">
            <h3 className="text-3xl text-gray-800 sm:text-xl font-semibold">
              Discover Exciting Opportunities
            </h3>
            <div className="w-3/4 md:w-full sm:w-full flex flex-col gap-4">
              <div className="flex gap-2 text-gray-600 items-start">
                <div className="pt-2">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <p className="text-lg text-gray-700">
                  Browse through thousands of job listings from top companies
                  and industries
                </p>
              </div>
              <div className="flex gap-2 text-gray-600 items-start">
                <div className="pt-2">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <p className="text-lg">
                  Browse through thousands of job listings from top companies
                  and industries
                </p>
              </div>
              <div className="flex gap-2 text-gray-600 items-start">
                <div className="pt-2">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <p className="text-console.log();">
                  Browse through thousands of job listings from top companies
                  and industries
                </p>
              </div>
              <div className="flex gap-2 text-gray-600 items-start">
                <div className="pt-2">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <p className="text-console.log();">
                  Customize your search, set preferences, and find the perfect
                  match for your skills and aspirations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
