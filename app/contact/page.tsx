"use client";

import { useState, FormEvent } from "react";
import BlueprintPanel from "../components/BlueprintPanel";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="pb-6 pt-16 md:pt-24">
        <div className="max-w-[1120px] mx-auto px-8">
          <p className="text-slate text-[0.95rem] mb-3.5">Contact</p>
          <h1 className="max-w-[16ch]">Tell us what you are building or fixing</h1>
          <p className="text-[1.15rem] text-ink-soft max-w-[46ch]">
            A few lines about the problem is enough to start. We will follow up with questions rather than a sales pitch.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-parchment-line">
        <div className="max-w-[1120px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <BlueprintPanel className="p-8 md:p-9">
            {status === "success" ? (
              <div>
                <h3 className="mb-2">Message received</h3>
                <p className="mb-0 text-slate text-[0.95rem]">We will review your inquiry and reply within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-[0.9rem] text-slate mb-1.5">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    disabled={status === "submitting"}
                    className="w-full px-3.5 py-3 border border-parchment-line bg-white font-sans text-base rounded-[2px] focus:outline-none focus:border-brass disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[0.9rem] text-slate mb-1.5">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    disabled={status === "submitting"}
                    className="w-full px-3.5 py-3 border border-parchment-line bg-white font-sans text-base rounded-[2px] focus:outline-none focus:border-brass disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-[0.9rem] text-slate mb-1.5">Company (optional)</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    disabled={status === "submitting"}
                    className="w-full px-3.5 py-3 border border-parchment-line bg-white font-sans text-base rounded-[2px] focus:outline-none focus:border-brass disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[0.9rem] text-slate mb-1.5">What are you working on?</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    disabled={status === "submitting"}
                    className="w-full px-3.5 py-3 border border-parchment-line bg-white font-sans text-base rounded-[2px] focus:outline-none focus:border-brass disabled:opacity-50 resize-y"
                  />
                </div>

                {status === "error" && (
                  <p className="text-[0.85rem] text-[#D83B3B] m-0">Transmission failed. Please check your connection or use the direct email link.</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="self-start inline-flex items-center justify-center gap-2 px-6 py-[13px] rounded-[2px] text-[0.95rem] font-medium bg-ink text-white hover:bg-ink-soft transition-colors disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </BlueprintPanel>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-1.5">Email</h3>
              <a href="mailto:braimaholatilewa@gmail.com" className="text-[1.05rem] text-brass-dark hover:underline">braimaholatilewa@gmail.com</a>
            </div>
            
            <div>
              <h3 className="mb-1.5">WhatsApp</h3>
              <a href="https://wa.me/2348021192335" target="_blank" rel="noopener noreferrer" className="text-[1.05rem] text-brass-dark hover:underline">Message us directly</a>
            </div>
            
            <div>
              <h3 className="mb-1.5">Based in</h3>
              <p className="mb-0">Lagos, Nigeria. Working with clients wherever they are.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}