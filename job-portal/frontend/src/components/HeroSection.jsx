// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col mt-4 mb-5 my-10">
        <h1 className="text-4xl font-bold bg-gray-100">
          Find Your <span className="text-[#6A38C2]">Dream Job</span>
        </h1>
      </div>
      <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
        <input
          type="text"
          placeholder="Find Your Dream Job"
          className="outine-none border-none w-full"
        />
        <Button className="rounded-r-full">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
