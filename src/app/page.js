/* eslint-disable react/no-unescaped-entities */
"use client";

import Card from "@/components/card/Card";
import { categories } from "@/data";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
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

  console.log(filterByInput);

  return (
    <div className="mx-20">
      <div className="flex items-center gap-8">
        <div className="flex-[2] w-full flex flex-col gap-10">
          <h3 className="text-4xl font-semibold">
            Find Your <span className="text-primary">Dream Job</span> Here
          </h3>
          <div className="w-3/4 relative flex gap-4">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="h-12 w-full rounded-md bg-gray-50 pl-10 pr-4 font-thin outline-none border-2 border-primary drop-shadow-sm focus:bg-white focus:drop-shadow-lg"
              type="text"
              name=""
              placeholder="Search by keyword"
            />
            {filterByInput?.length > 0 ? (
              <div className="w-[83%] bg-slate-200 my-1 z-20 rounded-md px-2 absolute flex flex-col gap-2 top-12 py-2">
                {filterByInput
                  ? filterByInput?.map((item) => {
                      return (
                        <Link
                          href={`/${item?.category}/${item?.id}`}
                          key={item.id}
                          className="bg-white px-2 py-1 text-primary_deep font-medium"
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
          <Image src={Hero} alt="" className="w-full h-80 object-contain" />
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-[32px]">Browse Job by Categories</h3>
        <div className="flex justify-between items-center my-6">
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
    </div>
  );
}
