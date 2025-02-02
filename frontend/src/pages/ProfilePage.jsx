import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64Image = reader.result;
            setSelectedImg(base64Image);
            updateProfile({ profilePic: base64Image });
        };
    };

    if (!authUser) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading profile...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20">
            <div className="max-w-2xl mx-auto p-4 py-8">
                <div className="bg-[#291828] rounded-xl p-6 space-y-8">
                    {/* Header */}
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold">Profile</h1>
                        <p className="mt-2">Your profile information</p>
                    </div>

                    {/* Profile Picture */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                            <img
                                src={selectedImg || authUser.profilePic || "/avatar.png"}
                                alt="Profile"
                                className="size-32 rounded-full object-cover border-2"
                            />
                            <label
                                htmlFor="avatar-upload"
                                className={`absolute bottom-0 right-0 bg-purple-500 hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                                    }`}
                            >
                                <Camera className="w-5 h-5 text-zinc-200" />
                                <input
                                    type="file"
                                    id="avatar-upload"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    disabled={isUpdatingProfile}
                                />
                            </label>
                        </div>
                        <p className="flex flex-col font-medium text-zinc-300">
                            {isUpdatingProfile
                                ? "Uploading..."
                                : "Click the camera icon to update your photo"}
                            <span
                                className="text-sm text-center text-zinc-500 mt-1 italic"
                            >
                                <span className="text-red-400">Note:</span> Image size should be less than <span className="font-semibold text-zinc-400">30KB</span>
                            </span>
                        </p>


                    </div>

                    {/* Profile Details */}
                    <div className="space-y-6">
                        {/* Full Name */}
                        <div className="space-y-1.5">
                            <div className="text-sm text-zinc-400 flex items-center gap-2">
                                <User className="w-4 h-4" />
                                Full Name
                            </div>
                            <p className="px-4 py-2.5 rounded-lg border">
                                {authUser?.fullName || "N/A"}
                            </p>
                        </div>

                        {/* Email Address */}
                        <div className="space-y-1.5">
                            <div className="text-sm text-zinc-400 flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Email Address
                            </div>
                            <p className="px-4 py-2.5 rounded-lg border">
                                {authUser?.email || "N/A"}
                            </p>
                        </div>
                    </div>

                    {/* Account Information */}
                    <div className="mt-6 bg-base-300 rounded-xl p-6">
                        <h2 className="text-lg font-medium mb-4">Account Information</h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                                <span>Member Since</span>
                                <span>{authUser?.createdAt?.split("T")[0] || "N/A"}</span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <span>Account Status</span>
                                <span className="text-green-500">Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;