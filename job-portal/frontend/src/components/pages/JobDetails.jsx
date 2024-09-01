// eslint-disable-next-line no-unused-vars
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const JobDetails = () => {
    const isApplied = false;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="font-bold text-xl">Tittle</h1>
      <div className="flex items-center justify-between">
        <div>
          <Badge className="text-blue-700 font-bold" variant="ghost">
            12 Positions
          </Badge>
          <Badge className="text-[#F83002] font-bold" variant="ghost">
            Full time
          </Badge>
          <Badge className="text-blue-700 font-bold" variant="ghost">
            Open
          </Badge>
        </div>
        <Button disabled={isApplied}>{isApplied ? "Applied" : "Apply Now"}</Button>
      </div>
      <div>
        <h2 className="font-bold text-lg">Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          consectetur, sapien ut tincidunt bibendum, justo velit tincidunt
          libero, nec varius nulla tellus vitae nunc. Integer eget odio
          consectetur, venenatis elit nec, malesuada nunc. Nullam nec libero
          vitae nunc. Integer eget odio consectetur, venenatis elit nec,
          malesuada nunc. Nullam nec libero.
        </p>
        <div className="my-4">
            <h1 className="font-bold my-1">Role:<span className="pl-4 font-normal text-gray-800">Frontend Developer</span></h1>
            <h1 className="font-bold my-1">Location:<span className="pl-4 font-normal text-gray-800">Bangalore</span></h1>
            <h1 className="font-bold my-1">Experience:<span className="pl-4 font-normal text-gray-800">2-3 years</span></h1>
            <h1 className="font-bold my-1">Salary:<span className="pl-4 font-normal text-gray-800">5-8 LPA</span></h1>
            <h1 className="font-bold my-1">Skills:<span className="pl-4 font-normal text-gray-800">React, Javascript, HTML, CSS</span></h1>

        </div>
      </div>
    </div>
  );
};

export default JobDetails;
