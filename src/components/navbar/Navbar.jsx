import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white max-w-[90rem] mx-20 my-6">
      <Link href="/">
        <h1 className="text-xl font-bold">
          Next <span className="text-primary">Job</span> Finder
        </h1>
      </Link>
      <div className="flex justify-between gap-2">
        <Link
          href="/login"
          className="my-auto rounded-full px-4 py-2 bg-primary hover:bg-primary_deep text-white transition duration-300"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="my-auto rounded-full px-4 py-2 bg-primary hover:bg-primary_deep text-white duration-300"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
