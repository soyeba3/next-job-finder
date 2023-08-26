import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
const JobsCard = ({ category }) => {
  return (
    <Link
      href={`/${category}/1`}
      className="w-3/4 flex flex-col gap-2 rounded-md px-8 py-4 my-6 bg-white border border-gray-200 hover:drop-shadow-lg duration-300"
    >
      <h3 className="text-lg font-bold text-primary">Fontend Developer</h3>
      <p className="text-base font-bold">A Reputed Company</p>
      <div className="flex items-center gap-2">
        <MapPinIcon className="h-6 w-6" />
        <p>Tejgaon</p>
      </div>
      <div className="flex items-center gap-2">
        <AcademicCapIcon className="h-6 w-6" />
        <p>
          Bachelor`s degree in Computer Science, Engineering, or a related field
          (preferred).
        </p>
      </div>
      <div className="flex items-center gap-2">
        <BriefcaseIcon className="h-6 w-6" />
        <p>At least 1 year</p>
      </div>
      <div className="flex items-center gap-2">
        <CalendarIcon className="h-6 w-6" />
        <p>Deadline : 13 Sep 2023</p>
      </div>
    </Link>
  );
};

export default JobsCard;
