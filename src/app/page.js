import Card from "@/components/card/Card";
import { categories } from "@/data";
import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className="mx-20">
      <div className="flex items-center gap-8">
        <div className="flex-[2] w-full flex flex-col gap-10">
          <h3 className="text-4xl font-semibold">
            Find Your <span className="text-primary">Dream Job</span> Here
          </h3>
          <div className="w-3/4 flex gap-4">
            <input
              className="h-12 w-full rounded-md bg-gray-50 pl-10 pr-4 font-thin outline-none border-2 border-primary drop-shadow-sm focus:bg-white focus:drop-shadow-lg"
              type="text"
              name=""
              placeholder="Search by keyword"
            />
            <button className="bg-primary hover:bg-primary_deep duration-200 text-white font-bold py-1 px-4 rounded">
              Search
            </button>
          </div>
        </div>
        <div className="flex-[1]">
          <Image src={Hero} alt="" className="w-full h-80 object-contain" />
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-[32px]">Browse Job by Categories</h3>
        <div className="flex justify-between items-center my-6">
          {categories?.map((category) => {
            return (
              <Card
                key={category.id}
                title={category?.title}
                url={category?.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
