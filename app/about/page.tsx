import Link from "next/link";
import type { Metadata } from "next";
import BlueprintPanel from "../components/BlueprintPanel";

export const metadata: Metadata = {
  title: "About — OTELA Technology & Advisory",
  description: "OTELA Technology & Advisory is a technology consulting agency built around planning before building.",
};

export default function About() {
  return (
    <>
      <section className="pb-6 pt-16 md:pt-24">
        <div className="max-w-[1120px] mx-auto px-8">
          <p className="text-slate text-[0.95rem] mb-3.5 tracking-wide uppercase font-medium">About</p>
          <h1 className="max-w-[16ch]">Named for the discipline behind good engineering</h1>
          <p className="text-[1.15rem] text-ink-soft max-w-[46ch]">
            OTELA Technology & Advisory exists for one reason: too much software gets built before anyone has properly thought it through. We slow that part down, then move fast on everything after.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-parchment-line">
        <div className="max-w-[1120px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-3">What we believe</h2>
            <p>
              Good software is closer to good engineering than good decoration. It should be planned with the same rigor as a structure someone will actually stand inside. That means understanding the problem, the data, and the constraints before a single screen is designed.
            </p>
          </div>
          <div>
            <h2 className="mb-3">Who we work with</h2>
            <p>
              Businesses that need software built, connected or reviewed, and are looking for a technical partner rather than a vendor who disappears after delivery. That includes startups building a first product and established businesses modernizing an old one.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-16 md:py-24">
        <div className="max-w-[1120px] mx-auto px-8">
          <div className="max-w-[60ch] mb-12">
            <p className="text-brass text-[0.95rem] mb-2 tracking-wide uppercase font-medium">Values</p>
            <h2 className="text-white">Three things we do not compromise on</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlueprintPanel className="border-[#2C3B57]">
              <h3 className="text-white mb-2.5">Plan before we build</h3>
              <p className="text-[#C9D1DE] mb-0 text-[0.96rem]">
                Architecture decisions happen on paper first, with a written rationale, before a line of code depends on them.
              </p>
            </BlueprintPanel>
            
            <BlueprintPanel className="border-[#2C3B57]">
              <h3 className="text-white mb-2.5">Say the hard thing</h3>
              <p className="text-[#C9D1DE] mb-0 text-[0.96rem]">
                If an idea, timeline or approach will not work, we say so early, even when it is not what a client wants to hear.
              </p>
            </BlueprintPanel>
            
            <BlueprintPanel className="border-[#2C3B57]">
              <h3 className="text-white mb-2.5">Stay reachable after launch</h3>
              <p className="text-[#C9D1DE] mb-0 text-[0.96rem]">
                A project is not finished the day it ships. We stay available for the questions that only come up once real users show up.
              </p>
            </BlueprintPanel>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-[1120px] mx-auto px-8 flex flex-wrap justify-between items-center gap-6">
          <div>
            <h2 className="mb-2">Curious if we are the right fit?</h2>
            <p className="mb-0">The only way to find out is to describe the problem.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-[13px] rounded-[2px] text-[0.95rem] font-medium bg-brass text-white hover:bg-brass-dark transition-colors">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}