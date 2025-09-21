import { Trophy, ScrollText, Award, Gift, Briefcase, Star } from "lucide-react"
import SponsorCarousel from "@/components/sponsor-carousel"

export default function PrizesSection() {
  return (
    <section id="prizes" className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Trophy
            className="shrink-0 animate-pulse"
            size={32}
            color="#ffd600"
            style={{ filter: "drop-shadow(0 0 12px rgba(255,214,0,0.6))" }}
          />
          <h2
            className="text-pretty text-4xl md:text-5xl font-bold tracking-wide bg-gradient-to-r from-[#ffd600] via-[#00e5ff] to-[#ff6b6b] bg-clip-text text-transparent"
            style={{ textShadow: "0 0 20px rgba(255,214,0,0.3)" }}
          >
            Exciting Prize Pool & Internships
          </h2>
          <ScrollText
            className="hidden shrink-0 md:block animate-pulse"
            size={28}
            color="#00e5ff"
            style={{ filter: "drop-shadow(0 0 12px rgba(0,229,255,0.6))" }}
          />
        </div>

        <p className="text-lg leading-relaxed text-white/80 max-w-3xl mx-auto mb-8">
          Win big with a standout performance! Top teams unlock cash prizes, mentorship, and exclusive internship 
          opportunities with our industry partners. Celebrate innovation with a burst of neon confetti at the finale showcase.
        </p>

        <div
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105"
          style={{
            color: "#ffd600",
            background: "linear-gradient(135deg, rgba(255,214,0,0.1) 0%, rgba(0,229,255,0.1) 100%)",
            border: "1px solid rgba(255,214,0,0.4)",
            boxShadow: "0 0 25px rgba(255,214,0,0.2), inset 0 0 15px rgba(255,214,0,0.1)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Gift size={16} />
          Prizes announced on stage. Bring your best!
          <Star size={16} className="animate-pulse" />
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-1">
        {/* Track-wise Winner Prizes */}
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award 
                size={24} 
                className="text-[#ffd600] animate-pulse"
                style={{ filter: "drop-shadow(0 0 8px rgba(255,214,0,0.5))" }}
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ffd600] to-[#00e5ff] bg-clip-text text-transparent">
                Track-wise Winner Prizes
              </h3>
              <Award 
                size={24} 
                className="text-[#00e5ff] animate-pulse"
                style={{ filter: "drop-shadow(0 0 8px rgba(0,229,255,0.5))" }}
              />
            </div>
          </div>

          <div 
            className="overflow-hidden rounded-3xl border border-white/20 p-6 transition-all duration-500 hover:border-white/30 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,214,0,0.05) 0%, rgba(0,229,255,0.05) 50%, rgba(255,107,107,0.05) 100%)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.03)"
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-white/20">
                    <th className="py-4 px-4 text-left text-white/90 font-bold text-base">Position</th>
                    <th className="py-4 px-4 text-left font-bold text-base">
                      <span className="bg-gradient-to-r from-[#ffd600] to-[#ffed4e] bg-clip-text text-transparent">
                        Innovation
                      </span>
                    </th>
                    <th className="py-4 px-4 text-left font-bold text-base">
                      <span className="bg-gradient-to-r from-[#00e5ff] to-[#4dd0e1] bg-clip-text text-transparent">
                        Health Care
                      </span>
                    </th>
                    <th className="py-4 px-4 text-left font-bold text-base">
                      <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ff8a80] bg-clip-text text-transparent">
                        Entrepreneurship
                      </span>
                    </th>
                    <th className="py-4 px-4 text-left font-bold text-base">
                      <span className="bg-gradient-to-r from-[#4ecdc4] to-[#80cbc4] bg-clip-text text-transparent">
                        Road Safety
                      </span>
                    </th>
                    <th className="py-4 px-4 text-left font-bold text-base">
                      <span className="bg-gradient-to-r from-[#95e1d3] to-[#a5f3fc] bg-clip-text text-transparent">
                        Climate Change
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-200">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{
                            background: "linear-gradient(135deg, #ffd600 0%, #ffed4e 100%)",
                            color: "#000",
                            boxShadow: "0 0 15px rgba(255,214,0,0.4)"
                          }}
                        >
                          1st
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-white/90 font-semibold">₹8,000</td>
                    <td className="py-4 px-4 text-white/90 font-semibold">₹8,000</td>
                    <td className="py-4 px-4 text-white/90 font-semibold">₹8,000</td>
                    <td className="py-4 px-4 text-white/90 font-semibold">₹6,000 + YI Intern</td>
                    <td className="py-4 px-4 text-white/90 font-semibold">₹6,000 + YI Intern</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors duration-200">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{
                            background: "linear-gradient(135deg, #00e5ff 0%, #4dd0e1 100%)",
                            color: "#000",
                            boxShadow: "0 0 15px rgba(0,229,255,0.4)"
                          }}
                        >
                          2nd
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-white/90 font-semibold">YI Intern</td>
                    <td className="py-4 px-4 text-white/90 font-semibold">YI Intern</td>
                    <td className="py-4 px-4 text-white/90 font-semibold">6 Month Credit</td>
                    <td className="py-4 px-4 text-white/90 font-semibold">1 Year Credit</td>
                    <td className="py-4 px-4 text-white/90 font-semibold">2 Year Credit</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div 
              className="mt-6 text-center py-3 px-4 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,214,0,0.1) 0%, rgba(0,229,255,0.1) 100%)",
                border: "1px solid rgba(255,214,0,0.2)"
              }}
            >
              <p className="text-sm text-white/70">
                Credits powered by{" "}
                <span 
                  className="text-[#ffd600] font-bold text-base"
                  style={{ textShadow: "0 0 8px rgba(255,214,0,0.4)" }}
                >
                  codecrafters
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Mechonyx Internships */}
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase 
                size={24} 
                className="text-[#ff6b6b] animate-pulse"
                style={{ filter: "drop-shadow(0 0 8px rgba(255,107,107,0.5))" }}
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent">
                Exciting Internships from Mechonyx
              </h3>
              <Briefcase 
                size={24} 
                className="text-[#4ecdc4] animate-pulse"
                style={{ filter: "drop-shadow(0 0 8px rgba(78,205,196,0.5))" }}
              />
            </div>
          </div>

          <div 
            className="rounded-3xl border border-white/20 p-8 transition-all duration-500 hover:border-white/30 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,107,0.05) 0%, rgba(78,205,196,0.05) 100%)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.03)"
            }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div 
                className="group rounded-2xl p-6 border border-white/15 transition-all duration-300 hover:border-white/25 hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(255,214,0,0.08) 0%, rgba(0,229,255,0.08) 100%)",
                  backdropFilter: "blur(12px)"
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #ffd600 0%, #00e5ff 100%)",
                      boxShadow: "0 0 20px rgba(255,214,0,0.3)"
                    }}
                  >
                    <Briefcase size={18} className="text-black" />
                  </div>
                  <h4 className="font-bold text-lg bg-gradient-to-r from-[#ffd600] to-[#00e5ff] bg-clip-text text-transparent">
                    Technical Internships
                  </h4>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Hands-on experience in cutting-edge technology projects with industry mentorship and real-world applications.
                </p>
              </div>
              
              <div 
                className="group rounded-2xl p-6 border border-white/15 transition-all duration-300 hover:border-white/25 hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(0,229,255,0.08) 0%, rgba(255,107,107,0.08) 100%)",
                  backdropFilter: "blur(12px)"
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #00e5ff 0%, #ff6b6b 100%)",
                      boxShadow: "0 0 20px rgba(0,229,255,0.3)"
                    }}
                  >
                    <Star size={18} className="text-black" />
                  </div>
                  <h4 className="font-bold text-lg bg-gradient-to-r from-[#00e5ff] to-[#ff6b6b] bg-clip-text text-transparent">
                    Innovation Programs
                  </h4>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Work on breakthrough solutions and contribute to next-generation products with experienced teams.
                </p>
              </div>
            </div>
            
            <div 
              className="mt-8 text-center py-4 px-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(78,205,196,0.1) 100%)",
                border: "1px solid rgba(255,107,107,0.2)"
              }}
            >
              <p className="text-base text-white/80">
                Outstanding performers will receive priority consideration for{" "}
                <span 
                  className="font-bold text-lg bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent"
                  style={{ textShadow: "0 0 8px rgba(255,107,107,0.4)" }}
                >
                  Mechonyx internship opportunities
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="mt-20">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ffd600] to-[#00e5ff] bg-clip-text text-transparent mb-2">
            Our Sponsors & Partners
          </h3>
          <p className="text-white/70">Powered by industry leaders and innovators</p>
        </div>
        <div 
          className="overflow-hidden rounded-3xl border border-white/20 p-8 transition-all duration-500 hover:border-white/30 hover:shadow-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,214,0,0.03) 0%, rgba(0,229,255,0.03) 100%)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.02)"
          }}
        >
          <SponsorCarousel />
        </div>
      </div>
    </section>
  )
}
