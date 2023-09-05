/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import JobsCard from "@/components/jobsCard/JobsCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const page = () => {
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("Default");

  // Get all wishlist jobs from local storage
  const { data: appliedJobs } = useQuery({
    queryKey: ["applied"],
    queryFn: () => {
      const applied = localStorage.getItem("applied")
        ? JSON.parse(localStorage.getItem("applied"))
        : null;
      return applied;
    },
  });

  // Filter jobs by job type [i.e full time, intern, remote]
  const filterByType =
    appliedJobs?.length > 0
      ? appliedJobs?.filter((item) => {
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
      <title>Applied Jobs</title>
      <div className="min-h-[40vh] mx-28 md:mx-14 sm:mx-5 border-[1px] bg-gray-100 border-gray-200 rounded-md">
        <div className="mx-[150px] md:mx-24 sm:mx-6 text-primary font-semibold text-lg mt-8">
          Applied Jobs
        </div>
        <div className="py-8 sm:py-4 px-36 md:px-20 sm:px-4 flex sm:flex-col gap-20 sm:gap-2 justify-center">
          <form className="flex-[2] text-black flex justify-between">
            <div className="overflow-hidden w-full flex justify-center">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="px-4 bg-white h-10 py-2 w-full focus:boder-[1px] focus:outline-green-400"
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
          className="flex sm:w-full sm:px-3 md:px-20
         flex-col items-center justify-center "
        >
          {filterByInput?.length > 0 ? (
            filterByInput?.map((item) => <JobsCard key={item.id} item={item} />)
          ) : (
            <div>No Jobs Found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
