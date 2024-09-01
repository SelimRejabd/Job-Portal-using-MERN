// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const AppliedJobTable = () => {
  const appliedJobs = [
    {
      date: "12/12/2021",
      jobRole: "Frontend Developer",
      company: "Google",
      status: "Applied",
    },
    {
      date: "12/12/2021",
      jobRole: "Backend Developer",
      company: "Facebook",
      status: "Applied",
    },
    {
      date: "12/12/2021",
      jobRole: "Fullstack Developer",
      company: "Amazon",
      status: "Applied",
    },
  ];
  return (
    <div>
      <Table>
        <TableCaption>Your Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs.map((job, index) => (
            <TableRow key={index}>
              <TableCell>{job.date}</TableCell>
              <TableCell>{job.jobRole}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell className="text-right"><Badge>{job.status}</Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
