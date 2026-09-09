import Link from "next/link";
import type { Metadata } from "next";
import BlueprintPanel from "../components/BlueprintPanel";

export const metadata: Metadata = {
  title: "Approach — OTELA Technology & Advisory",
  description: "How OTELA Technology & Advisory works with clients, from discovery through to handover and ongoing support.",
};

export default function Approach() {
  const processSteps = [
    { 
      id: "01", 
      title: "Discovery", 
      desc: "We spend time understanding the actual problem before proposing a solution. This usually means conversations with your team, a look at any existing systems, and a written summary of what we heard back to you for correction." 
    },
    { 
      id: "02", 
      title: "Architecture & planning", 
      desc: "We design the system before we build it: data model, integrations, and the trade-offs involved. You get a plan you can read and question, not a black box." 
    },
    { 
      id: "03", 
      title: "Build", 
      desc: "Development happens in stages with working software at each checkpoint, so you are seeing progress throughout rather than waiting for a single reveal at the end." 
    },
    { 
      id: "04", 
      title: "Handover & support", 
      desc: "You receive documentation your own team can pick up, and the option of an ongoing support arrangement if you would rather we stayed involved." 
    }
  ];

  return (
    <>
      <section className="pb-6 pt-16 md:pt-24">
        <div className="max-w-[1120px] mx-auto px-8">
          <p className="text-slate text-[0.95rem] mb-3.5">Approach</p>
          <h1 className="max-w-[18ch]">How we work, and why we work that way</h1>
          <p className="text-[1.15rem] text-ink-soft max-w-[46ch]">
            Most of what we build lives inside client systems that are not ours to show publicly. What we can show you is exactly how an engagement runs, so there are no surprises once one starts.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-parchment-line">
        <div className="max-w-[1120px] mx-auto px-8">
          <ol className="grid grid-cols-1 gap-0 list-none m-0 p-0">
            {processSteps.map((step, idx) => (
              <li 
                key={step.id} 
                className={`grid grid-cols-[64px_1fr] gap-6 py-7 border-t border-parchment-line ${idx === processSteps.length - 1 ? 'border-b' : ''}`}
              >
                <span className="font-serif text-[1.6rem] text-brass">{step.id}</span>
                <div>
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="mb-0">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-white py-16 md:py-20">
        <div className="max-w-[1120px] mx-auto px-8">
          <div className="max-w-[60ch]">
            <p className="text-brass-dark text-[0.95rem] mb-2">On confidentiality</p>
            <h2 className="text-white">Why you will not see a wall of client logos here</h2>
            <p className="text-[#C9D1DE] mb-0">
              A large share of consulting and advisory work, particularly around payments, banking and internal systems, is covered by confidentiality agreements. We treat that as the default rather than the exception. If a client is comfortable being named publicly, we will ask first, every time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-[1120px] mx-auto px-8">
          <span className="inline-block text-[0.75rem] text-slate mb-2">
            Placeholder section — populate once selected case studies are cleared for public sharing
          </span>
          <BlueprintPanel className="p-8 md:p-10">
            <h3 className="mb-2.5">Selected work</h3>
            <p className="mb-0">
              This section is reserved for case studies once we have client sign off to share them publicly. It is built into the page structure so it can be turned on without redesigning the site.
            </p>
          </BlueprintPanel>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-parchment-line">
        <div className="max-w-[1120px] mx-auto px-8 flex flex-wrap justify-between items-center gap-6">
          <div>
            <h2 className="mb-2">Want to see if this fits how you work?</h2>
            <p className="mb-0">A first conversation costs nothing and commits you to nothing.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-[13px] rounded-[2px] text-[0.95rem] font-medium bg-brass text-white hover:bg-brass-dark transition-colors">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}