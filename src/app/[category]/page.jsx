"use client";
import CategoryHeader from "@/components/categoryHeader/CategoryHeader";
import JobsCard from "@/components/jobsCard/JobsCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const page = ({ params }) => {
  return (
    <div className="min-h-[40vh] mx-28 border-[1px] bg-gray-100 border-gray-200 rounded-md">
      <CategoryHeader category={params.category} />
      <div className="py-8 px-36 flex gap-20 justify-center">
        <form className="w-1/2 text-black flex justify-between">
          <div className="overflow-hidden w-full flex justify-center">
            <input
              type="text"
              className="px-4 bg-white h-10 py-2 w-full focus:boder-[1px] focus:outline-green-400"
              placeholder="Search..."
            />
            <button className="flex text-white items-center justify-center bg-primary px-4 border-l">
              <MagnifyingGlassIcon className="h-4 w-4 text-grey-dark" />
            </button>
          </div>
        </form>
        <div className="pl-8 flex-[1] flex gap-4">
          <div className="flex-1 flex">
            <select
              className="relative w-full h-10 rounded-md p-1 font-thin outline-none border-none"
              type="select"
              name=""
            >
              <option value="" disabled>
                Job Type
              </option>
              <option value="">Full Time</option>
              <option value="">Remote</option>
              <option value="">Intern</option>
            </select>
          </div>
          <div className="flex-1 flex justify-end">
            <select
              className="relative h-10 w-full rounded-md p-1 font-thin outline-none border-none drop-shadow-sm"
              type="select"
              name=""
            >
              <option value="" disabled>
                Salary
              </option>
              <option value="">Salary low to high</option>
              <option value="">Salary high to low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <JobsCard category={params.category}  />
        <JobsCard category={params.category} />
        <JobsCard />
        <JobsCard />
      </div>
    </div>
  );
};

export default page;
