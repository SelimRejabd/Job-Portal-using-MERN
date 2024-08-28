/* eslint-disable no-unused-vars */
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex items-center justify-center mx-w-7xl  mx-auto">
      <form
        action=""
        className="w-1/2 text-xl border border-gray-200 rounded-md p-4 my-10"
      >
        <h1 className="font-bold text-center text-xl mb-5">Log In</h1>
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
        <Button type="submit" className="w-full my-4">
          Log In
        </Button>
         {/* eslint-disable-next-line react/no-unescaped-entities  */}
        <span className="block">Don't have an account? <Link to="/sign-up" className="text-blue-600">Sign Up</Link></span>
      </form>
    </div>
    );
};

export default Login;