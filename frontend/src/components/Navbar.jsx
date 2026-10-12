import { Link } from "react-router-dom";
import React from "react";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import Button from "@mui/material/Button";

const Navbar = () => {
  const { authUser, logOut } = useAuthStore();
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-base-300 bg-base-100/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-100 transition-colors hover:bg-blue-200">
              <MessageSquare className="size-6 text-blue-600" />
            </div>

            <div>
              <h1 className="text-lg font-bold">Chat App</h1>

              <p className="text-xs text-gray-500">Connect & Chat</p>
            </div>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-2">
            
            {/* Settings */}
            <Link
              to="/settings"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-base-200"
            >
              <Settings className="size-5" />
              <span>Settings</span>
            </Link>

          {authUser &&
          <>
               {/* Profile */}
            <Link
              to="/profile"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-base-200"
            >
              <User className="size-5" />
              <span>Profile</span>
            </Link>

            {/* Logout */}
            <Button onClick={logOut}>
              {" "}
              <LogOut className="size-5" />
              <span>Logout</span>
            </Button>
            </>
          
          }
                     </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
