// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect } from "react";
import { LogOut, User2 } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearSuccessandMessage, logoutUser } from "@/features/slice/UserSlice";
import { toast } from "sonner";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, success, message } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (success) {
      toast.success(message);
      dispatch(clearSuccessandMessage());
    }
  }, [success, message, dispatch]);
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto h-10 ml-12 mt-5 mr-12">
        <Link to="/">
          <div>
            <h1 className="text-2xl font-bold">
              Job<span className="text-[#F83002]">Portal</span>
            </h1>
          </div>
        </Link>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li className="mx-2"><Link to="/">Home</Link></li>
            <li className="mx-2"><Link to="/jobs">Jobs</Link></li>
            <li className="mx-2"><Link to="/browse">Browse</Link></li>          </ul>
          {user === null ? (
            <div className="flex items-center gap-5">
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
              <Link to="/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar className="mr-5">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex gap-4 space-y-2">
                  <Avatar className="mr-5">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">{user.name.toUpperCase()}</h4>
                    <p className="text-sm text-gray-500">{user.role}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="Link" className="white">
                      Profile
                    </Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button
                      variant="Link"
                      className="white"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
