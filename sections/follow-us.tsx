import { motion, Variants } from "framer-motion"
import dynamic from 'next/dynamic';

// Dynamically import icons to prevent circular dependencies
const LinkedinIcon = dynamic(() => import('lucide-react').then(mod => mod.Linkedin), { 
  ssr: false,
  loading: () => <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full animate-pulse" />
});

const InstagramIcon = dynamic(() => import('lucide-react').then(mod => mod.Instagram), { 
  ssr: false,
  loading: () => <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full animate-pulse" />
});

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
  hover: string;
}

export default function FollowUs() {
  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon className="w-8 h-8 md:w-10 md:h-10" />,
      url: 'https://www.linkedin.com/company/yuva-ai-thon',
      color: 'from-blue-500 to-blue-700',
      hover: 'hover:shadow-[0_0_30px_rgba(10,102,194,0.5)]'
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon className="w-8 h-8 md:w-10 md:h-10" />,
      url: 'https://www.instagram.com/yuva.aithon',
      color: 'from-pink-500 to-purple-600',
      hover: 'hover:shadow-[0_0_30px_rgba(225,48,108,0.5)]'
    }
  ]

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section id="follow" className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            Follow Us
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest news, announcements, and behind-the-scenes content
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${social.color} ${social.hover} transition-all duration-300 overflow-hidden group`}
            >
              {/* Animated background shine effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm">
                  {social.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">On {social.name}</h3>
                <p className="text-white/90 text-sm">
                  {social.name === 'LinkedIn' 
                    ? 'Connect with us for professional updates' 
                    : 'Follow us for stories and highlights'}
                </p>
              </div>
              
              {/* Subtle floating animation */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white/10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4 + index * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Animated decorative elements */}
        <div className="mt-20 text-center">
          <motion.p 
            className="text-white/60 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            #YUVAaithon #AIForFuture #TechInnovation
          </motion.p>
        </div>
      </div>
    </section>
  )
}
