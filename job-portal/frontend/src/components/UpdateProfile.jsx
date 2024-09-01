// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";

const UpdateProfile = ({ open, setOpen }) => {
  const { user, status } = useSelector((state) => state.user);
  const [input, setInput] = useState({
    name: user?.name,
    email: user?.email,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills,
    file: user?.profile?.resume,
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <Label htmlFor="name" className="">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={input.name}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>
            <div className="grid gap-4 py-4">
              <Label htmlFor="Email" className="">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={input.email}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>
            <div className="grid gap-4 py-4">
              <Label htmlFor="bio" className="">
                Bio
              </Label>
              <Input
                id="bio"
                name="bio"
                value={input.bio}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>
            <div className="grid gap-4 py-4">
              <Label htmlFor="skills" className="">
                Skills
              </Label>
              <Input
                id="skills"
                name="skills"
                value={input.skills}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>
            <div className="grid gap-4 py-4">
              <Label htmlFor="file" className="">
                Resume
              </Label>
              <Input
                id="file"
                name="file"
                value={input.resume}
                onChange={changeEventHandler}
                className="col-span-3"
              />
            </div>
            <DialogFooter>
              {status === "loading" ? (
                <Button
                  type="submit"
                  className="text-white px-4 py-2 rounded-md"
                >
                  Updating...
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="text-white px-4 py-2 rounded-md"
                >
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

UpdateProfile.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default UpdateProfile;
