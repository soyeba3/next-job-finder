/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import CategoryHeader from "@/components/categoryHeader/CategoryHeader";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const page = ({ params }) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["allData"],
    queryFn: () =>
      fetch(
        `https://64eb3b83e51e1e82c5771ee6.mockapi.io/api/jobs/${params.jobsId}`
      )
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

  console.log(data);

  const {
    jobTitle,
    education,
    deadline,
    company,
    experience,
    jobType,
    location,
    salary,
  } = data || {};

  return (
    <div className="min-h-[40vh] mx-28 border-[1px] bg-gray-100 border-gray-200 rounded-md">
      <CategoryHeader category={params.category} />
      <div className="flex flex-col items-center justify-center">
        <div className="w-3/4 flex flex-col gap-2 rounded-md p-20 my-6 bg-white border border-gray-200">
          <h3 className="text-xl font-bold text-primary">{jobTitle}</h3>
          <p className="text-base font-bold">{company}</p>
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-6 w-6" />
            <p>{location}</p>
          </div>
          <div className="flex items-center gap-2">
            <AcademicCapIcon className="h-6 w-6" />
            <p>{education}</p>
          </div>
          <div className="flex items-center gap-2">
            <BriefcaseIcon className="h-6 w-6" />
            <p>{experience}</p>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-6 w-6" />
            <p>{deadline}</p>
          </div>
          <div className="flex gap-2">
            <Link
              className="px-4 py-2 rounded-md bg-primary duration-200 hover:bg-[#367c59] text-white"
              href="/jobs/2/apply"
            >
              Apply
            </Link>
            <button
              className="px-4 py-1 rounded-md border-[1px] duration-200 border-primary hover:bg-[#d1eee0ea] text-primary"
              href="/jobs/2/apply"
            >
              Save
            </button>
          </div>
          <div className="py-6 flex flex-col gap-2">
            <h3 className="text-2xl font-medium">About the Job</h3>
            <p className="px-4">
              A well-established IT firm that specializes in building
              high-quality, feature-rich native mobile and web applications, is
              looking for a React.js Front-End Web Developer. As a developer,
              you will be responsible for developing user interface components
              and implementing them using React.js workflows (such as Flux or
              Redux). The selected candidate will coordinate with the rest of
              the team working on different layers of the infrastructure and
              will ensure the scalability of the applications. The company is
              leading the industry by providing high-quality software solutions.
              This is an exciting opportunity as the selected candidate will
              join a team of experts in developing unique innovative solutions.
            </p>
            <div className="py-4">
              <h5 className="text-base font-medium">Job Responsibilities:</h5>
              <ul className="list-disc flex flex-col gap-2 pl-10 py-4">
                <li>Develop and implement UI components</li>
                <li>Design and build intuitive front-end applications</li>
                <li>
                  Work with managers, engineers and designers to deliver desired
                  outcomes
                </li>
                <li>
                  Interact with clients’ technical leadership, understand the
                  requirements & execute them
                </li>
                <li>
                  Utilize a wide range of systems & technologies to solve
                  potential proble
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
