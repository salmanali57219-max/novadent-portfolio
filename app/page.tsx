"use client";

import { useEffect, useState, type FormEvent } from "react";

const services = [
  {
    number: "01",
    title: "Cosmetic dentistry",
    description: "Thoughtful treatments designed around your natural smile.",
    icon: "✳",
  },
  {
    number: "02",
    title: "Dental implants",
    description: "Long-lasting solutions that feel beautifully natural.",
    icon: "◉",
  },
  {
    number: "03",
    title: "General dentistry",
    description: "Exceptional everyday care for a healthier future.",
    icon: "＋",
  },
];

const values = [
  ["01", "People before procedures"],
  ["02", "Care without the rush"],
  ["03", "Clear, honest guidance"],
  ["04", "Comfort at every step"],
];

export default function Home() {

  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [formMessage, setFormMessage] = useState("");

const [selectedTreatment, setSelectedTreatment] = useState("");

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const treatment = params.get("treatment");
if (
  treatment === "whitening" ||
  treatment === "implants" ||
  treatment === "general" ||
  treatment === "cosmetic"
) {
  setSelectedTreatment(treatment);
}
}, []);


  async function handleAppointmentSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setFormStatus("sending");
    setFormMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xljgbkdl",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setFormStatus("success");
        setFormMessage(
          "Thank you! Your appointment request has been received. Our team will be in touch."
        );
        form.reset();
setSelectedTreatment("");
      } else {
        setFormStatus("error");
        setFormMessage(
          "We couldn't submit your request. Please try again."
        );
      }
    } catch {
      setFormStatus("error");
      setFormMessage(
        "A connection error occurred. Please check your internet and try again."
      );
    }
  }

  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#f8f7f2] text-[#193b35]"
    >
      {/* HEADER */}
      <header className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-12 lg:px-20">
        <a href="#top" className="flex items-center gap-3" aria-label="NOVADENT home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#193b35] text-2xl text-[#d9edb7]">
            ✳
          </span>
          <span>
            <span className="block text-xl font-semibold tracking-[0.16em]">
              NOVA
            </span>
            <span className="block text-[9px] tracking-[0.42em]">
              DENTAL STUDIO
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-sm md:flex">
          <a href="#approach" className="transition hover:text-[#77965e]">
            Our approach
          </a>
          <a href="#services" className="transition hover:text-[#77965e]">
            Treatments
          </a>
          <a href="#stories" className="transition hover:text-[#77965e]">
            Patient stories
          </a>
        </nav>

        <a
          href="#appointment"
          className="rounded-full bg-[#193b35] px-5 py-3 text-sm text-white transition hover:bg-[#315b4f]"
        >
          Book a visit <span className="ml-2">↗</span>
        </a>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 pb-20 pt-8 md:px-12 md:pb-28 lg:grid-cols-[1.02fr_0.98fr] lg:px-20 lg:pt-12">
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#68806a]">
            <span className="h-px w-9 bg-[#8da47b]" />
            A different kind of dentistry
          </div>

          <h1 className="max-w-[720px] text-[clamp(3.5rem,7vw,6.7rem)] leading-[0.98] tracking-[-0.065em]">
            Your smile,
            <br />
            <span className="font-serif italic text-[#7c9870]">
              beautifully
            </span>
            <br />
            considered.
          </h1>

          <p className="mt-8 max-w-md text-base leading-8 text-[#66756c] md:text-lg">
            Modern dentistry, a gentler approach, and care that starts with
            listening. Welcome to a more personal dental experience.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#appointment"
              className="rounded-full bg-[#193b35] px-7 py-4 text-sm text-white transition hover:-translate-y-0.5 hover:bg-[#315b4f]"
            >
              Discover your next smile <span className="ml-3">↗</span>
            </a>
            <a
              href="#approach"
              className="px-3 py-3 text-sm underline decoration-[#b5c1b0] underline-offset-8"
            >
              Get to know us
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-[#dce1d7] pt-6">
            <div className="flex -space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f8f7f2] bg-[#d9c6b2] text-sm">
                N
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f8f7f2] bg-[#b8c9b3] text-sm">
                S
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f8f7f2] bg-[#e5d9c8] text-sm">
                A
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold">
                Care that feels personal
              </p>
              <p className="mt-1 text-xs text-[#78867c]">
                Your comfort comes first, always.
              </p>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative mx-auto w-full max-w-[620px] pb-2 md:pb-5">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-[#c9d5bf] md:-right-8 md:-top-8 md:h-44 md:w-44" />

          <div
            className="relative aspect-square overflow-hidden rounded-full bg-[#dfe5d8] bg-cover bg-center md:aspect-auto md:min-h-[610px] md:rounded-t-[48%] md:rounded-b-[48%]"
            style={{
              backgroundImage: "url('/images/hero-dental.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#193b35]/40 via-transparent to-transparent" />
          </div>

          {/* OVERLAY CARD */}
          <div
            className="absolute z-20 rounded-2xl border border-white/50 bg-[#f8f7f2]/95 p-5 shadow-lg backdrop-blur-md md:p-6"
            style={{
              bottom: "36px",
              left: "7%",
              right: "7%",
            }}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[#6d8271]">
              The NOVADENT philosophy
            </p>
            <p className="mt-2 font-serif text-2xl italic md:text-3xl">
              Dentistry, with a little more humanity.
            </p>
          </div>

          {/* FEEL AT EASE BADGE */}
        
        </div>
      </section>

      {/* BRAND VALUES */}
      <section className="border-y border-[#e2e5dc] bg-[#f1f2eb]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-7 px-6 py-8 md:grid-cols-4 md:px-12 lg:px-20">
          {values.map(([number, label]) => (
            <div key={number} className="flex items-start gap-3">
              <span className="text-xs text-[#82977a]">{number}</span>
              <p className="max-w-[170px] text-sm leading-6">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section
        id="approach"
        className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-2 lg:gap-20 lg:px-20"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#78916d]">
            A softer standard of care
          </p>
          <h2 className="mt-5 max-w-xl text-4xl leading-tight tracking-[-0.045em] md:text-6xl">
            Good dentistry is about more than teeth.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#66756c] md:text-lg">
            We believe the best dental experience begins with feeling heard.
            No unnecessary pressure. No confusing explanations. Just considered
            care, modern techniques, and a team that takes the time to understand you.
          </p>
          <a
            href="#services"
            className="mt-7 inline-block border-b border-[#82977a] pb-2 text-sm"
          >
            Explore our approach <span className="ml-3">↗</span>
          </a>
        </div>

        <div className="relative pb-5">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/clinic-interior.jpg"
              alt="Calm and welcoming dental clinic interior"
              className="h-[340px] w-full object-cover md:h-[470px]"
            />
          </div>
          <div className="absolute bottom-0 right-5 rounded-2xl bg-[#d9edb7] px-6 py-4 shadow-lg md:right-8">
            <p className="text-sm font-semibold">A calmer kind of care</p>
            <p className="mt-1 text-xs text-[#607b54]">
              Designed around you
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-[#e9ede4] px-6 py-20 md:px-12 md:py-28 lg:px-20"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#78916d]">
                Thoughtful treatments
              </p>
              <h2 className="mt-4 text-4xl tracking-[-0.05em] md:text-6xl">
                Care for every smile.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#66756c]">
              A considered range of treatments, tailored to your needs and
              delivered with your comfort in mind.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-2xl border border-[#d7dfd1] bg-[#f8f7f2] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#82977a]">
                    {service.number}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7eddf] text-2xl transition group-hover:bg-[#d9edb7]">
                    {service.icon}
                  </span>
                </div>
                <h3 className="mt-12 text-2xl tracking-[-0.035em]">
                  {service.title}
                </h3>
                <p className="mt-4 min-h-14 text-sm leading-7 text-[#718076]">
                  {service.description}
                </p>
<a
  href={
    service.number === "01"
      ? "/cosmetic-dentistry"
      : service.number === "02"
        ? "/dental-implants"
        : "/general-dentistry"
  }
  className="mt-7 inline-block text-sm"
>
  Learn more <span className="ml-2">↗</span>
</a>


              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT EXPERIENCE */}
      <section
        id="stories"
        className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:px-20"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#78916d]">
            The feeling matters
          </p>
          <h2 className="mt-5 text-4xl leading-tight tracking-[-0.05em] md:text-6xl">
            A visit that feels different.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-[#66756c]">
            From your first conversation to your follow-up, every detail is
            designed to help you feel informed, comfortable, and in control.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl bg-[#193b35] text-[#f8f7f2] md:grid-cols-[0.8fr_1.2fr]">
          <div className="h-[300px] overflow-hidden md:h-full md:min-h-[390px]">
            <img
              src="/images/dentist-portrait.jpg"
              alt="Dental professional portrait"
              className="h-full w-full object-cover object-[center_20%] md:object-center"
            />
          </div>
          <div className="flex flex-col justify-between p-7 md:p-10">
            <span className="font-serif text-6xl text-[#d9edb7]">“</span>
            <blockquote className="mt-4 font-serif text-2xl leading-relaxed md:text-3xl">
              The best care is the kind that makes you feel confident asking questions.
            </blockquote>
            <div className="mt-8 border-t border-white/20 pt-5">
              <p className="text-sm">The NOVADENT promise</p>
              <p className="mt-2 text-xs leading-6 text-white/60">
                A concept built around comfort, clarity and trust.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* APPOINTMENT */}
      <section
        id="appointment"
        className="px-6 pb-20 md:px-12 md:pb-28 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-3xl bg-[#d9edb7] lg:grid-cols-[0.9fr_1.1fr]">
          {/* INTRODUCTION */}
          <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#607b54]">
                Your next chapter starts here
              </p>

              <h2 className="mt-5 text-4xl leading-tight tracking-[-0.05em] md:text-5xl">
                Ready to feel good about your smile?
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#4e6650]">
                Tell us a little about yourself and the care you are looking
                for. Our team will help you explore your next steps.
              </p>
            </div>

            <div className="mt-10 border-t border-[#193b35]/15 pt-6">
              <span className="text-3xl">✳</span>
              <p className="mt-3 text-sm font-medium">
                Thoughtful care. A more personal experience.
              </p>
            </div>
          </div>

          {/* APPOINTMENT FORM */}
          <div className="bg-[#f8f7f2] p-8 md:p-12 lg:p-14">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#78916d]">
                Start a conversation
              </p>

              <h3 className="mt-3 text-2xl tracking-tight md:text-3xl">
                Request an appointment
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#66756c]">
                Complete the form below and let us know how we can help.
              </p>
            </div>

            
<form
  onSubmit={handleAppointmentSubmit}
  className="space-y-5"
>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="patient-name"
                    className="mb-2 block text-xs font-medium"
                  >
                    Full name *
                  </label>
                  <input
                    id="patient-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    required
                    className="w-full rounded-xl border border-[#dce1d7] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0aaa0] focus:border-[#193b35]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="patient-email"
                    className="mb-2 block text-xs font-medium"
                  >
                    Email address *
                  </label>
                  <input
                    id="patient-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-[#dce1d7] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0aaa0] focus:border-[#193b35]"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="patient-phone"
                    className="mb-2 block text-xs font-medium"
                  >
                    Phone number
                  </label>
                  <input
                    id="patient-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-[#dce1d7] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0aaa0] focus:border-[#193b35]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="treatment"
                    className="mb-2 block text-xs font-medium"
                  >
                    Treatment of interest *
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    required
                    value={selectedTreatment}
onChange={(event) => setSelectedTreatment(event.target.value)}
                    className="w-full rounded-xl border border-[#dce1d7] bg-white px-4 py-3.5 text-sm text-[#66756c] outline-none transition focus:border-[#193b35]"
                  >
                    <option value="" disabled>
                      Choose a treatment
                    </option>
                    <option value="cosmetic">Cosmetic dentistry</option>
<option value="whitening">Teeth whitening</option>
                    <option value="implants">Dental implants</option>
                    <option value="general">General dentistry</option>
                    <option value="consultation">General consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="preferred-date"
                  className="mb-2 block text-xs font-medium"
                >
                  Preferred date
                </label>
                <input
  id="preferred-date"
  name="preferredDate"
  type="date"
  
                  className="w-full rounded-xl border border-[#dce1d7] bg-white px-4 py-3.5 text-sm text-[#66756c] outline-none transition focus:border-[#193b35]"
                />
              </div>

              <div>
                <label
                  htmlFor="patient-message"
                  className="mb-2 block text-xs font-medium"
                >
                  Anything you would like us to know?
                </label>
                <textarea
                  id="patient-message"
                  name="message"
                  rows={3}
                  placeholder="Tell us briefly how we can help..."
                  className="w-full resize-y rounded-xl border border-[#dce1d7] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0aaa0] focus:border-[#193b35]"
                />
              </div>

        <button
  type="submit"
  disabled={formStatus === "sending"}
  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#193b35] px-7 py-4 text-sm text-white transition hover:bg-[#315b4f] disabled:cursor-not-allowed disabled:opacity-60"
>
  {formStatus === "sending"
    ? "Sending request..."
    : "Request an appointment"}
  {formStatus !== "sending" && <span>↗</span>}
</button>
{formMessage && (
  <div
    role="status"
    aria-live="polite"
    className={`rounded-xl p-4 text-sm leading-6 ${
      formStatus === "success"
        ? "bg-[#e7eddf] text-[#193b35]"
        : "bg-red-50 text-red-700"
    }`}
  >
    {formMessage}
  </div>
)}
<div className="flex items-start gap-3">
  <input
    id="privacy-consent"
    name="privacyConsent"
    type="checkbox"
    value="yes"
    required
    className="mt-1 h-4 w-4 accent-[#193b35]"
  />
  <label
    htmlFor="privacy-consent"
    className="text-xs leading-6 text-[#66756c]"
  >
    I agree to have my information used to respond to my appointment
    request. *
  </label>
</div>
              <p className="text-center text-xs leading-5 text-[#879187]">
                Your information should be handled with care and respect.
              </p>
            </form>
          </div>
        </div>
      </section>
      <footer className="border-t border-[#e2e5dc] px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-5 text-xs text-[#78867c] md:flex-row md:items-center">
          <p className="font-semibold tracking-[0.16em] text-[#193b35]">
            NOVADENT STUDIO
          </p>
          <p>
            Independent concept project · Designed for portfolio presentation
          </p>
         
<div className="flex items-center gap-5">
  <a
    href="/privacy"
    className="transition hover:text-[#193b35]"
  >
    Privacy Policy
  </a>

  <a href="#top" className="hover:text-[#193b35]">
    Back to top ↑
  </a>
</div>

        </div>
      </footer>
    </main>
  );
}
