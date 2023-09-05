import Link from "next/link";

const Card = ({ title, url }) => {
  return (
    <Link
      className="sm:w-full md:w-1/4 duration-300 ease-in-out transform hover:scale-105"
      href={url}
    >
      <div className="bg-[#e3ebe3] w-56 md:w-44 sm:w-full text-center hover:bg-[#bdc4bd] duration-300 p-12 md:px-8 sm:px-4 sm:py-6 rounded-md">
        <h3 className="font-bold sm:font-bold text-sm sm:text-base text-primary_deep">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
