/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Label } from "@radix-ui/react-label";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearSuccessandMessage, loginUser } from "@/features/slice/UserSlice";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, success, message, error } = useSelector((state) => state.user);


  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      email,
      password,
    };
    dispatch(loginUser(inputData));
  }

  useEffect(() => {
    if (success) {
      navigate("/");
      toast.success(message);
      dispatch(clearSuccessandMessage());
    }
  }, [success, navigate, message, dispatch]);

  return (
    <div className="flex items-center justify-center mx-w-7xl  mx-auto">
      <form
        onSubmit={handleSubmit}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-gray-300 w-full p-2 mb-4 rounded-lg"
          />
        </div>
        <Button type="submit" className="w-full my-4">
          Log In
        </Button>
        <span className="block">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-blue-600">
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
