// eslint-disable-next-line no-unused-vars
import React from "react";
import FilterCard from "../FilterCard";
import { toast } from "sonner";
import Job from "../Job";

const Jobs = () => {
  const jobsArray = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      date: "2022-01-01",
      salary: "$120,000",
      description: "We are looking for a software engineer to join our team.",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Facebook",
      location: "Menlo Park, CA",
      date: "2022-01-02",
      salary: "$150,000",
      description: "We are looking for a product manager to join our team.",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Amazon",
      location: "Seattle, WA",
      date: "2022-01-03",
      salary: "$130,000",
      description: "We are looking for a data scientist to join our team.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5">
        <div className="w-20%">
          <FilterCard />
        </div>

        {jobsArray.length === 0 ? (
          toast.error("No jobs found!")
        ) : (
          <div className="flex-1 h-[80vh] overflow-y-auto pb-5">
            <div className="grid grid-cols-3 gap-4">
              {jobsArray.map((item, index) => (
                <div key={index}>
                  <Job />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
