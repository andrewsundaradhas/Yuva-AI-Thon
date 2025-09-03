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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.057131804875!2d80.15893931542383!3d12.84066599092824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af11a1a5a5%3A0xca3c6e3f6f5b8c9e!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Chennai!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="VIT Chennai Campus Location"
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
                    <p className="text-[#00e5ff] font-semibold">VIT Chennai Campus</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-white/90">Vandalur - Kelambakkam Road,</p>
                      <p className="text-white/90">Chennai, Tamil Nadu 600127</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-2">
                    <a 
                      href="https://www.google.com/maps/dir//Vellore+Institute+of+Technology+-+VIT+Chennai,+Vandalur+-+Kelambakkam+Rd,+Chennai,+Tamil+Nadu+600127/@12.8384711,80.1567507,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a5259af11a1a5a5:0xca3c6e3f6f5b8c9e!2m2!1d80.1589393!2d12.8406659"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#ffd600] to-[#ff8a00] text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Get Directions
                    </a>
                    <a 
                      href="https://www.google.com/maps/place/Vellore+Institute+of+Technology+-+VIT+Chennai/@12.840666,80.1589393,17z/data=!3m1!4b1!4m5!3m4!1s0x3a5259af11a1a5a5:0xca3c6e3f6f5b8c9e!8m2!3d12.840666!4d80.1589393"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      View on Maps
                    </a>
                  </div>
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
