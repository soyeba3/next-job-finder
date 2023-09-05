const JobDetailSkeleton = () => {
  return (
    <div className="flex flex-col md:px-14 items-center justify-center">
      <div className="w-3/4 md:w-full sm:w-full animate-pulse flex flex-col gap-2 rounded-md p-20 sm:p-5 my-6 sm:my-4 bg-white border border-gray-200">
        <h3 className="bg-gray-300 h-5 w-56 rounded-full"></h3>
        <p className="bg-gray-300 h-5 w-48 rounded-full"></p>
        <div className="bg-gray-300 h-5 w-32 rounded-full">
          <p></p>
        </div>
        <div className="bg-gray-300 h-5 w-3/4 rounded-full">
          <p></p>
        </div>
        <div className="bg-gray-300 h-5 w-32 rounded-full">
          <p></p>
        </div>
        <div className="bg-gray-300 h-5 w-36 rounded-full">
          <p></p>
        </div>
        <div className="py-6 flex flex-col gap-2">
          <h3 className="bg-gray-300 h-5 w-36 rounded-full"></h3>
          <p className="bg-gray-300 h-5 w-4/5 rounded-full"></p>
          <p className="bg-gray-300 h-5 w-4/5 rounded-full"></p>
          <p className="bg-gray-300 h-5 w-4/5 rounded-full"></p>
          <p className="bg-gray-300 h-5 w-4/5 rounded-full"></p>
          <div className="py-4 flex flex-col gap-2">
            <h3 className="bg-gray-300 h-5 w-36 rounded-full"></h3>
            <p className="bg-gray-300 h-5 w-4/5 rounded-full"></p>
            <p className="bg-gray-300 h-5 w-4/5 rounded-full"></p>
            <p className="bg-gray-300 h-5 w-4/5 rounded-full"></p>
            <p className="bg-gray-300 h-5 w-4/5 rounded-full"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailSkeleton;
