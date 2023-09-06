"use client";

import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
const JobsCard = ({ item }) => {
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

  return (
    <Link
      href={`/${category}/${id}`}
      className="w-3/4 md:w-full sm:w-full flex flex-col gap-3 text-gray-700 rounded-md px-8 sm:px-4 py-4 my-6 sm:my-3 bg-white border border-gray-200 hover:drop-shadow-lg duration-300"
    >
      <h3 className="text-lg font-bold text-primary">{jobTitle}</h3>
      <p className="text-base font-bold">{company}</p>
      <div className="flex items-center gap-2">
        <MapPinIcon className="h-5 w-5 sm:h-4 sm:w-4" />
        <p>{location}</p>
      </div>
      <div className="flex items-center gap-2">
        <AcademicCapIcon className="h-5 w-5 sm:h-8 sm:w-8" />
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
    </Link>
  );
};

export default JobsCard;
