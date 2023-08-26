"use client";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const CategoryHeader = ({ category }) => {
  const categoryName = category.toUpperCase();
  return (
    <ul className="flex gap-2 mx-36 mt-8 text-gray-600">
      <li className="flex justify-center items-center">
        <Link href="/">
          <HomeIcon className="h-4 w-4" />
        </Link>
      </li>
      <li>
        {" "}
        / <Link href={`/${category}`}>{categoryName}</Link>
      </li>
    </ul>
  );
};

export default CategoryHeader;
