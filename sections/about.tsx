import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import ScrambledText from "@/components/ScrambledText";

export default function AboutSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
    mouseX.set(x);
    mouseY.set(y);
  };

  const FloatingOrb = ({ delay, position, index }: { 
    delay: number; 
    position: string; 
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.2, 1],
        y: [0, -10, 0]
      }}
      transition={{
        duration: 4 + index,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute ${position} w-2 h-2 rounded-full bg-[#ffd600] blur-sm`}
    />
  );

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-20 sm:py-32">
      {/* Enhanced Cosmic Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <FloatingOrb delay={0} position="left-[8%] top-[15%]" index={1} />
        <FloatingOrb delay={1.5} position="right-[10%] top-[25%]" index={2} />
        <FloatingOrb delay={3} position="left-[25%] top-[8%]" index={3} />
        <FloatingOrb delay={2} position="right-[20%] top-[12%]" index={4} />
        <FloatingOrb delay={4} position="left-[15%] top-[35%]" index={5} />
        <FloatingOrb delay={1} position="right-[35%] top-[5%]" index={6} />
        
        {/* Flowing Energy Lines */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffd600]/30 to-transparent origin-left"
        />
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#ffd600]/30 to-transparent origin-right"
        />
      </div>

      {/* Main Content Container */}
      <motion.div 
        className="relative"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div 
          variants={item}
          className="text-center mb-16 relative"
        >
          <motion.div 
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ffd600]/10 rounded-full blur-3xl"
          />
          
          <motion.h1 
            variants={item}
            className="relative text-6xl md:text-7xl font-black mb-6 tracking-tight"
          >
            <motion.span 
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gradient-to-r from-[#ffd600] via-white to-[#ffd600] bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
            >
              ABOUT
            </motion.span>
            <br />
            <motion.span 
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="bg-gradient-to-r from-white via-[#ffd600] to-white bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
            >
              THE EVENT
            </motion.span>
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "96px" } : { width: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-1.5 bg-gradient-to-r from-[#ffd600] to-white mx-auto rounded-full"
          />
        </motion.div>

        {/* Enhanced Glass Card */}
        <motion.div
          ref={cardRef}
          variants={item}
          whileHover={{ scale: 1.02 }}
          onMouseMove={handleMouseMove}
          className="group relative cursor-pointer"
        >
          {/* Dynamic Mouse Follow Effect */}
          <motion.div
            className="absolute pointer-events-none rounded-full bg-[#ffd600]/10 blur-xl"
            style={{
              left: mouseXSpring,
              top: mouseYSpring,
              x: -100,
              y: -100,
              width: '200px',
              height: '200px',
            }}
            animate={{
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Outer Glow Ring */}
          <motion.div 
            animate={{
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -inset-1 bg-gradient-to-r from-[#ffd600]/20 via-white/10 to-[#ffd600]/20 rounded-3xl blur-lg"
          />
          
          {/* Main Card */}
          <motion.div 
            whileHover={{ 
              borderColor: "rgba(255, 255, 255, 0.4)",
              backgroundColor: "rgba(255, 255, 255, 0.08)"
            }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/20 overflow-hidden"
            style={{
              boxShadow: "0 0 20px rgba(255,255,255,0.04), inset 0 0 24px rgba(255,255,255,0.03)"
            }}
          >
            {/* Content */}
            <div className="relative p-10 sm:p-14 z-10">
              
              {/* Event Badge */}
              <motion.div 
                initial={{ scale: 0, rotate: -10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="inline-flex items-center mb-8"
              >
                <div className="bg-gradient-to-r from-[#ffd600] to-white px-6 py-3 rounded-2xl text-black font-bold text-sm tracking-wide shadow-lg shadow-[#ffd600]/30">
                  <span className="mr-2">🚀</span>
                  24-HOUR HACKATHON
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.h2 
                variants={item}
                className="text-4xl md:text-5xl font-black mb-8 leading-tight"
              >
                <motion.span 
                  whileHover={{
                    backgroundPosition: ["0% 50%", "100% 50%"]
                  }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-r from-[#ffd600] via-white to-[#ffd600] bg-clip-text text-transparent"
                  style={{ backgroundSize: "200% 200%" }}
                >
                  YUVA AI-THON 2025
                </motion.span>
              </motion.h2>

              {/* Enhanced Content */}
              <motion.div variants={container} className="space-y-6">
                <motion.div variants={item} className="relative">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={isInView ? { height: "100%" } : { height: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute -left-6 top-0 w-1 bg-gradient-to-b from-[#ffd600] to-white rounded-full opacity-60"
                  />
                  <ScrambledText 
                    radius={150}
                    duration={1.5}
                    speed={0.3}
                    scrambleChars="!@#$%^&*()_+-=[]{}|;:,.<>?"
                    className="text-xl md:text-2xl leading-relaxed text-white/95 font-medium pl-6"
                  >
                    <p>
                      A <span className="text-[#ffd600] font-bold">high-energy 24-hour hackathon</span> happening on 
                      <span className="text-white font-bold"> September 24–25, 2025</span> (starting at 1:00 PM) at VIT Chennai. 
                      It brings together <span className="text-[#ffd600] font-bold">500+ innovators</span> to ideate, 
                      prototype, and present bold, real-world-impact projects.
                    </p>
                  </ScrambledText>
                </motion.div>

                <motion.div variants={item} className="relative">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={isInView ? { height: "100%" } : { height: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute -left-6 top-0 w-1 bg-gradient-to-b from-white to-[#ffd600] rounded-full opacity-60"
                  />
                  <ScrambledText 
                    radius={150}
                    duration={1.5}
                    speed={0.3}
                    scrambleChars="!@#$%^&*()_+-=[]{}|;:,.<>?"
                    className="text-lg md:text-xl leading-relaxed text-white/90 pl-6"
                  >
                    <p>
                      Hosted by <span className="text-[#ffd600] font-semibold">YUVA and Yi with SWC</span>, 
                      expect dynamic mentoring, lightning workshops, and a galaxy of opportunities — 
                      culminating in <span className="text-white font-semibold">exciting prizes</span> and 
                      <span className="text-[#ffd600] font-semibold"> internship pathways</span> for standout teams.
                    </p>
                  </ScrambledText>
                </motion.div>
              </motion.div>

              {/* Stats Row */}
              <motion.div 
                variants={container}
                className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
              >
                {[
                  { value: "500+", label: "PARTICIPANTS" },
                  { value: "24", label: "HOURS" },
                  { value: "∞", label: "POSSIBILITIES" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center"
                  >
                    <motion.div 
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                      className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#ffd600] via-white to-[#ffd600] bg-clip-text text-transparent"
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-white/80 font-medium mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                variants={item}
                className="flex justify-center mt-12"
              >
                <motion.a
                  href="/brochures/yuva-ai-thon-2025.pdf"
                  download="YUVA-AI-THON-2025-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 214, 0, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#ffd600] to-white rounded-2xl text-black font-bold text-lg shadow-2xl shadow-[#ffd600]/30 overflow-hidden group cursor-pointer"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white to-[#ffd600] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <span className="relative z-10 mr-2">📥</span>
                  <span className="relative z-10">Download Brochure</span>
                  
                  {/* Download indicator */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                    className="absolute -right-1 -top-1 w-3 h-3 bg-[#ffd600] rounded-full"
                  />
                </motion.a>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-8 right-8 w-8 h-8 bg-[#ffd600]/30 rounded-full"
            />
            <motion.div 
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-8 left-8 w-6 h-6 bg-white/30 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}