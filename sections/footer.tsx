export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/logos/yuva.jpg" alt="YUVA logo" className="h-10 w-[86px] object-contain opacity-100" />
            <img
              src="/logos/yi.png"
              alt="Yi (Young Indians) logo"
              className="h-10 w-[64px] object-contain opacity-100"
            />
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-white/80">VIT Chennai, Tamil Nadu, India</p>
            <p className="text-xs text-white/60">© {new Date().getFullYear()} Yuva AI-Thon</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
