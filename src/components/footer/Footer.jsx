const Footer = () => {
  return (
    <footer className="bg-white text-black mt-10 mx-24 md:mx-14 sm:mx-5">
      <di v className="container mx-auto py-8 sm:px-4">
        <div className="w-full flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-600">
              We are dedicated to connecting job seekers with their dream
              opportunities.
            </p>
          </div>
          <div className="w-full pl-2 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-600 mb-2">123 Job Street</p>
            <p className="text-gray-600 mb-2">City, Country</p>
            <p className="text-gray-600">contact@example.com</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
            <h2 className="text-xl font-semibold mb-4">Social Media</h2>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-gray-600 hover:text-black transition duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="w-full pl-2 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <p className="text-gray-600 mb-2">
              Subscribe to our newsletter for updates.
            </p>
            <div className="flex">
              <input
                type="email"
                className="px-4 py-2 w-full rounded-l-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Your email"
              />
              <button className="bg-primary text-white px-4 sm:px-2 py-2 rounded-r-md hover:bg-primary_deep transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 my-8" />
        <p className="text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Your Job Portal
        </p>
      </di>
    </footer>
  );
};

export default Footer;
