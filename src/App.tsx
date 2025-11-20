import { useState } from "react";
import { Home, Search, MessageCircle, User, Heart, Shield } from "lucide-react";
import { HomeScreen } from "./components/HomeScreen";
import { HouseProfile } from "./components/HouseProfile";
import { VerificationModal } from "./components/VerificationModal";

type Screen = "home" | "profile";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedPropertyId(id);
    setCurrentScreen("profile");
  };

  const handleBack = () => {
    setCurrentScreen("home");
  };

  const handleShowVerification = () => {
    setShowVerificationModal(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#14B8A6] to-[#0F766E] rounded-xl flex items-center justify-center">
                <Shield size={24} className="text-white" fill="white" />
              </div>
              <div>
                <h2 className="text-[#1E293B]">HayaHive</h2>
                <p className="text-[#64748B] text-xs">Safe Student Housing</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setCurrentScreen("home")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
                  currentScreen === "home" ? "bg-[#14B8A6]/10 text-[#14B8A6]" : "text-[#64748B] hover:text-[#14B8A6]"
                }`}
              >
                <Home size={20} />
                <span className="text-sm">Discover</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-[#64748B] hover:text-[#14B8A6] transition-colors">
                <Search size={20} />
                <span className="text-sm">Search</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-[#64748B] hover:text-[#14B8A6] transition-colors">
                <Heart size={20} />
                <span className="text-sm">Saved</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-[#64748B] hover:text-[#14B8A6] transition-colors">
                <User size={20} />
                <span className="text-sm">Account</span>
              </button>
            </nav>

            <button className="md:hidden p-2 text-[#64748B]">
              <MessageCircle size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {currentScreen === "home" && <HomeScreen onCardClick={handleCardClick} />}
        {currentScreen === "profile" && (
          <HouseProfile onBack={handleBack} onShowVerification={handleShowVerification} />
        )}
      </main>

      {/* Verification Modal */}
      {showVerificationModal && (
        <VerificationModal onClose={() => setShowVerificationModal(false)} />
      )}

      {/* Global Styles for Animation */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}