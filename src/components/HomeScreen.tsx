import { Search, Wifi, DollarSign, Flame, MapPin, Star, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HousingCard {
  id: number;
  image: string;
  price: number;
  title: string;
  location: string;
  score: number;
  verified: boolean;
}

const housingCards: HousingCard[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1758521541103-d29cbd5fb2e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwYmVkcm9vbXxlbnwxfHx8fDE3NjMzNzQwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: 8500,
    title: "Cozy Studio near Foundation University",
    location: "Katipunan Ave, QC",
    score: 4.8,
    verified: true
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1612419299101-6c294dc2901d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYXBhcnRtZW50JTIwcm9vbXxlbnwxfHx8fDE3NjMzNzQwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: 6500,
    title: "Bright Room with Fast WiFi",
    location: "Espana, Manila",
    score: 4.9,
    verified: true
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1579632151052-92f741fb9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBkb3JtJTIwcm9vbXxlbnwxfHx8fDE3NjMzNzQwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: 7200,
    title: "Modern Dorm with CCTV",
    location: "Taft Ave, Manila",
    score: 4.7,
    verified: true
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1535049752-3baf525dd015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2MzI5NjIxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    price: 9000,
    title: "Premium Suite - All Amenities",
    location: "Quezon Ave, QC",
    score: 4.9,
    verified: true
  }
];

interface HomeScreenProps {
  onCardClick: (id: number) => void;
}

export function HomeScreen({ onCardClick }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#14B8A6] to-[#0F766E] px-6 py-12 rounded-b-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-white mb-2">Find Your Safe Haven</h1>
            <p className="text-[#5EEAD4]">Verified student housing you can trust</p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex items-center gap-3 max-w-3xl mx-auto md:mx-0">
            <Search className="text-[#64748B]" size={20} />
            <input
              type="text"
              placeholder="Search by location or university..."
              className="flex-1 outline-none"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide max-w-3xl mx-auto md:mx-0">
            <button className="bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap border border-white/30 hover:bg-white/30 transition-colors">
              <Wifi size={16} />
              <span className="text-sm">WiFi Speed</span>
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap border border-white/30 hover:bg-white/30 transition-colors">
              <DollarSign size={16} />
              <span className="text-sm">Price</span>
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap border border-white/30 hover:bg-white/30 transition-colors">
              <Flame size={16} />
              <span className="text-sm">Fire Safety</span>
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap border border-white/30 hover:bg-white/30 transition-colors">
              <MapPin size={16} />
              <span className="text-sm">Near Campus</span>
            </button>
          </div>
        </div>
      </div>

      {/* Housing Feed */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[#1E293B]">Available Listings</h3>
          <p className="text-[#64748B]">{housingCards.length} properties</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {housingCards.map((card) => (
            <div
              key={card.id}
              onClick={() => onCardClick(card.id)}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {card.verified && (
                  <div className="absolute top-3 right-3 bg-[#F59E0B] text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Shield size={14} fill="white" />
                    <span className="text-xs">Gold Hive</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-[#1E293B] mb-2">{card.title}</h4>
                    <div className="flex items-center gap-1 text-[#64748B]">
                      <MapPin size={14} />
                      <p className="text-xs">{card.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-[#14B8A6]/10 px-3 py-1.5 rounded-full">
                      <Star size={14} className="text-[#F59E0B]" fill="#F59E0B" />
                      <span className="text-sm text-[#1E293B]">{card.score}</span>
                    </div>
                    <p className="text-xs text-[#64748B]">Hayahay Score</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#14B8A6]">₱{card.price.toLocaleString()}</p>
                    <p className="text-[#64748B] text-xs">per month</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}