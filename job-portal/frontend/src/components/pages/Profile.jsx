// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import AppliedJobTable from "../AppliedJobTable";
import UpdateProfile from "../UpdateProfile";
import { useDispatch, useSelector } from "react-redux";
import { clearSuccessandMessage } from "@/features/slice/UserSlice";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const { user, message } = useSelector((state) => state.user);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearSuccessandMessage());
    }
  }, [message, dispatch]);

  return (
    <div>
      {user ? (
        <div>
          <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src={user.profile.profileImage}
                    alt="profile"
                  />
                </Avatar>
                <div>
                  <h1 className="font-medium text-xl">{user.name}</h1>
                  <p>{user.profile.bio}</p>
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
            <div className="flex items-center gap-3 my-2 mt-6">
              <Mail />
              <span>{user.email}</span>
            </div>
            <div className="my-5 mt-4">
              <h1 className="text-md font-bold mb-2 mt-8">Skills:</h1>
              <div className="flex items-center gap-1">
                {user.profile.skills.length !== 0 ? (
                  user.profile.skills.map((item, index) => (
                    <Badge key={index}>{item}</Badge>
                  ))
                ) : (
                  <p>No skills added</p>
                )}
              </div>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-md font-bold mt-2">Resume</Label>
              {user.profile.resume ? (
                <Button className="text-right" variant="outline">
                  <a
                    href={`${user.profile.resume}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.profile.resumeOriginalName}
                  </a>
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
      ) : (
        <div className="flex items-center font-bold text-4xl mt-10 mb-10 ml-[400px] gap-2">
          <Link to="/login" className="text-blue-700">
            <h1>Login </h1>
          </Link>
          <h1> to view this page.</h1>
        </div>
      )}
    </div>
  );
};

export default Profile;
