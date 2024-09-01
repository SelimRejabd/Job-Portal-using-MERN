// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Bookmark } from "lucide-react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const id = 1;
  const navigate = useNavigate();
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button variant="outline" className="p-6" size="icon">
          <Avatar>
            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">As sunnah</h1>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg mr-2">Job title: Software Engineer</h1>
        <p>Location: Mountain View, CA</p>
        <p>Salary: $120,000</p>
        <p>
          Description: We are looking for a software engineer to join our team.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          12 Positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          Full Time
        </Badge>
      </div>
      <div className="flex justify-between mt-2">
        <Button
          variant="outline"
          onClick={() => navigate(`/job/details/${id}`)}
          className="rounded-full"
        >
          Details
        </Button>
        <Button className="rounded-full">Apply</Button>
      </div>
    </div>
  );
};

export default Job;
