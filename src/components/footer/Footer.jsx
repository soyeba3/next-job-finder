const Footer = () => {
  return (
    // <div className="flex text-gray-500 justify-around gap-5 border-t-[1px] border-gray-200">
    //   <div className="flex-1 mt-5 flex flex-col items-center">
    //     <ul className="flex flex-col gap-2">
    //       <li className="font-bold">About</li>
    //       <li>Careers</li>
    //       <li>Privacy Policy</li>
    //       <li>Terms of Service</li>
    //     </ul>
    //   </div>
    //   <div className="flex-1 mt-5 flex flex-col items-center">
    //     <ul className="flex flex-col gap-2">
    //       <li className="font-bold">Support and Education</li>
    //       <li>Help & Support</li>
    //       <li>Trust & Safety</li>
    //       <li>Guides</li>
    //     </ul>
    //   </div>
    //   <div className="flex-1 mt-5 flex flex-col items-center">
    //     <ul className="flex flex-col gap-2">
    //       <li className="font-bold">Community</li>
    //       <li>Customer Success Stories</li>
    //       <li>Community Hub</li>
    //       <li>Forum</li>
    //     </ul>
    //   </div>
    //   <div></div>
    // </div>
    <footer className="bg-white text-black">
      <div className="container mx-auto py-8 px-6">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-600">
              We are dedicated to connecting job seekers with their dream
              opportunities.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-600 mb-2">123 Job Street</p>
            <p className="text-gray-600 mb-2">City, Country</p>
            <p className="text-gray-600">Email: contact@example.com</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
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
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
            <p className="text-gray-600 mb-2">
              Subscribe to our newsletter for updates.
            </p>
            <div className="flex">
              <input
                type="email"
                className="px-4 py-2 w-full rounded-l-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Your email"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary_deep transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 my-8" />
        <p className="text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Your Job Portal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
