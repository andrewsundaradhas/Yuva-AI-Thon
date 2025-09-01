import { Mail, Phone, Instagram, Linkedin } from "lucide-react"

const contacts = [
  {
    name: "Organizer One",
    phone: "+91 90000 00000",
    email: "organizer1@example.com",
    insta: "https://instagram.com/your-handle",
    linkedin: "https://linkedin.com/in/your-handle",
  },
  {
    name: "Organizer Two",
    phone: "+91 91111 11111",
    email: "organizer2@example.com",
    insta: "https://instagram.com/your-handle",
    linkedin: "https://linkedin.com/in/your-handle",
  },
  {
    name: "Organizer Three",
    phone: "+91 92222 22222",
    email: "organizer3@example.com",
    insta: "https://instagram.com/your-handle",
    linkedin: "https://linkedin.com/in/your-handle",
  },
  {
    name: "Organizer Four",
    phone: "+91 93333 33333",
    email: "organizer4@example.com",
    insta: "https://instagram.com/your-handle",
    linkedin: "https://linkedin.com/in/your-handle",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-20 sm:py-24">
      {/* subtle starfield overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(0,229,255,0.15) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,106,0,0.12) 0, transparent 45%)",
        }}
      />

      <h2
        className="text-pretty text-3xl font-bold tracking-wide"
        style={{ color: "#ffd600", textShadow: "0 0 10px rgba(255,214,0,0.35)" }}
      >
        Contact
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {contacts.map((c) => (
          <article
            key={c.email}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <h3 className="text-lg font-semibold text-white/95">{c.name}</h3>
            <div className="mt-3 flex flex-col gap-2 text-white/85">
              <p className="flex items-center gap-2 text-sm">
                <Phone size={16} aria-hidden="true" />
                <a href={`tel:${c.phone.replace(/\s+/g, "")}`} className="hover:underline">
                  {c.phone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <Mail size={16} aria-hidden="true" />
                <a href={`mailto:${c.email}`} className="hover:underline">
                  {c.email}
                </a>
              </p>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href={c.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-md border border-[#ffd600]/60 p-2 transition-all hover:shadow-[0_0_18px_rgba(255,214,0,0.45)]"
                  style={{ color: "#ffd600" }}
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={c.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-md border border-[#00e5ff]/60 p-2 transition-all hover:shadow-[0_0_18px_rgba(0,229,255,0.45)]"
                  style={{ color: "#00e5ff" }}
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
