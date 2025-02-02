import React, { useState } from 'react'
import { useAuthStore } from '../../store/useAuthStore'
import { LogOut, MessageSquare, MessageSquareLock, Settings, User, UserRoundCog } from 'lucide-react'
import { Link, useNavigate } from 'react-router'

const Navbar = () => {

    const { logout, authUser } = useAuthStore()
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility

    const handleLogout = () => {
        logout();
        setDropdownOpen(false); // Close the dropdown
        navigate('/login');
    };

    const handleMenuItemClick = () => {
        setDropdownOpen(false); // Close the dropdown
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
    };

    return (
        <header
            className="border-b border-zinc-800 fixed w-full top-0 z-40 backdrop-blur-lg"
        >
            <div className="container mx-auto px-4 h-12">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
                            <div className="size-9 rounded-lg bg-[#291828] flex items-center justify-center">
                                <MessageSquareLock className="size-6 text-primary" />
                            </div>
                            <h1 className="text-lg  font-bold">Unlok <span className='text-[#8b3183]'>Chat</span></h1>
                        </Link>
                    </div>

                    <div className="flex items-center gap-0.5 md:gap-2">
                        <Link
                            to={"/chat"}
                            className={`flex items-center hover:bg-zinc-800 px-1.5 py-1 rounded gap-1.5 transition-colors`}
                        >
                            <MessageSquare className="w-4 h-4" />
                            <span className="hidden sm:inline">Chat</span>
                        </Link>

                        {/* Dropdown Menu Trigger */}
                        <div id="model" className="relative">
                            <button
                                onClick={toggleDropdown} // Toggle dropdown on click
                                className="hover:bg-zinc-800  gap-1.5 cursor-pointer px-1.5 py-1 rounded flex items-center"
                            >
                                <UserRoundCog className='size-5' />
                                <span className="hidden sm:inline"> {authUser?.fullName || "N/A"}</span>

                            </button>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-36 bg-zinc-900 border border-zinc-800 rounded shadow-lg">
                                    <ul className="flex flex-col">
                                        <li>
                                            <Link
                                                to="/profile"
                                                onClick={handleMenuItemClick} // Close dropdown on click
                                                className="block px-4 py-2 text-sm hover:bg-zinc-800 transition-colors"
                                            >
                                                <User className="inline w-4 h-4 mr-2" />
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/settings"
                                                onClick={handleMenuItemClick} // Close dropdown on click
                                                className="block px-4 py-2 text-sm hover:bg-zinc-800 transition-colors"
                                            >
                                                <Settings className="inline w-4 h-4 mr-2" />
                                                Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleLogout} // Close dropdown and logout
                                                className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800 transition-colors"
                                            >
                                                <LogOut className="inline w-4 h-4 mr-2" />
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
