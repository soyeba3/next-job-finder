import Link from "next/link";

const Card = ({ title, url }) => {
  return (
    <Link
      className="duration-300 ease-in-out transform hover:scale-105"
      href={url}
    >
      <div className="bg-[#e3ebe3] w-56 text-center hover:bg-[#bdc4bd] duration-300 p-12 rounded-md">
        <h3 className="font-bold text-sm text-primary_deep">{title}</h3>
      </div>
    </Link>
  );
};

export default Card;
