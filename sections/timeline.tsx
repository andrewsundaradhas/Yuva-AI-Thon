import React from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  date: string;
  time: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "24th September 2025",
    time: "1:00 PM",
    title: "Registration",
    description: "Participants check-in and register for the event.",
    icon: "📝",
    color: "from-blue-500 to-cyan-500",
  },
  {
    date: "24th September 2025",
    time: "2:00 PM",
    title: "Opening + Problem Statements",
    description: "Event kick-off with problem statements announcement.",
    icon: "🎤",
    color: "from-purple-500 to-pink-500",
  },
  {
    date: "24th September 2025",
    time: "3:00 PM",
    title: "Round 1: PPT Review",
    description: "Teams present their initial ideas through PPT review.",
    icon: "📊",
    color: "from-green-500 to-emerald-500",
  },
  {
    date: "24th September 2025",
    time: "6:00 PM - Overnight",
    title: "Round 2: Coding",
    description: "Overnight coding session begins.",
    icon: "💻",
    color: "from-indigo-500 to-purple-500",
  },
  {
    date: "25th September 2025",
    time: "8:00 AM",
    title: "Final Code Freeze",
    description: "Coding stops. Teams must freeze their final code.",
    icon: "⏱️",
    color: "from-red-500 to-pink-700",
  },
  {
    date: "25th September 2025",
    time: "10:00 AM",
    title: "Final Judging – Demos",
    description: "Teams present their projects to the judges.",
    icon: "⚖️",
    color: "from-yellow-500 to-amber-500",
  },
  {
    date: "25th September 2025",
    time: "12:30 PM",
    title: "Closing Ceremony + Prizes",
    description: "Winners announced, prizes awarded, and event closing.",
    icon: "🏆",
    color: "from-green-500 to-emerald-700",
  },
];


export default function TimelineSection() {
  return (
    <section className="w-full py-12 md:py-20 bg-transparent text-white overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#ffd600] via-[#ff8a00] to-[#00e5ff] bg-clip-text text-transparent">
            Timeline
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ffd600] to-[#00e5ff] mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#ffd600] via-[#ff8a00] to-[#00e5ff] opacity-60 rounded-full top-0 bottom-0"></div>
          
          {/* Left Side Vertical Line - Visible only on mobile */}
          <div className="block md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ffd600] via-[#ff8a00] to-[#00e5ff] opacity-60 rounded-full"></div>

          {/* Timeline Events */}
          <div className="relative">
            {timelineEvents.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex items-center ${idx === timelineEvents.length - 1 ? 'mb-0' : 'mb-12 md:mb-16'}`}
                  style={{ minHeight: "160px" }}
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:block w-full">
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-[#ffd600] shadow-lg z-10">
                      <div className="w-full h-full bg-gradient-to-br from-[#ffd600] to-[#ff8a00] rounded-full"></div>
                    </div>

                    {/* Connecting Line to Card */}
                    <div 
                      className={`absolute top-1/2 w-12 h-0.5 bg-gradient-to-r ${
                        isLeft 
                          ? 'right-1/2 mr-3 from-[#ffd600] to-transparent' 
                          : 'left-1/2 ml-3 from-transparent to-[#ffd600]'
                      }`}
                    ></div>

                    <div className={`w-full max-w-md ${isLeft ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}>
                      <div className="relative group">
                        {/* Time Badge */}
                        <div className={`mb-4 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                          <div className="bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                            {event.time}
                          </div>
                        </div>

                        {/* Main Card */}
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffd600]/20 group-hover:transform group-hover:scale-105">
                          {/* Icon */}
                          <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} mb-4`}>
                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center text-2xl md:text-3xl shadow-lg`}>
                              {event.icon}
                            </div>
                          </div>

                          {/* Content */}
                          <div className={`text-${isLeft ? 'left' : 'right'}`}>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#ffd600] transition-colors duration-300">
                              {event.title}
                            </h3>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed">
                              {event.description}
                            </p>
                          </div>

                          {/* Accent Line */}
                          <div className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} w-1 h-full bg-gradient-to-b ${event.color} rounded-full opacity-60`}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="block md:hidden w-full pl-16">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-3 border-[#ffd600] shadow-lg z-10">
                      <div className="w-full h-full bg-gradient-to-br from-[#ffd600] to-[#ff8a00] rounded-full"></div>
                    </div>

                    {/* Connecting Line to Card */}
                    <div className="absolute left-6 top-1/2 w-8 h-0.5 bg-gradient-to-r from-[#ffd600] to-transparent"></div>

                    <div className="relative group">
                      {/* Time Badge */}
                      <div className="mb-3 flex justify-start">
                        <div className="bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-white/20">
                          {event.time}
                        </div>
                      </div>

                      {/* Main Card */}
                      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#ffd600]/20">
                        {/* Icon and Content Container */}
                        <div className="flex items-start space-x-4">
                          {/* Icon */}
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center text-xl shadow-lg flex-shrink-0`}>
                            {event.icon}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ffd600] transition-colors duration-300">
                              {event.title}
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>

                        {/* Accent Line */}
                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${event.color} rounded-full opacity-60`}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}