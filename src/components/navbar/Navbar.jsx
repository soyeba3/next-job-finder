import Image from "next/image";
import Link from "next/link";
import logo from "public/nextLogo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white max-w-[90rem] mx-20 my-6">
      <Link className="flex gap-2 justify-center items-center" href="/">
        <Image width={20} src={logo} alt="" />
        <h1 className="text-xl font-bold">
          Next <span className="text-primary">Job</span> Finder
        </h1>
      </Link>
      <div className="flex justify-between gap-2">
        <Link
          href="/login"
          className="my-auto rounded-full px-4 py-2 bg-primary hover:bg-primary_deep text-white transition duration-300 ease-in-out transform hover:scale-105 "
        >
          Login
        </Link>
        <Link
          href="/register"
          className="my-auto rounded-full px-4 py-2 bg-primary hover:bg-primary_deep text-white duration-300 ease-in-out transform hover:scale-105"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
