/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useGetAllJobs } from "@/components/hooks/hooks";
import { applySchema } from "@/components/schemas";
import { useFormik } from "formik";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  address: "",
  resume: "",
  cover_letter: "",
};

const page = () => {
  const router = useRouter();
  const path = usePathname();
  const id = path.split("/")[2];

  const [data, reloadAll] = useGetAllJobs([]);

  const singleJob = data?.find((item) => {
    return item.id === id;
  });

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: applySchema,
      onSubmit: () => {
        const applied = JSON.parse(localStorage.getItem("applied")) || [];
        applied.push(singleJob);
        localStorage.setItem("applied", JSON.stringify(applied));
        toast.success("Application submisstion successfull");
        router.push("/applied");
      },
    });

  return (
    <>
      <title>Apply online</title>
      <div className="min-h-[40vh] mx-28 md:mx-14 sm:mx-0 border-[1px] bg-gray-100 border-gray-200 rounded-md">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white px-20 sm:px-5 py-10 sm:py-5 mx-40 md:mx-20 sm:m-3 my-20 sm:my-4  rounded shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-2 sm:mb-1">Apply Online</h2>
          <h3 className="text-xl font-medium text-primary mb-2 sm:mb-1">
            {singleJob?.jobTitle}
          </h3>
          <div className="flex flex-col gap-1">
            <label className="w-full text-gray-700 font-semibold">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
              placeholder="Enter your full name"
            />
            {errors.name && touched.name ? (
              <p className="text-red-500 text-left">{errors.name}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="w-full text-gray-700 font-semibold">
              Mobile Number <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
              placeholder="Enter your numer"
            />
            {errors.phone && touched.phone ? (
              <p className="text-red-500 text-left">{errors.phone}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="w-full text-gray-700 font-semibold">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
              placeholder="Enter your email"
            />
            {errors.email && touched.email ? (
              <p className="text-red-500 text-left">{errors.email}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="w-full text-gray-700 font-semibold">
              Full Address <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
              placeholder="Enter your address"
            />
            {errors.address && touched.address ? (
              <p className="text-red-500 text-left">{errors.address}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="w-full text-gray-700 font-semibold">
              Upload Resume <span className="text-red-600">*</span>
            </label>
            <small className="w-full">
              Be sure to include an updated resume{" "}
              <span className="text-red-600">*</span>
            </small>
            <input
              type="file"
              name="resume"
              value={values.resume}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border rounded py-2 px-3 file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-primary
          hover:file:bg-violet-100   focus:outline-none focus:border-primary"
              placeholder="Enter your address"
            />
            {errors.resume && touched.resume ? (
              <p className="text-red-500 text-left">{errors.resume}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="w-full text-gray-700 font-semibold">
              Cover Letter <span className="text-red-600">*</span>
            </label>
            <textarea
              name="cover_letter"
              value={values.cover_letter}
              onChange={handleChange}
              onBlur={handleBlur}
              rows="5"
              type="text"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
              placeholder="Write a cover letter"
            />
            {errors.cover_letter && touched.cover_letter ? (
              <p className="text-red-500 text-left">{errors.cover_letter}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 my-2 px-4 rounded hover:bg-[#3e9b6c] focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Apply
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
