/* eslint-disable no-unused-vars */
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="flex items-center justify-center mx-w-7xl  mx-auto">
      <form
        action=""
        className="w-1/2 text-xl border border-gray-200 rounded-md p-4 my-10"
      >
        <h1 className="font-bold text-center text-xl mb-5">Sign Up</h1>
        <div>
          <Label htmlFor="name" className="block mb-2 font-bold">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="border border-gray-300 w-full p-2 mb-4 rounded-lg"
          />
        </div>
        <div>
          <Label htmlFor="email" className="block mb-2 font-bold">
            Email
          </Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="example@email.com"
            className="border border-gray-300 w-full p-2 mb-4 rounded-lg"
          />
        </div>
        <div>
          <Label htmlFor="password" className="block mb-2 font-bold">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="border border-gray-300 w-full p-2 mb-4 rounded-lg"
          />
        </div>
        <div className="flex items-center justify-between">
          <RadioGroup
            defaultValue="student"
            className="flex items-center gap-4 my-5"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="student" id="student" />
              <Label htmlFor="student">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="recruiter" id="recruiter" />
              <Label htmlFor="recruiter">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Label className="">Profile Picture</Label>
            <input type="file" accept="image/*" className="cursor-pointer" />
          </div>
        </div>
        <Button type="submit" className="w-full my-4">
          Sign Up
        </Button>
        <span className="block">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></span>
      </form>
    </div>
  );
};

export default SignUp;
