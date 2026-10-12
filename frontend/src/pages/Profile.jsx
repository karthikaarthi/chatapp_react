import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, Calendar } from "lucide-react";

const Profile = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg]= useState(null)  
  console.log(authUser)
  const handleImageUpload =async (e)=>{
  const file = e.target.files[0]
  setSelectedImg(URL.createObjectURL(file))
  await updateProfile(file)
  }
  
  return (
    <div className="min-h-screen bg-base-200 pt-20 px-4 ">
      {" "}
      <div className="max-w-2xl mx-auto">
        {" "}
        {/* Profile Card */}{" "}
        <div className="bg-base-100 rounded-2xl shadow-lg p-6 ">
          {" "}
          {/* Heading */}{" "}
          <div className="text-center mb-8">
            {" "}
            <h1 className="text-2xl font-bold">Profile</h1>{" "}
            <p className="text-base-content/60 mt-1">
              {" "}
              Your profile information{" "}
            </p>{" "}
          </div>{" "}
          {/* Profile Image */}{" "}
          <div className="flex flex-col items-center mb-8">
            {" "}
            <div className="relative">
              {" "}
              <img
                src={
                  selectedImg ||
                  authUser?.profile_image ||
                  "https://i.pravatar.cc/150?img=12"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-base-300"
              />{" "}
              {/* Camera Button */}{" "}
              <label
                htmlFor="avatar-upload"
                className={` absolute bottom-1 right-1 w-10 h-10 rounded-full flex items-center justify-center bg-primary text-primary-content cursor-pointer hover:scale-105 transition ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""} `}
              >
                {" "}
                <Camera size={20} />{" "}
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />{" "}
              </label>{" "}
            </div>{" "}
            <p className="text-sm text-base-content/60 mt-3">
              {" "}
              {isUpdatingProfile
                ? "Uploading..."
                : "Click the camera icon to update your photo"}{" "}
            </p>{" "}
          </div>{" "}
          {/* User Information */}{" "}
          <div className="space-y-5">
            {" "}
            {/* Name */}{" "}
            <div>
              {" "}
              <label className="text-sm font-medium flex items-center gap-2 mb-2">
                {" "}
                <User size={17} /> Full Name{" "}
              </label>{" "}
              <div className="input input-bordered w-full flex items-center">
                {" "}
                {authUser?.name || "No name available"}{" "}
              </div>{" "}
            </div>{" "}
            {/* Email */}{" "}
            <div>
              {" "}
              <label className="text-sm font-medium flex items-center gap-2 mb-2">
                {" "}
                <Mail size={17} /> Email Address{" "}
              </label>{" "}
              <div className="input input-bordered w-full flex items-center">
                {" "}
                {authUser?.email || "No email available"}{" "}
              </div>{" "}
            </div>{" "}
            {/* Account Created */}{" "}
            <div>
              {" "}
              <label className="text-sm font-medium flex items-center gap-2 mb-2">
                {" "}
                <Calendar size={17} /> Member Since{" "}
              </label>{" "}
              <div className="input input-bordered w-full flex items-center">
                {" "}
                {authUser?.createdAt
                  ? new Date(authUser.createdAt).toLocaleDateString()
                  : "Not available"}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Account Information */} <div className="divider"></div>{" "}
          <div>
            {" "}
            <h2 className="font-semibold mb-3">Account Information</h2>{" "}
            <div className="flex justify-between text-sm py-2">
              {" "}
              <span className="text-base-content/60">
                {" "}
                Account Status{" "}
              </span>{" "}
              <span className="text-success font-medium"> Active </span>{" "}
            </div>{" "}
            <div className="flex justify-between text-sm py-2">
              {" "}
              <span className="text-base-content/60"> Email Status </span>{" "}
              <span className="text-success font-medium"> Verified </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Profile;
