import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquareLock, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import RightSidePattern from '../components/RightSidePattern';
import toast from 'react-hot-toast';

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const { signup, isSigningUp, authUser } = useAuthStore();
    const navigate = useNavigate();


    // Redirect to home page if user is authenticated
    useEffect(() => {
        if (authUser) {
            navigate('/'); // Redirect to the home page
        }
    }, [authUser, navigate]);


    const validateForm = () => {
        if (!formData.fullName.trim()) return toast.error("Full name is required");
        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
        if (!formData.password) return toast.error("Password is required");
        if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = validateForm()
        if (success === true) signup(formData)

    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            <div id="left" className="flex flex-col items-center justify-center  p-8">
                <div className="mb-6 bg-[#291828] rounded p-1.5">
                    <MessageSquareLock size={30} />
                </div>
                <h1 className="text-3xl font-semibold mb-2">Create Account</h1>
                <p className="text-zinc-400 mb-6">
                    Get started with your free account
                </p>
                <form
                    className="w-full max-w-md p-6"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block mb-1 font-medium text-stone-500">
                            Full Name
                        </label>
                        <div className="relative">
                            <User size={20} className="absolute top-3 left-2.5 text-zinc-500" />
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={(e) =>
                                    setFormData({ ...formData, fullName: e.target.value })
                                }
                                placeholder="John Doe"
                                className="pl-12 py-2 block w-full border border-zinc-600 outline-none rounded-md"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 font-medium text-stone-500">
                            Email
                        </label>
                        <div className="relative">
                            <Mail size={20} className="absolute top-3 left-2.5 text-zinc-500" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                placeholder="you@example.com"
                                className="pl-12 py-2 block w-full border border-zinc-600 outline-none rounded-md"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-1 font-medium text-stone-500">
                            Password
                        </label>
                        <div className="relative">
                            <Lock size={20} className="absolute top-3 left-2.5 text-zinc-500" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                                placeholder="••••••••"
                                className="pl-12 py-2 block w-full border border-zinc-600 outline-none rounded-md"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-3 right-2.5 text-zinc-500 focus:outline-none"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#612f5e] text-white py-2 rounded-md hover:bg-[#4d2d4c] cursor-pointer outline-none"
                        disabled={isSigningUp}
                    >
                        {isSigningUp ? (
                            <Loader2 className="animate-spin h-5 w-5 mx-auto" />
                        ) : (
                            'Create Account'
                        )}
                    </button>
                </form>
                <p className="text-zinc-400 mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#583a68] font-semibold hover:underline">
                        Log in
                    </Link>
                </p>
            </div>

            {/* Right Side */}
            <RightSidePattern title="Join Our Community" subtitle="Connect with friends, share moments, and stay in touch with your loved one" />
        </div>
    );
};

export default SignUpPage;
