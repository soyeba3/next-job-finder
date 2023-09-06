"use client";

import { signUpSchema } from "@/components/schemas";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import loginImage from "public/contact.png";
import { useState } from "react";
import toast from "react-hot-toast";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const RegisterPage = () => {
  const router = useRouter();
  const [activePassword, setActivePassword] = useState(false);
  const [activeConfimPassword, setActiveConfirmPassword] = useState(false);
  const [eyePassword, setEyePassword] = useState(false);
  const [eyeConfirmPassword, setEyeConfirmPassword] = useState(false);
  const mutation = useMutation({
    mutationFn: (value) => {
      const res = fetch(
        "https://64eb3b83e51e1e82c5771ee6.mockapi.io/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        }
      ).then((res) => {
        setTimeout(() => {
          if (res.ok === true) {
            router.push("/login");
          }
        }, 2000);
      });
      toast.promise(
        res,
        {
          loading: "Loading",
          success: "Congrats! Signup successfull",
          error: "Error when fetching",
        },
        {
          success: {
            duration: 3000,
            icon: "🔥",
          },
        }
      );
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        mutation.mutate(values);
      },
    });

  const handlePasswordEye = () => {
    setActivePassword((prev) => !prev);
    setEyePassword((prev) => !prev);
  };

  const handleEyeConfirmPassword = () => {
    setActiveConfirmPassword((prev) => !prev);
    setEyeConfirmPassword((prev) => !prev);
  };

  return (
    <>
      <title>Sign up</title>
      <div className="min-h-screen md:min-h-[62vh] sm:min-h-full py-10 sm:px-8 flex sm:block items-center justify-center bg-gray-100">
        <div className="flex-[1] sm:hidden">
          <Image
            className="w-full object-contain h-80"
            src={loginImage}
            alt=""
          />
        </div>
        <div className="flex-[1] md:flex md:justify-center sm:flex sm:justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 w-[70%] md:w-[80%] sm:w-full rounded shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
                placeholder="Enter your name"
              />
              {errors.name && touched.name ? (
                <p className="text-red-500 pt-2">{errors.name}</p>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
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
                <p className="text-red-500 pt-2">{errors.email}</p>
              ) : null}
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type={activePassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
                placeholder="Enter your Password"
              />
              {eyePassword ? (
                <EyeIcon
                  onClick={handlePasswordEye}
                  className="h-5 w-5 absolute cursor-pointer text-gray-600 top-11 right-3"
                />
              ) : (
                <EyeSlashIcon
                  onClick={handlePasswordEye}
                  className="h-5 w-5 absolute cursor-pointer text-gray-600 top-11 right-3"
                />
              )}

              {errors.password && touched.password ? (
                <p className="text-red-500  pt-2">{errors.password}</p>
              ) : null}
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type={activeConfimPassword ? "text" : "password"}
                name="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
                placeholder="Enter your Password"
              />
              {eyeConfirmPassword ? (
                <EyeIcon
                  onClick={handleEyeConfirmPassword}
                  className="h-5 w-5 absolute cursor-pointer text-gray-600 top-11 right-3"
                />
              ) : (
                <EyeSlashIcon
                  onClick={handleEyeConfirmPassword}
                  className="h-5 w-5 absolute cursor-pointer text-gray-600 top-11 right-3"
                />
              )}
              {errors.confirm_password && touched.confirm_password ? (
                <p className="text-red-500 pt-2">{errors.confirm_password}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white my-2 py-2 px-4 rounded hover:bg-[#3e9b6c] focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              SIGN UP
            </button>
            <div className="mt-4 border-t-2 border-gray-200 ">
              <p className="py-2 text-center">
                Already have an account? Login{" "}
                <Link className="text-primary" href="/login">
                  here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
