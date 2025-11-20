import { X, Shield, FileCheck, Wifi, ShieldCheck } from "lucide-react";

interface VerificationModalProps {
  onClose: () => void;
}

export function VerificationModal({ onClose }: VerificationModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between rounded-t-3xl">
          <h3 className="text-[#1E293B]">Gold Hive Verification</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center hover:bg-[#E2E8F0] transition-colors"
          >
            <X size={18} className="text-[#64748B]" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {/* Hero Badge */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative mb-4">
              {/* Hexagon Background */}
              <div className="w-28 h-28 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-3xl rotate-45 shadow-xl">
                <div className="w-full h-full flex items-center justify-center -rotate-45">
                  <Shield size={48} className="text-white" fill="white" />
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#F59E0B]/20 rounded-3xl rotate-45 blur-xl -z-10" />
            </div>
            <h2 className="text-[#1E293B] mb-2">Gold Hive Seal</h2>
            <p className="text-[#64748B]">Your guarantee for safe, verified student housing</p>
          </div>

          {/* What It Means */}
          <div className="mb-6">
            <h4 className="text-[#1E293B] mb-4">What This Seal Guarantees</h4>
            
            <div className="space-y-4">
              {/* Guarantee 1 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center">
                  <FileCheck size={24} className="text-[#14B8A6]" />
                </div>
                <div>
                  <h4 className="text-[#1E293B] mb-1">Standardized Contract</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Fair, transparent rental agreements reviewed by legal experts. No hidden fees or unfair clauses.
                  </p>
                </div>
              </div>

              {/* Guarantee 2 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center">
                  <ShieldCheck size={24} className="text-[#14B8A6]" />
                </div>
                <div>
                  <h4 className="text-[#1E293B] mb-1">Safety Compliant</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Fire Marshall approved, emergency exits verified, and 24/7 security measures in place.
                  </p>
                </div>
              </div>

              {/* Guarantee 3 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center">
                  <Wifi size={24} className="text-[#14B8A6]" />
                </div>
                <div>
                  <h4 className="text-[#1E293B] mb-1">High-Speed Internet</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Independently tested WiFi speeds of at least 25 Mbps. Perfect for online classes and studying.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Process */}
          <div className="bg-gradient-to-br from-[#F8FAFC] to-white border border-[#E2E8F0] rounded-2xl p-5 mb-6">
            <h4 className="text-[#1E293B] mb-3">How We Verify</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#14B8A6] rounded-full flex items-center justify-center text-white text-sm shrink-0">
                  1
                </div>
                <p className="text-[#64748B] text-sm pt-0.5">On-site inspection by HayaHive team</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#14B8A6] rounded-full flex items-center justify-center text-white text-sm shrink-0">
                  2
                </div>
                <p className="text-[#64748B] text-sm pt-0.5">Document verification (permits, contracts)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#14B8A6] rounded-full flex items-center justify-center text-white text-sm shrink-0">
                  3
                </div>
                <p className="text-[#64748B] text-sm pt-0.5">Real-time WiFi speed and safety testing</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#14B8A6] rounded-full flex items-center justify-center text-white text-sm shrink-0">
                  4
                </div>
                <p className="text-[#64748B] text-sm pt-0.5">Continuous monitoring and annual re-verification</p>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="bg-[#14B8A6]/5 border-2 border-[#14B8A6]/20 rounded-2xl p-5 text-center">
            <p className="text-[#14B8A6] text-sm mb-2">✓ Trusted by 10,000+ Students</p>
            <p className="text-[#64748B] text-xs">
              Properties with Gold Hive verification have 95% tenant satisfaction rating
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full mt-6 bg-[#14B8A6] text-white py-4 rounded-2xl hover:bg-[#0F766E] transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
