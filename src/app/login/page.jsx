/* eslint-disable react/no-unescaped-entities */
"use client";

import { useGetLoggedUser } from "@/components/hooks/hooks";
import { loginSchema } from "@/components/schemas";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import loginImage from "public/contact.png";
import { useState } from "react";
import { toast } from "react-hot-toast";

const initialValues = {
  name: "",
  password: "",
};

const LoginPage = () => {
  const [errorMessage, setErrorMassage] = useState(false);
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [user, refetch] = useGetLoggedUser();

  const { isLoading, data, error } = useQuery({
    queryKey: ["login"],
    queryFn: () =>
      fetch("https://64eb3b83e51e1e82c5771ee6.mockapi.io/api/users")
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

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        setErrorMassage(false);
        const result = data?.filter(
          (item) =>
            item.email === values.email && item.password === values.password
        );

        if (result[0]?.name) {
          toast.success("Successfully Logged In");
          localStorage.setItem("user", JSON.stringify(result[0]));
          router.push("/");
          refetch();
        } else {
          setErrorMassage(true);
        }
      },
    });

  return (
    <>
      <title>Login</title>
      <div className="min-h-[82vh] md:min-h-[60vh] sm:min-h-full py-20 sm:py-10 sm:mx-auto flex sm:block sm:px-10 items-center justify-center bg-gray-100">
        <div className="flex-[1] sm:hidden sm:flex-none">
          <Image
            className="w-full object-contain h-80"
            src={loginImage}
            alt=""
          />
        </div>
        <div className="flex-[1] static md:flex md:justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 w-[70%] md:w-[80%] sm:w-full rounded shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <div className="mb-3">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
                placeholder="Enter your email"
              />
              {errors.name && touched.name ? (
                <p className="text-red-500 px-3 pt-2">{errors.name}</p>
              ) : null}
            </div>
            <div className="mb-3 relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type={active ? "text" : "password"}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
                placeholder="Enter your password"
              />
              {active ? (
                <EyeIcon
                  onClick={() => setActive((prev) => !prev)}
                  className="h-5 w-5 absolute cursor-pointer text-gray-600 top-11 right-3"
                />
              ) : (
                <EyeSlashIcon
                  onClick={() => setActive((prev) => !prev)}
                  className="h-5 w-5 absolute cursor-pointer text-gray-600 top-11 right-3"
                />
              )}
              {errors.password && touched.password ? (
                <p className="text-red-500 px-3">{errors.password}</p>
              ) : null}
            </div>
            {errorMessage ? (
              <p className="text-red-500 py-2 px-2">
                Email or password doesn't match
              </p>
            ) : (
              ""
            )}
            <button
              type="submit"
              className="w-full boder bg-primary text-white py-2 mb-2 px-4 rounded hover:bg-[#3e9b6c] focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Login
            </button>
            <div className="mt-4 flex flex-col items-center border-t-2 border-gray-200 ">
              <p className="pt-4 pb-1 sm:pb-1 sm:pt-2 text-center sm:text-sm">
                Don't have an account?{" "}
              </p>
              <span className="sm:text-sm" href="/register">
                Signup{" "}
                <Link className="text-primary sm:text-sm" href="/register">
                  here
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
