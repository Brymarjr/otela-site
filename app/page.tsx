import Link from "next/link";
import BlueprintPanel from "./components/BlueprintPanel";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 overflow-hidden relative">
        <div className="max-w-[1120px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="text-slate text-[0.95rem] mb-3.5">Technology & Advisory</p>
            <h1 className="max-w-[14ch]">Software built the way a structure is built. Deliberately.</h1>
            <p className="text-[1.15rem] text-ink-soft max-w-[46ch]">
              OTELA designs, builds and integrates the systems businesses run on: applications, databases, payments and the third party services that connect them. We plan before we build, and we stay accountable after launch.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-[13px] rounded-[2px] text-[0.95rem] font-medium bg-brass text-white hover:bg-brass-dark transition-colors">
                Talk to us
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-[13px] rounded-[2px] text-[0.95rem] font-medium bg-transparent border border-ink text-ink hover:border-brass hover:text-brass-dark transition-colors">
                See what we do
              </Link>
            </div>
          </div>
          <div>
            <svg className="w-full h-auto" viewBox="0 0 420 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="30" y="30" width="360" height="300" strokeWidth="1" className="stroke-ink opacity-35" fill="none" />
              <path className="animate-draw stroke-ink fill-none" d="M60 260 L60 120 L150 60 L240 120 L240 260" strokeWidth="1.5" />
              <path className="animate-draw stroke-brass fill-none" d="M150 60 L150 260" strokeWidth="1.5" style={{ animationDelay: '0.3s' }} />
              <circle className="animate-draw stroke-ink fill-none" cx="300" cy="150" r="42" strokeWidth="1.5" style={{ animationDelay: '0.6s' }} />
              <path className="animate-draw stroke-brass fill-none" d="M300 108 L300 192 M258 150 L342 150" strokeWidth="1.5" style={{ animationDelay: '0.9s' }} />
              <path className="animate-draw stroke-ink fill-none" d="M60 300 L360 300" strokeWidth="1" style={{ animationDelay: '1.1s' }} />
            </svg>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 md:py-20 border-t border-parchment-line">
        <div className="max-w-[1120px] mx-auto px-8">
          <div className="max-w-[60ch] mb-10">
            <p className="text-brass-dark text-[0.95rem] mb-2">What we do</p>
            <h2>Three problems most businesses eventually hit</h2>
            <p>They need software that works, data that connects, and money that moves safely between systems. OTELA is built around those three problems.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlueprintPanel>
              <h3 className="mb-2.5">Build it</h3>
              <p className="text-[0.96rem] text-slate mb-0">Web and mobile applications, internal tools, and the databases behind them, designed to hold up as the business grows.</p>
            </BlueprintPanel>
            
            <BlueprintPanel>
              <h3 className="mb-2.5">Connect it</h3>
              <p className="text-[0.96rem] text-slate mb-0">Payment gateways, CRMs, logistics platforms and any third party service your business depends on, wired together properly.</p>
            </BlueprintPanel>
            
            <BlueprintPanel>
              <h3 className="mb-2.5">Advise on it</h3>
              <p className="text-[0.96rem] text-slate mb-0">Architecture reviews, technology strategy and honest guidance on what to build, what to buy and what to leave alone.</p>
            </BlueprintPanel>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 md:py-20 bg-ink text-white">
        <div className="max-w-[1120px] mx-auto px-8">
          <div className="max-w-[60ch] mb-10">
            <p className="text-brass-dark text-[0.95rem] mb-2">How we work</p>
            <h2 className="text-white">Four steps, in order, every time</h2>
            <p className="text-[#C9D1DE]">We do not start writing code before we understand the problem, and we do not disappear after launch.</p>
          </div>
          
          <ol className="grid grid-cols-1 gap-0 list-none m-0 p-0 border-t border-[#2C3B57]">
            {[
              { id: "01", title: "Discovery", desc: "We learn the business problem before touching a design tool or an editor." },
              { id: "02", title: "Architecture & planning", desc: "We map the system, the data, and the integrations before committing to a build." },
              { id: "03", title: "Build", desc: "Development happens in visible stages, with working software to review at each one." },
              { id: "04", title: "Handover & support", desc: "You get documentation your own team can read, plus a support arrangement if you want one." }
            ].map((step, idx) => (
              <li key={step.id} className={`grid grid-cols-[64px_1fr] gap-6 py-7 border-[#2C3B57] ${idx !== 3 ? 'border-b' : ''}`}>
                <span className="font-serif text-[1.6rem] text-brass">{step.id}</span>
                <div>
                  <h3 className="text-white mb-2">{step.title}</h3>
                  <p className="text-[#C9D1DE] mb-0">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          
          <Link href="/approach" className="inline-flex items-center gap-2 px-6 py-[13px] mt-4 rounded-[2px] text-[0.95rem] font-medium bg-transparent border border-white text-white hover:border-brass hover:text-brass-dark transition-colors">
            Read about our approach
          </Link>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1120px] mx-auto px-8">
          <BlueprintPanel className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center flex-wrap gap-6">
            <div className="max-w-[45ch]">
              <h2 className="mb-2">Have a system that needs building, fixing, or connecting?</h2>
              <p className="mb-0">Tell us what you are working with. We will tell you plainly what it will take.</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-[13px] rounded-[2px] text-[0.95rem] font-medium bg-ink text-white hover:bg-ink-soft transition-colors">
                Email us
              </Link>
              <a href="https://wa.me/2340000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-[13px] rounded-[2px] text-[0.95rem] font-medium bg-[#1F6F5C] text-white hover:bg-[#17564A] transition-colors">
                Message on WhatsApp
              </a>
            </div>
          </BlueprintPanel>
        </div>
      </section>
    </>
  );
}