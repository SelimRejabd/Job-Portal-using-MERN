/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const LatestJobCard = ({ job }) => {
  const {
    title,
    company,
    location,
    salary,
    description,
    date,
    vacancies,
    type,
  } = job;
  return (
    <div>
      <div className="bg-white shadow-md p-4">
        <h1 className="text-gray-500 font-bold">
          <Link to="/company" className="text-blue-700">
            {company}
          </Link>
        </h1>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{location}</p>
        <p className="text-gray-500">
          Salary: <span className="text-blue-700">{salary} </span>a year
        </p>
        <p className="text-gray-500">{description}</p>
        <p className="text-gray-500">
          Date: <span className="text-blue-700">{date}</span>
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Badge className={"text-blue-700 font-bold"} variant="ghost">
            {vacancies} Positions
          </Badge>
          <Badge className="text-[#F83002] font-bold" variant="ghost">
            {type}
          </Badge>
        </div>
        <div className="flex justify-between mt-2">
          <Button variant="outline" className="rounded-full">
            Details
          </Button>
          <Button className="rounded-full">Apply</Button>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCard;
