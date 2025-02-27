import React from "react";
import { Link } from "react-router";
import { Lock, MessageCircle, User } from "lucide-react";
import LandingPage from "./assets/LandingPage.jpg"

const App = () => {
  return (
    <div className="bg-[#1e1e2e] text-white">
      <div className="relative flex items-center justify-center min-h-[75vh] bg-gradient-to-b from-[#1e1e2e] to-[#2b213a]">
        {/* Background Image with pointer-events-none */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 pointer-events-none"
          style={{ backgroundImage: `url(${LandingPage})` }}
        ></div>

        {/* Main Content */}
        <div className="relative z-10 text-center space-y-6 px-4">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-wide text-[#c778dd]">
            Unlock the Future of <span className="text-[#ff7a93]">Chatting</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#a6e3a1] max-w-3xl mx-auto">
            Experience secure, private, and seamless communication on a next-generation platform built for everyone.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/xshshahab/unlok_chat"
              className="px-6 py-3 rounded-lg bg-[#ff7a93] hover:bg-[#f05165] text-black font-medium shadow-lg transition-all"
            >
              View on GitHub
            </a>
            <Link
              to="/chat"
              className="px-6 py-3 rounded-lg bg-[#89b4fa] hover:bg-[#6897e2] text-black font-medium shadow-lg transition-all"
            >
              Start Chatting
            </Link>
          </div>
        </div>
      </div>


      {/* Features Section */}
      <section className="py-20 px-6 bg-[#180d29]">
        <h2 className="text-4xl font-bold text-center text-[#ff7a93] mb-12">
          Why Choose Unlok Chat?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Lock className="text-[#c778dd] w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#c778dd]">End-to-End Encryption</h3>
            <p className="mt-2 text-[#a6e3a1]">
              Your conversations are encrypted, ensuring total privacy and security.
            </p>
          </div>
          <div className="text-center">
            <MessageCircle className="text-[#c778dd] w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#c778dd]">Real-Time Chat</h3>
            <p className="mt-2 text-[#a6e3a1]">
              Enjoy lightning-fast chat experiences with zero delays or lags.
            </p>
          </div>
          <div className="text-center">
            <User className="text-[#c778dd] w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#c778dd]">Custom Profiles</h3>
            <p className="mt-2 text-[#a6e3a1]">
              Personalize your experience with unique profiles and avatars.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-[#1e1e2e]">
        <h2 className="text-4xl font-bold text-center text-[#89b4fa] mb-12">
          How It Works
        </h2>
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="flex items-center space-x-6">
            <div className="text-3xl font-bold text-[#ff7a93]">1</div>
            <p className="text-lg text-[#a6e3a1]">
              Sign up for an account in seconds with just your email.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-3xl font-bold text-[#ff7a93]">2</div>
            <p className="text-lg text-[#a6e3a1]">
              Choose a chatroom or start a private conversation.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-3xl font-bold text-[#ff7a93]">3</div>
            <p className="text-lg text-[#a6e3a1]">
              Start chatting securely with end-to-end encryption.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
