import React from "react";
import { motion } from "framer-motion";

export default function VenueSection() {
  return (
    <section className="w-full py-20 bg-transparent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            style={{ 
              color: "#ffd600", 
              textShadow: "0 0 20px rgba(255,214,0,0.5)"
            }}
          >
            Competition Venue
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffd600] to-[#00e5ff] mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Map Container */}
              <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {/* Embedded Map Placeholder - Replace with actual map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0853788469777!2d80.15300931482174!3d12.970682290856934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d16c2b2b4b7%3A0x3e3b7e3c1f3a2b3c!2sVellore%20Institute%20of%20Technology%20-%20Chennai!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>

              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute top-4 left-4 bg-black/80 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Vellore Institute of Technology - Chennai</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Venue Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Venue Card */}
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group bg-gradient-to-br from-[#ffd600]/20 to-[#00e5ff]/20 rounded-2xl p-8 border border-white/20 backdrop-blur-sm"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 30px rgba(255,214,0,0.2)"
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl">🏛️</div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">MG Auditorium</h3>
                    <p className="text-[#00e5ff] font-semibold">Main Competition Venue</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-[#ffd600] text-xl">📍</div>
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Kelambakkam - Vandalur Rd, Rajan Nagar,<br />
                        Chennai, Tamil Nadu 600127
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="text-[#ffd600] text-xl">⭐</div>
                    <div>
                      <p className="text-white font-medium">Rating</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#ffd600] font-bold">4.3</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < 4 ? 'text-[#ffd600]' : 'text-gray-500'}`}>★</span>
                          ))}
                        </div>
                        <span className="text-white/60 text-sm">(1,290 reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="text-[#ffd600] text-xl">🏢</div>
                    <div>
                      <p className="text-white font-medium">Capacity</p>
                      <p className="text-white/80 text-sm">State-of-the-art auditorium with modern facilities</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-[#ffd600] text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#ffd600]/25"
                  >
                    <span>🗺️</span>
                    <span>Get Directions</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 border-2 border-[#00e5ff] text-[#00e5ff] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-[#00e5ff]/10"
                  >
                    <span>📱</span>
                    <span>View on Maps</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Additional Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-2xl mb-3">🚗</div>
                <h4 className="text-white font-semibold mb-2">Parking</h4>
                <p className="text-white/70 text-sm">Ample parking space available on campus</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-2xl mb-3">🍽️</div>
                <h4 className="text-white font-semibold mb-2">Food Court</h4>
                <p className="text-white/70 text-sm">Multiple dining options available nearby</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating Particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00e5ff] rounded-full opacity-40"
            style={{
              left: `${15 + i * 25}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
