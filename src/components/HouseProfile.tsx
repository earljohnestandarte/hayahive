import { ArrowLeft, Video, Shield, Flame, Camera, FileCheck, Wifi, Star, MapPin, Bed, Bath, Maximize, Heart, ShieldCheck, User, Clock, MessageCircle, CheckCircle, XCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { VirtualTourModal } from "./VirtualTourModal";

interface HouseProfileProps {
  onBack: () => void;
  onShowVerification: () => void;
}

interface Review {
  id: number;
  rating: number;
  category: string;
  comment: string;
  date: string;
  initials: string;
  color: string;
}

interface Room {
  id: number;
  name: string;
  type: string;
  price: number;
  size: number;
  available: boolean;
  availableFrom?: string;
  occupants?: number;
  maxOccupants?: number;
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Room 101",
    type: "Single Room",
    price: 6500,
    size: 15,
    available: true,
    occupants: 0,
    maxOccupants: 1
  },
  {
    id: 2,
    name: "Room 102",
    type: "Shared Room",
    price: 4500,
    size: 20,
    available: true,
    occupants: 1,
    maxOccupants: 2,
    availableFrom: "Dec 1, 2025"
  },
  {
    id: 3,
    name: "Room 201",
    type: "Single Room",
    price: 7000,
    size: 18,
    available: false,
    occupants: 1,
    maxOccupants: 1
  },
  {
    id: 4,
    name: "Room 202",
    type: "Studio",
    price: 8500,
    size: 25,
    available: true,
    occupants: 0,
    maxOccupants: 1
  },
  {
    id: 5,
    name: "Room 203",
    type: "Shared Room",
    price: 4500,
    size: 20,
    available: false,
    occupants: 2,
    maxOccupants: 2
  }
];

const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    category: "Safety & Security",
    comment: "The CCTV cameras and 24/7 security make me feel really safe here. The landlord is very responsive to any concerns.",
    date: "2 weeks ago",
    initials: "MJ",
    color: "#14B8A6"
  },
  {
    id: 2,
    rating: 5,
    category: "Internet Connection",
    comment: "WiFi speed is excellent! I can attend all my online classes without any lag. Perfect for students who need reliable internet.",
    date: "1 month ago",
    initials: "AL",
    color: "#8B5CF6"
  },
  {
    id: 3,
    rating: 4,
    category: "Landlord Kindness",
    comment: "Very understanding landlord who gives grace periods for rent. Always willing to help with any issues in the room.",
    date: "1 month ago",
    initials: "RC",
    color: "#F59E0B"
  },
  {
    id: 4,
    rating: 5,
    category: "Overall Experience",
    comment: "Great value for money! The place is clean, safe, and near campus. Highly recommend to fellow students.",
    date: "2 months ago",
    initials: "ST",
    color: "#EC4899"
  }
];

export function HouseProfile({ onBack, onShowVerification }: HouseProfileProps) {
  const [wifiTesting, setWifiTesting] = useState(false);
  const [wifiSpeed, setWifiSpeed] = useState<number | null>(null);
  const [showVirtualTour, setShowVirtualTour] = useState(false);

  const handleWifiTest = () => {
    setWifiTesting(true);
    // Simulate WiFi test
    setTimeout(() => {
      setWifiSpeed(50);
      setWifiTesting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758521541103-d29cbd5fb2e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwYmVkcm9vbXxlbnwxfHx8fDE3NjMzNzQwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Property"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
        >
          <ArrowLeft size={20} className="text-[#1E293B]" />
        </button>

        {/* 360° Tour Button */}
        <button 
          onClick={() => setShowVirtualTour(true)}
          className="absolute bottom-6 right-6 bg-[#14B8A6] text-white px-6 py-3 rounded-2xl flex items-center gap-2 shadow-xl hover:bg-[#0F766E] transition-colors"
        >
          <Video size={20} />
          <span>360° Virtual Tour</span>
        </button>

        {/* Gold Hive Badge */}
        <div 
          className="absolute top-6 right-6 bg-[#F59E0B] text-white px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg cursor-pointer hover:bg-[#D97706] transition-colors" 
          onClick={onShowVerification}
        >
          <Shield size={18} fill="white" />
          <span>Gold Hive Verified</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title and Price */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h2 className="text-[#1E293B] mb-3">Cozy Studio near Foundation University</h2>
                  <div className="flex items-center gap-2 text-[#64748B] mb-4">
                    <MapPin size={18} />
                    <p>123 Katipunan Ave, Quezon City</p>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[#14B8A6] text-3xl mb-1">₱8,500</p>
                  <p className="text-[#64748B]">per month</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-3">
                <div className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-3 rounded-xl flex-1">
                  <Bed size={18} className="text-[#14B8A6]" />
                  <span className="text-[#1E293B]">1 Bed</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-3 rounded-xl flex-1">
                  <Bath size={18} className="text-[#14B8A6]" />
                  <span className="text-[#1E293B]">1 Bath</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-3 rounded-xl flex-1">
                  <Maximize size={18} className="text-[#14B8A6]" />
                  <span className="text-[#1E293B]">25 m²</span>
                </div>
              </div>
            </div>

            {/* Hayahay Score */}
            <div className="bg-gradient-to-br from-[#14B8A6]/10 to-[#5EEAD4]/10 rounded-2xl p-6 border border-[#14B8A6]/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-[#F59E0B] rounded-full p-3">
                    <Star size={24} className="text-white" fill="white" />
                  </div>
                  <div>
                    <h3 className="text-[#1E293B]">Hayahay Score</h3>
                    <p className="text-[#64748B]">Based on verified metrics</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#14B8A6] text-4xl">4.8</p>
                  <p className="text-[#64748B]">out of 5</p>
                </div>
              </div>
            </div>

            {/* Verified Credentials */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-[#1E293B] mb-6">Verified Credentials</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white border-2 border-[#14B8A6] rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
                  <div className="bg-[#14B8A6]/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                    <Flame size={28} className="text-[#14B8A6]" />
                  </div>
                  <p className="text-sm text-[#1E293B]">Fire Marshall Approved</p>
                </div>
                <div className="bg-white border-2 border-[#14B8A6] rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
                  <div className="bg-[#14B8A6]/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                    <Camera size={28} className="text-[#14B8A6]" />
                  </div>
                  <p className="text-sm text-[#1E293B]">24/7 CCTV Coverage</p>
                </div>
                <div className="bg-white border-2 border-[#14B8A6] rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
                  <div className="bg-[#14B8A6]/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                    <FileCheck size={28} className="text-[#14B8A6]" />
                  </div>
                  <p className="text-sm text-[#1E293B]">Legal Permit Verified</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-[#1E293B] mb-4">About This Property</h3>
              <p className="text-[#64748B] leading-relaxed">
                Perfect for students! This cozy studio offers a safe and comfortable living space with all essential amenities. 
                Located just 5 minutes walk from UP Diliman campus. Features include 24/7 security, high-speed internet, 
                and a shared kitchen area. The building is fully compliant with fire safety regulations and has backup power.
              </p>
            </div>

            {/* Room Availability */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-[#1E293B] mb-1">Room Availability</h3>
                  <p className="text-[#64748B]">Choose from {rooms.filter(r => r.available).length} available rooms</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={16} className="text-[#14B8A6]" />
                    <span className="text-xs text-[#64748B]">Available</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <XCircle size={16} className="text-[#64748B]" />
                    <span className="text-xs text-[#64748B]">Occupied</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className={`border-2 rounded-2xl p-4 transition-all ${
                      room.available
                        ? "border-[#14B8A6] bg-[#14B8A6]/5 hover:shadow-md cursor-pointer"
                        : "border-[#E2E8F0] bg-[#F8FAFC] opacity-60"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-[#1E293B]">{room.name}</h4>
                          {room.available ? (
                            <div className="bg-[#14B8A6] text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                              <CheckCircle size={12} />
                              <span className="text-xs">Available</span>
                            </div>
                          ) : (
                            <div className="bg-[#64748B] text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                              <XCircle size={12} />
                              <span className="text-xs">Occupied</span>
                            </div>
                          )}
                        </div>
                        <p className="text-[#64748B] text-sm mb-2">{room.type}</p>
                        {room.availableFrom && (
                          <p className="text-[#14B8A6] text-xs">Available from {room.availableFrom}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-[#14B8A6] text-xl">₱{room.price.toLocaleString()}</p>
                        <p className="text-[#64748B] text-xs">per month</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-3 border-t border-[#E2E8F0]">
                      <div className="flex items-center gap-1.5">
                        <Maximize size={14} className="text-[#64748B]" />
                        <span className="text-xs text-[#64748B]">{room.size} m²</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User size={14} className="text-[#64748B]" />
                        <span className="text-xs text-[#64748B]">
                          {room.occupants}/{room.maxOccupants} occupants
                        </span>
                      </div>
                      {room.available && (
                        <button className="ml-auto text-[#14B8A6] text-sm hover:underline">
                          Inquire →
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
                <p className="text-[#64748B] text-sm">
                  💡 <span className="text-[#1E293B]">Tip:</span> Contact the landlord to schedule a viewing or ask about upcoming vacancies.
                </p>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-[#1E293B] mb-6">Reviews & Community</h3>

              {/* Overall Rating Breakdown */}
              <div className="bg-gradient-to-br from-[#F8FAFC] to-white border-2 border-[#E2E8F0] rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[#64748B] mb-1">Overall Rating</p>
                    <div className="flex items-center gap-2">
                      <Star size={32} className="text-[#F59E0B]" fill="#F59E0B" />
                      <span className="text-4xl text-[#1E293B]">4.8</span>
                      <span className="text-[#64748B]">/ 5</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#1E293B] text-3xl">127</p>
                    <p className="text-[#64748B]">verified reviews</p>
                  </div>
                </div>

                {/* Category Breakdown */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Heart size={16} className="text-[#14B8A6]" />
                        <p className="text-sm text-[#1E293B]">Landlord Kindness</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={14}
                              className={star <= 4.9 ? "text-[#F59E0B]" : "text-[#E2E8F0]"}
                              fill={star <= 4.9 ? "#F59E0B" : "none"}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-[#1E293B]">4.9</span>
                      </div>
                    </div>
                    <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                      <div className="bg-[#14B8A6] h-2 rounded-full" style={{ width: "98%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Shield size={16} className="text-[#14B8A6]" />
                        <p className="text-sm text-[#1E293B]">Safety & Security</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={14}
                              className={star <= 4.8 ? "text-[#F59E0B]" : "text-[#E2E8F0]"}
                              fill={star <= 4.8 ? "#F59E0B" : "none"}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-[#1E293B]">4.8</span>
                      </div>
                    </div>
                    <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                      <div className="bg-[#14B8A6] h-2 rounded-full" style={{ width: "96%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Wifi size={16} className="text-[#14B8A6]" />
                        <p className="text-sm text-[#1E293B]">WiFi & Connectivity</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={14}
                              className={star <= 4.7 ? "text-[#F59E0B]" : "text-[#E2E8F0]"}
                              fill={star <= 4.7 ? "#F59E0B" : "none"}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-[#1E293B]">4.7</span>
                      </div>
                    </div>
                    <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                      <div className="bg-[#14B8A6] h-2 rounded-full" style={{ width: "94%" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="mb-4">
                <h4 className="text-[#1E293B] mb-4">What Tenants Are Saying</h4>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white border border-[#E2E8F0] rounded-2xl p-5 hover:shadow-md transition-shadow"
                    >
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-3">
                        {/* Avatar */}
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0"
                          style={{ backgroundColor: review.color }}
                        >
                          <span>{review.initials}</span>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-[#1E293B]">Anonymous Student</p>
                            <div className="flex items-center gap-1 bg-[#14B8A6]/10 px-2 py-0.5 rounded-full">
                              <ShieldCheck size={12} className="text-[#14B8A6]" />
                              <span className="text-xs text-[#14B8A6]">Verified Tenant</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  size={14}
                                  className={star <= review.rating ? "text-[#F59E0B]" : "text-[#E2E8F0]"}
                                  fill={star <= review.rating ? "#F59E0B" : "none"}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-[#64748B]">• {review.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Category Tag */}
                      <div className="inline-block bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-full mb-3">
                        <span className="text-xs text-[#64748B]">{review.category}</span>
                      </div>

                      {/* Comment */}
                      <p className="text-[#1E293B] leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 flex gap-3">
                <ShieldCheck size={20} className="text-[#14B8A6] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#1E293B] text-sm mb-1">Privacy Protected</p>
                  <p className="text-[#64748B] text-xs leading-relaxed">
                    All reviews are from verified tenants. Names are kept anonymous to protect student privacy while maintaining transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Landlord Profile */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="text-[#1E293B] mb-4">Property Owner</h4>
                <div className="flex items-start gap-4 mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1756277623973-3717bc2d4427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYW5kbG9yZCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzM3NDc2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Maria Santos"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-[#1E293B]">Maria Santos</h4>
                      <ShieldCheck size={16} className="text-[#14B8A6]" />
                    </div>
                    <p className="text-[#64748B] text-sm mb-2">Verified Landlord</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className={star <= 4.9 ? "text-[#F59E0B]" : "text-[#E2E8F0]"}
                          fill={star <= 4.9 ? "#F59E0B" : "none"}
                        />
                      ))}
                      <span className="text-sm text-[#1E293B] ml-1">4.9</span>
                      <span className="text-xs text-[#64748B]">(89 reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center">
                      <Clock size={18} className="text-[#14B8A6]" />
                    </div>
                    <div>
                      <p className="text-[#1E293B]">Response Time</p>
                      <p className="text-[#64748B] text-xs">Within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center">
                      <User size={18} className="text-[#14B8A6]" />
                    </div>
                    <div>
                      <p className="text-[#1E293B]">Member Since</p>
                      <p className="text-[#64748B] text-xs">January 2020</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center">
                      <Shield size={18} className="text-[#14B8A6]" />
                    </div>
                    <div>
                      <p className="text-[#1E293B]">Properties</p>
                      <p className="text-[#64748B] text-xs">3 verified listings</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#F8FAFC] text-[#14B8A6] border border-[#E2E8F0] py-3 rounded-xl hover:bg-[#14B8A6]/5 transition-colors flex items-center justify-center gap-2">
                  <MessageCircle size={18} />
                  <span>Message Landlord</span>
                </button>
              </div>

              {/* Connectivity Card - PROMINENT */}
              <div className="bg-gradient-to-br from-[#14B8A6] to-[#0F766E] rounded-3xl p-6 shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Wifi size={24} className="text-white" />
                      <h3 className="text-white">High-Speed Internet</h3>
                    </div>
                    <p className="text-[#5EEAD4] text-sm">Real-time connectivity test</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                    <span className="text-xs">Verified</span>
                  </div>
                </div>

                {wifiSpeed !== null ? (
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                    <div className="text-center mb-3">
                      <p className="text-white text-5xl mb-2">{wifiSpeed}</p>
                      <p className="text-[#5EEAD4]">Mbps Download Speed</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-white text-sm">
                      <div className="w-2 h-2 bg-[#5EEAD4] rounded-full animate-pulse" />
                      <span>Tested on Nov 17, 2025</span>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleWifiTest}
                    disabled={wifiTesting}
                    className="w-full bg-white text-[#14B8A6] py-4 rounded-2xl hover:bg-white/90 transition-colors disabled:opacity-50"
                  >
                    {wifiTesting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-[#14B8A6] border-t-transparent rounded-full animate-spin" />
                        <span>Testing connection...</span>
                      </div>
                    ) : (
                      <span>Test WiFi Speed Now</span>
                    )}
                  </button>
                )}

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <p className="text-[#5EEAD4] text-xs mb-1">Provider</p>
                    <p className="text-white text-sm">PLDT Fibr</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <p className="text-[#5EEAD4] text-xs mb-1">Plan</p>
                    <p className="text-white text-sm">100 Mbps</p>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <button className="w-full bg-[#14B8A6] text-white py-4 rounded-2xl shadow-lg hover:bg-[#0F766E] transition-colors">
                Contact Landlord
              </button>

              {/* Save Button */}
              <button className="w-full bg-white text-[#14B8A6] border-2 border-[#14B8A6] py-4 rounded-2xl hover:bg-[#14B8A6]/5 transition-colors flex items-center justify-center gap-2">
                <Heart size={20} />
                <span>Save Property</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Tour Modal */}
      {showVirtualTour && (
        <VirtualTourModal onClose={() => setShowVirtualTour(false)} />
      )}
    </div>
  );
}