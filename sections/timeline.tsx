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
    <section className="w-full py-12 md:py-20 bg-transparent text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-10 md:mb-16 px-2"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            style={{
              color: "#ffd600",
              textShadow: "0 0 20px rgba(255,214,0,0.5)",
            }}
          >
            Event Schedule
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Two days of intense hacking, learning, and innovation at VIT Chennai
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffd600] to-[#00e5ff] mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline by Days */}
        {Object.entries(eventsByDate).map(([date, events], dayIndex) => (
          <div key={date} className="mb-16">
            {/* Day Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 text-center"
            >
              <div className="inline-block bg-gradient-to-r from-[#ffd600] to-[#ff8a00] text-black px-6 py-2 rounded-full text-sm font-semibold">
                {date}
              </div>
            </motion.div>

            <div className="relative space-y-6">
              {events.map((event, idx) => (
                <motion.div
                  key={`${date}-${idx}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Time Badge */}
                  <div className="flex items-center mb-3 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-top-8">
                    <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-sm font-medium">
                      {event.time}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="relative group bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-2xl p-5 sm:p-6 w-full backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center text-2xl`}>
                        {event.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1.5">
                          {event.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
