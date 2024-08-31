// eslint-disable-next-line no-unused-vars
import React from "react";
import { RadioGroup } from "./ui/radio-group";

const FilterCard = () => {
  const filterOptions = [
    {
      type: "Location",
      options: ["Mountain View, CA", "Menlo Park, CA", "Seattle, WA"],
    },
    {
      type: "Salary",
      options: ["$120,000", "$150,000", "$130,000"],
    },
    {
      type: "Job Type",
      options: ["Full Time", "Part Time", "Contract"],
    },
    {
      type: "Experience",
      options: ["Entry Level", "Mid Level", "Senior Level"],
    },
  ];
  return (
    <div className="w-fulll bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filters</h1>

      <h1 className="mt-3">
        <RadioGroup>
            {filterOptions.map((filter, index) => (
                <div key={index}>
                    <h2 className="font-bold">{filter.type}</h2>
                    <div className="flex flex-col">
                    {filter.options.map((option, index) => (
                        <label key={index} className="flex items-center">
                        <input type="radio" name={filter.type} value={option} />
                        <span className="ml-2">{option}</span>
                        </label>
                    ))}
                    </div>
                </div>
                ))}
        </RadioGroup>
      </h1>
    </div>
  );
};

export default FilterCard;
