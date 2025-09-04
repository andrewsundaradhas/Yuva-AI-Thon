"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  {
    src: "/1.jpg",
    title: "Innovation Hub",
    description: "Where ideas come to life"
  },
  {
    src: "/2.jpg",
    title: "Collaborative Space",
    description: "Connect, create, and conquer"
  },
  {
    src: "/3.jpg",
    title: "Tech Workshops",
    description: "Learn from industry experts"
  },
  {
    src: "/4.jpg",
    title: "Networking",
    description: "Build lasting connections"
  },
  {
    src: "/5.jpg",
    title: "Mentorship Sessions",
    description: "Guidance from the best"
  },
  {
    src: "/6.jpg",
    title: "Project Showcase",
    description: "Present your innovations"
  }
]

export default function Events() {
  return (
    <section id="events" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255, 214, 0, 0.15) 0%, transparent 70%)"
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 font-migha">
            <span className="bg-gradient-to-r from-[#ffd600] via-white to-[#ffd600] bg-clip-text text-transparent">
              Event Gallery
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#ffd600] to-white mx-auto rounded-full" />
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="group relative rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Ambient Light Effect */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#ffd600] to-white opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Glass Border Effect */}
              <motion.div
                className="absolute inset-0.5 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transform group-hover:translate-y-0 transition-transform duration-500 font-migha">
                      {image.title}
                    </h3>
                    <p className="text-white/80 transform group-hover:translate-y-0 transition-transform duration-500">
                      {image.description}
                    </p>
                  </motion.div>
                </div>

                {/* Interactive Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.2, backgroundColor: "#ffd600" }}
                >
                  <span className="flex items-center justify-center h-full text-lg">
                    ✨
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#ffd600] rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-[#ffd600] rounded-full opacity-10 blur-3xl"
        />
      </div>
    </section>
  )
}