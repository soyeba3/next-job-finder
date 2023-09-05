const CardSkeleton = () => {
  return (
    <div className="w-3/4 md:w-full sm:w-full animate-pulse flex flex-col gap-2 rounded-md px-8 py-4 my-6 sm:my-2 bg-white border border-gray-200 hover:drop-shadow-lg duration-300">
      <h3 className="bg-gray-300 animate-pulse h-5 w-52 rounded-full"></h3>
      <p className="bg-gray-300 animate-pulse h-5 w-48 rounded-full"></p>
      <div className="bg-gray-300 animate-pulse h-5 w-20 rounded-full">
        <p></p>
      </div>
      <div className="bg-gray-300 animate-pulse h-5 w-3/4 rounded-full">
        <p></p>
      </div>
      <div className="bg-gray-300 animate-pulse h-5 w-32 rounded-full">
        <p></p>
      </div>
      <div className="h-5 w-40 bg-gray-300 animate-pulse rounded-full">
        <div className="bg-gray-300">
          <p></p>
        </div>
        <div className="bg-gray-300 animate-pulse h-5 w-32 rounded-full">
          <p className=""></p>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
