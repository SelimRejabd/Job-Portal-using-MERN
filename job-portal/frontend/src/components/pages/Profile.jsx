// eslint-disable-next-line no-unused-vars
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import AppliedJobTable from "../AppliedJobTable";
import UpdateProfile from "../UpdateProfile";

const Profile = () => {
  const isResume = true;
  const [open, setOpen] = React.useState(false);
  const skills = ["REACT", "NODE", "EXPRESS", "MONGODB"];
  console.log(open);
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Name</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
                cumque.
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="flex items-center gap-3 my-2">
          <Mail />
          <span>example@gmail.com</span>
        </div>
        <div className="my-5 mt-4">
          <h1 className="font-medium text-xl">Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length !== 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <p>No skills added</p>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <Button className="text-right" variant="outline">
              <Pen />
            </Button>
          ) : (
            <Button className="text-right" variant="outline">
              <Pen />
            </Button>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">All Applied Job</h1>
        <AppliedJobTable />
      </div>
      <div>
        <UpdateProfile open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Profile;
