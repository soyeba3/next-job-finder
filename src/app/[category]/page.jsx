/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import CategoryHeader from "@/components/categoryHeader/CategoryHeader";
import JobsCard from "@/components/jobsCard/JobsCard";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const page = ({ params }) => {
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("Default");

  //Fetch all jobs using tanstack query
  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["allData"],
    keepPreviousData: true,
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

  // Filter jobs by category
  const filterJob =
    data?.length > 0
      ? data?.filter((item) => {
          if (params.category === "allJobs") {
            return item;
          }
          return item.category === params.category;
        })
      : "";

  // Filter jobs by job type [i.e full time, intern, remote]
  const filterByType =
    filterJob?.length > 0
      ? filterJob.filter((item) => {
          if (selectedValue === "Default") {
            return item;
          } else {
            return item.jobType === selectedValue;
          }
        })
      : "";

  //Search jobs by input value
  const filterByInput =
    filterByType.length > 0
      ? filterByType?.filter((item) => {
          if (item.length === 0) {
            return <div>No Job's Found</div>;
          }
          return item.jobTitle
            ?.toLowerCase()
            .includes(value.toLocaleLowerCase());
        })
      : "";

  return (
    <>
      <title>{params?.category?.toUpperCase()}</title>
      <div className="min-h-[40vh] mx-28 md:mx-14 sm:mx-0 border-[1px] bg-gray-100 border-gray-200 rounded-md">
        <CategoryHeader category={params.category} />
        <div className="py-8 sm:py-4 px-36 md:px-20 sm:px-4 flex sm:flex-col gap-20 sm:gap-2 justify-center">
          <form className="flex-[2] text-black flex justify-between">
            <div className="w-full flex justify-center">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="px-4 bg-white h-10 py-2 sm:py-1 w-full focus:boder-[1px] focus:outline-green-400"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="flex text-white items-center justify-center bg-primary px-4 border-l"
              >
                <MagnifyingGlassIcon className="h-4 w-4 text-grey-dark" />
              </button>
            </div>
          </form>

          <div className="flex-[1] flex sm:hidden">
            <select
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="w-full sm:w-1/3 h-10 p-1 font-thin outline-none border-none"
              type="select"
              name=""
            >
              <option value="Default">Default</option>
              <option value="Full Time">Full Time</option>
              <option value="Remote">Remote</option>
              <option value="Intern">Intern</option>
            </select>
          </div>
        </div>
        <div
          className="flex md:px-20 sm:w-full sm:px-4
         flex-col items-center justify-center"
        >
          {isLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : filterByInput?.length > 0 ? (
            filterByInput?.map((item) => (
              <JobsCard key={item.id} item={item} category={params.category} />
            ))
          ) : (
            <div>No Jobs Found</div>
          )}
        </div>
      </div>{" "}
    </>
  );
};

export default page;
