import React from 'react'
import { useAuthStore } from '../../store/useAuthStore'
import { LogOut, MessageSquareLock, Settings, User } from 'lucide-react'
import { Link, useNavigate } from 'react-router'

const Navbar = () => {

    const { logout, authUser } = useAuthStore()
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
        navigate('/login')
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

                    <div className="flex items-center gap-0.5 md:gap-3">
                        <Link
                            to={"/settings"}
                            className={`flex items-center hover:bg-zinc-800 px-1.5 py-1 rounded gap-2 transition-colors
                
                `}
                        >
                            <Settings className="w-4 h-4" />
                            <span className="hidden sm:inline">Settings</span>
                        </Link>

                        {authUser && (
                            <>
                                <Link to={"/profile"} className={`flex items-center hover:bg-zinc-800 px-1.5 py-1 rounded gap-2`}>
                                    <User className="size-4" />
                                    <span className="hidden sm:inline">Profile</span>
                                </Link>

                                <button className="flex gap-2 hover:bg-zinc-800 px-1.5 py-1 rounded cursor-pointer items-center" onClick={handleLogout}>
                                    <LogOut className="size-4" />
                                    <span className="hidden sm:inline">Logout</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar