import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    date: "Sep 1, 2025",
    title: "Registration Opens",
    description: "Kick off your journey by registering for Yuva-AI-Thon!",
    icon: "🚀",
    color: "from-emerald-400 to-green-600",
  },
  {
    date: "Sep 10, 2025",
    title: "Team Formation",
    description: "Form your dream team and start brainstorming ideas.",
    icon: "👥",
    color: "from-purple-400 to-indigo-600",
  },
  {
    date: "Sep 20, 2025",
    title: "Hackathon Begins",
    description: "Start building your project and bring your ideas to life.",
    icon: "⚡",
    color: "from-yellow-400 to-orange-600",
  },
  {
    date: "Sep 30, 2025",
    title: "Submission Deadline",
    description: "Submit your final project for evaluation.",
    icon: "📝",
    color: "from-blue-400 to-cyan-600",
  },
  {
    date: "Oct 5, 2025",
    title: "Grand Finale",
    description: "Winners announced and prizes awarded!",
    icon: "🏆",
    color: "from-pink-400 to-rose-600",
  },
];

export default function TimelineSection() {
  return (
    <section className="w-full py-20 bg-transparent text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            style={{ 
              color: "#ffd600", 
              textShadow: "0 0 20px rgba(255,214,0,0.5)"
            }}
          >
            Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffd600] to-[#00e5ff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#ffd600] via-[#00e5ff] to-[#ff6a00] origin-top"
            style={{
              boxShadow: "0 0 20px rgba(255,214,0,0.6), 0 0 40px rgba(0,229,255,0.4)"
            }}
          />
          
          <div className="space-y-24">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={event.date}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                {/* Content Cards */}
                <div className={`w-1/2 ${idx % 2 === 0 ? "pr-12" : "pl-12"} flex ${idx % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  {(idx % 2 === 0) && (
                    <motion.div 
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        rotateX: 5
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`relative group bg-gradient-to-br ${event.color} rounded-2xl shadow-2xl p-8 w-full max-w-md backdrop-blur-sm border border-white/20`}
                      style={{
                        transformStyle: "preserve-3d",
                        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.1)"
                      }}
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon */}
                      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {event.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-100 transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-white/90 mb-4 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                        <span className="text-sm text-white/80 font-mono tracking-wider">
                          {event.date}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Center Node */}
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.3,
                    rotate: 360,
                    boxShadow: "0 0 40px rgba(255,214,0,0.8)"
                  }}
                  viewport={{ once: true }}
                  className="z-20 w-16 h-16 rounded-full bg-gradient-to-br from-[#ffd600] to-[#00e5ff] border-4 border-white/90 flex items-center justify-center shadow-2xl mx-4 cursor-pointer"
                  style={{
                    boxShadow: "0 0 30px rgba(255,214,0,0.6), inset 0 0 20px rgba(255,255,255,0.2)"
                  }}
                >
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.15 + 0.5 }}
                    className="font-bold text-xl text-black drop-shadow-lg"
                  >
                    {idx + 1}
                  </motion.span>
                </motion.div>

                <div className={`w-1/2 ${idx % 2 !== 0 ? "pl-12" : "pr-12"} flex ${idx % 2 !== 0 ? "justify-start" : "justify-end"}`}>
                  {(idx % 2 !== 0) && (
                    <motion.div 
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: -5,
                        rotateX: 5
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`relative group bg-gradient-to-bl ${event.color} rounded-2xl shadow-2xl p-8 w-full max-w-md backdrop-blur-sm border border-white/20`}
                      style={{
                        transformStyle: "preserve-3d",
                        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.1)"
                      }}
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Icon */}
                      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {event.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-100 transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-white/90 mb-4 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                        <span className="text-sm text-white/80 font-mono tracking-wider">
                          {event.date}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#ffd600] rounded-full opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
