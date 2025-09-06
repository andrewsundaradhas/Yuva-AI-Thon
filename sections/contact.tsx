import { Mail, Phone, Instagram, Linkedin } from "lucide-react"

const contacts = [
  {
    name: "Yogesh Ravi M",
    phone: "+91 95857 24343",
    email: "yuvavitc@gmail.com",
    insta: "https://www.instagram.com/yuva_vitcc?igsh=MW43enFybW5kd2Fjdg==",
    linkedin: "https://www.linkedin.com/company/yuva-vitc",
  },
  {
    name: "Subashri",
    phone: "+91 93854 17478",
    email: "yuvavitc@gmail.com",
    insta: "https://www.instagram.com/yuva_vitcc?igsh=MW43enFybW5kd2Fjdg==",
    linkedin: "https://www.linkedin.com/company/yuva-vitc",
  },
  {
    name: "Andrew S",
    phone: "+91 74183 35951",
    email: "yuvavitc@gmail.com",
    insta: "https://www.instagram.com/yuva_vitcc?igsh=MW43enFybW5kd2Fjdg==",
    linkedin: "https://www.linkedin.com/company/yuva-vitc",
  },
  {
    name: "Giridharan R",
    phone: "+91 73736 14959",
    email: "yuvavitc@gmail.com",
    insta: "https://www.instagram.com/yuva_vitcc?igsh=MW43enFybW5kd2Fjdg==",
    linkedin: "https://www.linkedin.com/company/yuva-vitc",
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
              
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
