const page = ({ params }) => {
  return (
    <div className="min-h-[40vh] mx-28 border-[1px] bg-gray-100 border-gray-200 rounded-md">
      <form className="flex flex-col gap-2 items-center bg-white px-20 py-10 mx-40 my-20 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Apply</h2>
        <label className="w-full text-gray-700 font-semibold mb-2">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
          placeholder="Enter your full name"
        />
        <label className="w-full text-gray-700 font-semibold mb-2">
          Mobile Number <span className="text-red-600">*</span>
        </label>
        <input
          type="number"
          className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
          placeholder="Enter your numer"
        />
        <label className="w-full text-gray-700 font-semibold mb-2">
          Email Address <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
          placeholder="Enter your email"
        />
        <label className="w-full text-gray-700 font-semibold mb-2">
          Full Address <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
          placeholder="Enter your address"
        />
        <label className="w-full text-gray-700 font-semibold">
          Upload Resume <span className="text-red-600">*</span>
        </label>
        <small className="w-full">
          Be sure to include an updated resume{" "}
          <span className="text-red-600">*</span>
        </small>
        <input
          type="file"
          className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
          placeholder="Enter your address"
        />
        <label className="w-full text-gray-700 font-semibold mb-2">
          Cover Letter <span className="text-red-600">*</span>
        </label>
        <textarea
          rows="5"
          type="text"
          className="w-full border rounded py-2 px-3 focus:outline-none focus:border-primary"
          placeholder="Write a cover letter"
        />
        <button className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-[#3e9b6c] focus:outline-none focus:ring-2 focus:ring-blue-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
