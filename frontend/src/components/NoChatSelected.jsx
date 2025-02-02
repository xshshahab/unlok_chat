import { MessageSquareLock } from "lucide-react";

const NoChatSelected = () => {
    return (
        <div className="w-full flex flex-1 flex-col items-center justify-center p-16  bg-gradient-to-b from-[#1e1e2e] to-[#2b213a]">
            <div className="max-w-md text-center space-y-3">
                {/* Icon Display */}
                <div className="flex justify-center gap-4 mb-4">
                    <div className="relative">
                        <div
                            className="w-16 h-16 rounded-2xl bg-[#201E30] flex items-center
                                justify-center animate-bounce"
                        >
                            <MessageSquareLock className="w-8 h-8 text-primary " />
                        </div>
                    </div>
                </div>

                {/* Welcome Text */}
                <h2 className="text-2xl font-bold">Welcome to Unlok Chat!</h2>
                <p className="text-sm">
                    Select a conversation from the sidebar to start chatting
                </p>
            </div>
        </div>
    );
};

export default NoChatSelected;