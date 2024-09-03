/* eslint-disable no-unused-vars */
import { Label } from "@radix-ui/react-label";
import React, { useEffect } from "react";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import {
  clearError,
  clearSuccessandMessage,
  registerUser,
} from "@/features/slice/UserSlice";
import { Loader2 } from "lucide-react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { message, status, success } = useSelector((state) => state.user);

  const fileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearSuccessandMessage());
    }
  }, [navigate, message, dispatch]);

  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [success, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("file", file);
    dispatch(registerUser(formData));
  };

  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <form
        onSubmit={handleSubmit}
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
            onChange={(e) => setName(e.target.value)}
            value={name}
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
        <div className="flex items-center justify-between">
          <RadioGroup
            value={role}
            onValueChange={(value) => setRole(value)}
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
          <div className="grid gap-4 py-4">
            <Label htmlFor="file" className="">
              Profile Picture
            </Label>
            <Input
              id="file"
              name="file"
              type="file"
              onChange={fileChange}
              className="col-span-3"
            />
          </div>
        </div>
        {status === "loading" ? (
          <Button type="submit" className="w-full my-4">
            <Loader2 className="mr-2 h-2 w-2 animate-spin" /> Signing Up...
          </Button>
        ) : (
          <Button type="submit" className="w-full my-4">
            Sign Up
          </Button>
        )}

        <span className="block">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
