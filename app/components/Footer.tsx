import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-ink text-[#C9D1DE] pt-14 pb-14 px-8">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8 pb-8 border-b border-[#2C3B57] mb-6">
            <div>
              <Link href="/" className="font-serif text-[1.3rem] text-white">
                OTELA<span className="text-brass">.</span>
              </Link>
              <p className="max-w-[32ch] mt-3 text-sm">
                Technology and advisory services for businesses that need software they can trust.
              </p>
            </div>
            
            <nav>
              <ul className="flex flex-wrap gap-5 list-none m-0 p-0">
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/approach" className="hover:text-white transition-colors">Approach</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </div>
          
          <div className="flex flex-wrap justify-between text-[0.85rem] text-[#7A8AA6] gap-2">
            <span>&copy; {currentYear} OTELA Technology & Advisory</span>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/2340000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#1F6F5C] hover:bg-[#17564A] flex items-center justify-center shadow-[0_4px_14px_rgba(16,25,67,0.25)] transition-colors"
        aria-label="Message us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] fill-white">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35a9.86 9.86 0 0 0 4.62 1.17h.01c5.46 0 9.9-4.45 9.9-9.91S17.5 2 12.04 2zm5.8 14.13c-.24.68-1.42 1.3-1.96 1.35-.5.05-1.02.24-3.4-.71-2.87-1.14-4.7-4.06-4.85-4.25-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.66.5.24.58.83 2 .9 2.14.07.14.12.31.02.5-.1.19-.15.31-.3.48-.14.17-.31.38-.44.51-.14.14-.29.3-.13.58.17.28.74 1.22 1.6 1.98 1.1.98 2.02 1.28 2.3 1.43.28.14.44.12.61-.07.16-.19.7-.81.89-1.09.19-.28.38-.23.63-.14.26.1 1.65.78 1.93.92.28.14.47.21.53.33.07.12.07.68-.17 1.35z"/>
        </svg>
      </a>
    </>
  );
}