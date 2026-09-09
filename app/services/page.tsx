import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — OTELA Technology & Advisory",
  description: "Application development, database and payment integration, third party integrations, cloud, architecture advisory and ongoing support.",
};

export default function Services() {
  const serviceGroups = [
    {
      title: "Build",
      note: "Software, from the first screen to the database beneath it",
      items: [
        { name: "Custom software development", desc: "Web applications, internal tools and customer facing products, built around how your business actually operates rather than a generic template." },
        { name: "Mobile app development", desc: "Native and cross platform apps for the businesses that need to be in their customers' pockets, not just their browser tabs." },
        { name: "MVP development for startups", desc: "A working, fundable product built fast enough to test the idea, on a foundation solid enough to keep once the idea works." },
        { name: "Database design & optimization", desc: "Schema design, performance tuning and migrations for systems that are either just starting out or already buckling under real usage." }
      ]
    },
    {
      title: "Connect",
      note: "Getting your systems to talk to everyone else's",
      items: [
        { name: "Payment integration", desc: "Local and international payment gateways wired in correctly, with the edge cases (failed payments, refunds, reconciliation) handled up front." },
        { name: "Third party app integration", desc: "CRMs, logistics platforms, accounting software and any other service your business already depends on, connected to the systems you use daily." },
        { name: "API development", desc: "Clean, documented APIs when your own systems need to expose data to partners, apps or internal teams." }
      ]
    },
    {
      title: "Modernize",
      note: "For systems that have outgrown how they were built",
      items: [
        { name: "Legacy system modernization", desc: "Rebuilding or wrapping older systems so they keep working for the business without holding it back." },
        { name: "Cloud migration & DevOps", desc: "Moving infrastructure to the cloud and setting up the deployment pipeline so releases stop being an event." }
      ]
    },
    {
      title: "Advise",
      note: "For decisions that need to be right before anything gets built",
      items: [
        { name: "Technical architecture review", desc: "An outside, senior look at a system's design before it is built or before it scales further, with a plain written verdict." },
        { name: "Technology strategy consulting", desc: "Help deciding what to build in house, what to buy, and what your engineering roadmap should actually prioritize." },
        { name: "Technical due diligence", desc: "An honest assessment of a codebase or platform, useful before an investment, acquisition or major partnership." }
      ]
    },
    {
      title: "Sustain",
      note: "For after launch",
      items: [
        { name: "Maintenance & support retainers", desc: "Ongoing monitoring, fixes and small improvements so a system stays healthy long after the initial build." },
        { name: "Staff augmentation", desc: "A dedicated developer or small team embedded with yours, when you need more hands rather than a separate project." }
      ]
    }
  ];

  return (
    <>
      <section className="pb-6 pt-16 md:pt-24">
        <div className="max-w-[1120px] mx-auto px-8">
          <p className="text-slate text-[0.95rem] mb-3.5">Services</p>
          <h1 className="max-w-[16ch]">What OTELA can take off your hands</h1>
          <p className="text-[1.15rem] text-ink-soft max-w-[46ch]">
            Some clients need one thing built. Others need a technical partner for the next two years. Both are welcome here.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-parchment-line">
        <div className="max-w-[1120px] mx-auto px-8">
          {serviceGroups.map((group, groupIdx) => (
            <div key={group.title} className={groupIdx === serviceGroups.length - 1 ? "mb-0" : "mb-14"}>
              <div className="flex items-baseline gap-3 mb-5 flex-wrap">
                <h2 className="mb-0">{group.title}</h2>
                <span className="text-slate text-[0.95rem]">{group.note}</span>
              </div>
              
              {group.items.map((service, serviceIdx) => (
                <div 
                  key={service.name} 
                  className={`grid grid-cols-1 md:grid-cols-[260px_1fr] gap-2 md:gap-8 py-6 border-t border-parchment-line ${serviceIdx === group.items.length - 1 ? 'border-b' : ''}`}
                >
                  <h3 className="mb-0">{service.name}</h3>
                  <p className="mb-0 text-[0.96rem] text-slate">{service.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white py-16 md:py-20">
        <div className="max-w-[1120px] mx-auto px-8 flex flex-wrap justify-between items-center gap-6">
          <div>
            <h2 className="text-white mb-2">Not sure which of these you need?</h2>
            <p className="text-[#C9D1DE] mb-0">Describe the problem. We will tell you where it actually sits.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-[13px] rounded-[2px] text-[0.95rem] font-medium bg-brass text-white hover:bg-brass-dark transition-colors">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}