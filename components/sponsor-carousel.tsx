"use client"

import { useMemo } from "react"

export default function SponsorCarousel() {
  const logos = useMemo(
    () => [
      { id: "nk", alt: "NK Interior Designs Pvt. Ltd.", src: "/sponsors/nk-interior.jpg" },
      { id: "bianco", alt: "Bianco Infra", src: "/sponsors/bianco-infra.jpg" },
      { id: "yi", alt: "Young Indians (Yi)", src: "/logos/yi.png" },
      { id: "ethindia", alt: "ETHIndia", src: "/sponsors/ethindia-logo.png" },
      { id: "devfolio", alt: "Devfolio", src: "/sponsors/devfolio-logo.png" },
      { id: "cr", alt: "CR", src: "/sponsors/cr.jpg" },
    ],
    [],
  )

  return (
    <div className="relative py-16 overflow-hidden" aria-label="Sponsor logos showcase">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>
      
      {/* Main sponsor grid */}
      <div className="relative z-10">
        <div className="sponsor-grid">
          {logos.map((logo, index) => (
            <div
              key={logo.id}
              className={`sponsor-card sponsor-card-${index + 1}`}
              style={{ 
                animationDelay: `${index * 0.3}s`,
                '--index': index 
              } as React.CSSProperties}
            >
              <div className="sponsor-inner">
                <div className="sponsor-glow"></div>
                <div className="sponsor-content">
                  <img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    className="sponsor-image"
                    loading="lazy"
                  />
                </div>
                <div className="sponsor-reflection"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .sponsor-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        @media (min-width: 768px) {
          .sponsor-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
          }
        }

        .sponsor-card {
          position: relative;
          perspective: 1000px;
          animation: floatUp 0.8s ease-out forwards, continuousFloat 6s ease-in-out infinite;
          opacity: 0;
          transform: translateY(60px) rotateX(15deg);
        }

        .sponsor-inner {
          position: relative;
          width: 100%;
          height: 120px;
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: subtleRotate 8s linear infinite;
        }

        .sponsor-card:hover .sponsor-inner {
          transform: translateY(-12px) rotateX(5deg) rotateY(5deg) scale(1.05);
          animation-play-state: paused;
        }

        .sponsor-content {
          position: relative;
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(20px);
          box-shadow: 
            0 8px 32px rgba(0,0,0,0.3),
            0 2px 16px rgba(255,255,255,0.1),
            inset 0 1px 0 rgba(255,255,255,0.2);
          overflow: hidden;
        }

        .sponsor-glow {
          position: absolute;
          inset: -2px;
          background: conic-gradient(from 0deg, transparent, rgba(147,51,234,0.4), transparent, rgba(59,130,246,0.4), transparent);
          border-radius: 22px;
          animation: rotateGlow 4s linear infinite;
          z-index: -1;
        }

        .sponsor-reflection {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%);
          border-radius: 20px 20px 0 0;
          pointer-events: none;
        }

        .sponsor-image {
          width: auto;
          height: 60px;
          max-width: 90%;
          object-fit: contain;
          transition: all 0.4s ease;
          filter: brightness(0.9) contrast(1.1);
        }

        .sponsor-card:hover .sponsor-image {
          filter: brightness(1.1) contrast(1.2) saturate(1.2);
          transform: scale(1.1);
        }

        /* Floating background orbs */
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: floatOrb 12s ease-in-out infinite;
        }

        .orb-1 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(147,51,234,0.6), transparent);
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(59,130,246,0.6), transparent);
          bottom: -75px;
          right: -75px;
          animation-delay: 4s;
        }

        .orb-3 {
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(16,185,129,0.6), transparent);
          top: 50%;
          right: 10%;
          animation-delay: 8s;
        }

        /* Keyframe animations */
        @keyframes floatUp {
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes continuousFloat {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          33% { transform: translateY(-8px) rotateX(2deg); }
          66% { transform: translateY(4px) rotateX(-1deg); }
        }

        @keyframes subtleRotate {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(1deg) rotateX(0.5deg); }
          50% { transform: rotateY(0deg) rotateX(-0.5deg); }
          75% { transform: rotateY(-1deg) rotateX(0.5deg); }
          100% { transform: rotateY(0deg) rotateX(0deg); }
        }

        @keyframes rotateGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.9); }
        }

        /* Stagger animation delays for each card */
        .sponsor-card-1 { animation-delay: 0s; }
        .sponsor-card-2 { animation-delay: 0.2s; }
        .sponsor-card-3 { animation-delay: 0.4s; }
        .sponsor-card-4 { animation-delay: 0.6s; }
        .sponsor-card-5 { animation-delay: 0.8s; }
        .sponsor-card-6 { animation-delay: 1s; }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .sponsor-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .sponsor-inner {
            height: 100px;
          }
          
          .sponsor-image {
            height: 50px;
          }
        }
      `}</style>
    </div>
  )
}
