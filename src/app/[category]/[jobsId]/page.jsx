/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import CategoryHeader from "@/components/categoryHeader/CategoryHeader";
import { useGetSavedJobs } from "@/components/hooks/hooks";
import JobDetailSkeleton from "@/components/skeleton/JobDetailSkeleton";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const page = ({ params }) => {
  const [savedJobs, reload] = useGetSavedJobs([]);
  const [isApplied, setIsApplied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const user =
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"));
  const router = useRouter();
  const { jobsId } = params || {};

  //Fetch a single jobs data using params id
  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["singleData"],
    keepPreviousData: true,
    queryFn: () =>
      fetch(`https://64eb3b83e51e1e82c5771ee6.mockapi.io/api/jobs/${jobsId}`)
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

  useEffect(() => {
    const appliedJobs =
      typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("applied"));
    const result =
      typeof window !== "undefined" &&
      appliedJobs?.find((item) => item.id === jobsId);

    if (result) {
      setIsApplied(true);
    }
    const saved = savedJobs?.find((item) => item.id === jobsId);
    if (saved) {
      setIsSaved(true);
    }
  }, [jobsId, savedJobs]);

  //Handle apply button
  const handleApplyButton = () => {
    if (user) {
      router.push(`/jobs/${params.jobsId}/apply`);
    } else {
      router.push("/login");
    }
  };

  // Handle save button
  const handleSaveButton = () => {
    if (typeof window !== "undefined" && user) {
      let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

      savedJobs.push(data);

      localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
      reload();
      toast.success("Job Saved Successfully");
    } else {
      router.push("/login");
    }
  };

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
    <>
      <title>{jobTitle}</title>
      <div className="min-h-[40vh] mx-28 md:mx-14 sm:mx-4 sm:px-1 border-[1px] bg-gray-100 border-gray-200 rounded-md">
        <CategoryHeader category={params.category} />
        {isLoading || isFetching ? (
          <JobDetailSkeleton />
        ) : (
          <div className="flex flex-col items-center md:px-14 justify-center">
            <div className="w-3/4 md:w-full sm:w-full  flex flex-col gap-2 rounded-md p-20 sm:p-5 my-6 sm:my-3 bg-white border border-gray-200">
              <h3 className="text-xl font-bold text-primary">{jobTitle}</h3>
              <p className="text-base font-bold">{company}</p>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-6 sm:h-4 w-6 sm:w-4" />
                <p>{location}</p>
              </div>
              <div className="flex items-center gap-2">
                <AcademicCapIcon className="h-6 sm:h-7 w-6 sm:w-7" />
                <p>{education}</p>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="h-6 sm:h-4 w-6 sm:w-4" />
                <p>{experience}</p>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-6 sm:h-4 w-6 sm:w-4" />
                <p>{deadline}</p>
              </div>
              <div className="flex gap-2">
                <button
                  disabled={isApplied}
                  onClick={handleApplyButton}
                  className={`px-4 py-2 rounded-md ${
                    isApplied ? "" : "bg-primary"
                  } duration-200 hover:bg-[#367c59] ${
                    isApplied
                      ? "text-primary cursor-not-allowed border-[1px] border-primary hover:bg-inherit"
                      : "text-white"
                  }

                  href="/jobs/2/apply`}
                >
                  {isApplied ? "Applied" : "Apply"}
                </button>
                <button
                  onClick={handleSaveButton}
                  disabled={isSaved}
                  className={`px-4 py-1 rounded-md  ${
                    isSaved && "cursor-not-allowed hover:bg-inherit"
                  } border-[1px] duration-200 border-primary hover:bg-[#d1eee0ea] text-primary`}
                  href="/jobs/2/apply"
                >
                  {isSaved ? "Saved" : "Save"}
                </button>
              </div>
              <div className="py-6 flex flex-col gap-2">
                <h3 className="text-2xl font-medium">About the Job</h3>
                <p className="px-4 sm:px-0">
                  A well-established IT firm that specializes in building
                  high-quality, feature-rich native mobile and web applications,
                  is looking for a React.js Front-End Web Developer. As a
                  developer, you will be responsible for developing user
                  interface components and implementing them using React.js
                  workflows (such as Flux or Redux). The selected candidate will
                  coordinate with the rest of the team working on different
                  layers of the infrastructure and will ensure the scalability
                  of the applications. The company is leading the industry by
                  providing high-quality software solutions. This is an exciting
                  opportunity as the selected candidate will join a team of
                  experts in developing unique innovative solutions.
                </p>
                <div className="py-4">
                  <h5 className="text-base font-medium">
                    Job Responsibilities:
                  </h5>
                  <ul className="list-disc flex flex-col gap-2 pl-10 sm:pl-4 py-4">
                    <li>Develop and implement UI components</li>
                    <li>Design and build intuitive front-end applications</li>
                    <li>
                      Work with managers, engineers and designers to deliver
                      desired outcomes
                    </li>
                    <li>
                      Interact with clients’ technical leadership, understand
                      the requirements & execute them
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
        )}
      </div>
    </>
  );
};

export default page;
