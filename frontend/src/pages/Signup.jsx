import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";
import LockOpenIcon from "@mui/icons-material/LockOpen";
const Signup = () => {
  const { isSigningUp, signUp } = useAuthStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isPassword, setIsPassword] = useState(false);

  const validateFields = () => {
    if (!formData.name) return toast.error("Name is required.");
    if (!formData.email) return toast.error("Email is required.");
    if (!formData.password) return toast.error("Password is required.");
    if (formData.password.length < 5)
      return toast.error("Password is must have 5 characters.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return toast.error("Enter valid email id.");
    return true;
  };
  const onSubmit = async (e) => {
    console.log("ddd", formData);
    e.preventDefault();
    const success = validateFields();
    if (success) {
      await signUp(formData);
    }
  };
  return (
    <div className=" text-black bg-white">
      <div className=" min-h-screen grid lg:grid-cols-2">
        {/* Left Side */}
        <div className=" flex flex-col justify-center items-center p-6 sm:p-12">
          <div className="w-full  space-y-8  max-w-md ">
            {/* Logo */}
            <div className="text-center mb-5 ">
              <div className="group flex flex-col items-center gap-3">
                <div className=" bg-blue-100 size-12 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <MessageSquare className="text-primary size-6" />
                </div>
                <h1 className="font-bold mt-2 text-2xl">Create Account</h1>
                <p className="text-base-content/80">
                  Get Started with your free account
                </p>
              </div>
            </div>
            {/* form */}

            <form className="space-y-5" onSubmit={(e) => onSubmit(e)}>
              <div className="form-control">
                <TextField
                  label="Full Name"
                  fullWidth
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle sx={{ color: "#555", fontSize: 24 }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </div>
              <div className="form-control">
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </div>
              <div className="form-control">
                <TextField
                  label="Password"
                  type={isPassword ? "text" : "password"}
                  fullWidth
                  value={formData.password}
                  className=""
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          {!isPassword ? (
                            <Button  className="" onClick={() => setIsPassword(true)}>
                            <LockIcon sx={{ color: "#555", fontSize: 24 }} />
                              </Button>
                          ) : (
                            <Button onClick={() => setIsPassword(false)}
>
                            <LockOpenIcon sx={{ color: "#555", fontSize: 24 }}
                            />
                            </Button>
                          )}
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </div>

              <div className="text-center">
                <Button variant="contained" type="submit">
                  {isSigningUp ? (
                    <CircularProgress
                      aria-label="Loading…"
                      size={20}
                      sx={{ color: "white" }}
                    />
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
              <div className="text-center">
                <p className="text-base-content/90">
                  Already have an account?
                  <Link className="link text-primary" to="/login">
                    {" "}
                    Login{" "}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        <AuthImagePattern
          title="Join our community"
          subtitle="Connect with friends and start conversations."
        />
      </div>
    </div>
  );
};

export default Signup;
