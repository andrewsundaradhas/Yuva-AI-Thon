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
    time: "8:00 AM - 9:00 AM",
    title: "Registration & Breakfast",
    description: "Check-in, breakfast, and team formation for participants.",
    icon: "☕",
    color: "from-blue-500 to-cyan-500",
  },
  {
    date: "24th September 2025",
    time: "9:00 AM - 10:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address, keynote speech, and event overview.",
    icon: "🎤",
    color: "from-purple-500 to-pink-500",
  },
  {
    date: "24th September 2025",
    time: "10:00 AM - 12:00 PM",
    title: "Hacking Begins",
    description: "Coding starts! Teams begin working on their projects.",
    icon: "⌨️",
    color: "from-green-500 to-emerald-500",
  },
  {
    date: "24th September 2025",
    time: "12:00 PM - 1:00 PM",
    title: "Lunch Break",
    description: "Networking lunch with fellow participants and mentors.",
    icon: "🍽️",
    color: "from-yellow-500 to-amber-500",
  },
  {
    date: "24th September 2025",
    time: "1:00 PM - 6:00 PM",
    title: "Workshops & Mentoring",
    description: "Technical workshops and one-on-one mentoring sessions.",
    icon: "🎓",
    color: "from-red-500 to-orange-500",
  },
  {
    date: "24th September 2025",
    time: "6:00 PM - 7:00 PM",
    title: "Dinner Break",
    description: "Dinner and informal networking.",
    icon: "🍲",
    color: "from-pink-500 to-rose-500",
  },
  {
    date: "24th September 2025",
    time: "7:00 PM - 11:59 PM",
    title: "Late Night Hacking",
    description: "Continue working on projects with mentor support.",
    icon: "🌙",
    color: "from-indigo-500 to-purple-500",
  },
  {
    date: "25th September 2025",
    time: "12:00 AM - 6:00 AM",
    title: "Overnight Hacking",
    description: "All-night coding session with snacks and refreshments.",
    icon: "🌃",
    color: "from-blue-600 to-indigo-600",
  },
  {
    date: "25th September 2025",
    time: "6:00 AM - 7:00 AM",
    title: "Sunrise & Breakfast",
    description: "Early morning refreshments and team check-ins.",
    icon: "🌅",
    color: "from-amber-500 to-yellow-500",
  },
  {
    date: "25th September 2025",
    time: "7:00 AM - 10:00 AM",
    title: "Final Submissions",
    description: "Complete your projects and submit before the deadline.",
    icon: "⏱️",
    color: "from-red-500 to-pink-700",
  },
  {
    date: "25th September 2025",
    time: "10:00 AM - 11:00 AM",
    title: "Closing Ceremony & Awards",
    description: "Winners announced, prizes distributed, and closing remarks.",
    icon: "🎉",
    color: "from-green-500 to-emerald-700",
  },
];

export default function TimelineSection() {
  // Group events by date
  const eventsByDate = timelineEvents.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {} as Record<string, typeof timelineEvents>);

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
          <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#ffd600] via-[#ff8a00] to-[#00e5ff] bg-clip-text text-transparent">
            Timeline
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ffd600] to-[#00e5ff] mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#ffd600] via-[#ff8a00] to-[#00e5ff] opacity-60 rounded-full"
            style={{ height: `${timelineEvents.length * 200}px` }}
          ></div>

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
                    delay: idx * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative flex items-center mb-16 last:mb-0"
                  style={{ minHeight: "200px" }}
                >
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
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center text-3xl shadow-lg`}>
                            {event.icon}
                          </div>
                        </div>

                        {/* Content */}
                        <div className={`text-${isLeft ? 'left' : 'right'}`}>
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ffd600] transition-colors duration-300">
                            {event.title}
                          </h3>
                          <p className="text-white/80 text-base leading-relaxed">
                            {event.description}
                          </p>
                        </div>

                        {/* Accent Line */}
                        <div className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} w-1 h-full bg-gradient-to-b ${event.color} rounded-full opacity-60`}></div>
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