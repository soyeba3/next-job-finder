"use client";

import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  HomeIcon,
  MapPinIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useGetSavedJobs } from "../hooks/hooks";
const WishlistCard = ({ item }) => {
  const {
    id,
    company,
    deadline,
    education,
    experience,
    jobTitle,
    jobType,
    location,
    category,
  } = item || {};

  const [savedJobs, reload] = useGetSavedJobs();

  const handleTrashClick = () => {
    const filterSavedJobs = savedJobs.filter((item) => item.id !== id);
    localStorage.setItem("savedJobs", JSON.stringify(filterSavedJobs));
    reload();
    toast.success("Successfully Deleted");
  };

  return (
    <div className="w-3/4 md:w-full sm:w-full flex flex-col gap-2 text-gray-700 rounded-md px-8 sm:px-4 py-4 my-6 sm:my-2 bg-white border border-gray-200 hover:drop-shadow-lg duration-300">
      <div className="flex justify-between">
        <Link
          href={`/${category}/${id}`}
          className="text-lg sm:text-base font-bold text-primary"
        >
          {jobTitle}
        </Link>
        <div className="flex items-center">
          <TrashIcon
            onClick={handleTrashClick}
            className="h-5 w-5 text-red-500 cursor-pointer"
          />
        </div>
      </div>
      <p className="text-base font-bold sm:font-semibold">{company}</p>
      <div className="flex items-center gap-2">
        <MapPinIcon className="h-5 w-5 sm:h-4 sm:w-4" />
        <p>{location}</p>
      </div>
      <div className="flex items-center gap-2">
        <AcademicCapIcon className="h-5 w-5 sm:h-9 sm:w-9" />
        <p>{education}</p>
      </div>
      <div className="flex items-center gap-2">
        <BriefcaseIcon className="h-5 w-5 sm:h-4 sm:w-4" />
        <p>{experience}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <HomeIcon className="h-5 w-5 sm:h-4 sm:w-4" />
          <p>{jobType}</p>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 sm:h-4 sm:w-4" />
          <p className="">{deadline}</p>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
