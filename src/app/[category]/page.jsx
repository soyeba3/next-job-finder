/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import CategoryHeader from "@/components/categoryHeader/CategoryHeader";
import JobsCard from "@/components/jobsCard/JobsCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const page = ({ params }) => {
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("Default");
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

  const filterJob =
    data?.length > 0
      ? data?.filter((item) => {
          if (params.category === "allJobs") {
            return item;
          }
          return item.category === params.category;
        })
      : "";

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

  // /* The code `const filterByInput = filterJob.filter((item) => {...})` is filtering the `filterJob`
  // array based on two conditions: */
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
    <div className="min-h-[40vh] mx-28 border-[1px] bg-gray-100 border-gray-200 rounded-md">
      <CategoryHeader category={params.category} />
      <div className="py-8 px-36 flex gap-20 justify-center">
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

        <div className="flex-[1] flex">
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            className="relative w-full h-10 rounded-md p-1 font-thin outline-none border-none"
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
      <div className="flex flex-col items-center justify-center">
        {filterByInput?.length > 0 ? (
          filterByInput?.map((item) => (
            <JobsCard key={item.id} item={item} category={params.category} />
          ))
        ) : (
          <div>No Jobs Found</div>
        )}
      </div>
    </div>
  );
};

export default page;
