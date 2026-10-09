
const appointmentUrl = "/?treatment=cosmetic#appointment";

export default function CosmeticDentistryPage() {
  const treatments = [
    {
      number: "01",
      title: "Smile consultations",
      description:
        "Discuss your smile goals and explore treatment options with your dental professional.",
    },
    {
      number: "02",
      title: "Teeth whitening",
      description:
        "Explore professional whitening options following an assessment of your teeth and gums.",
    },
    {
      number: "03",
      title: "Smile enhancement",
      description:
        "Learn about suitable cosmetic treatments that may improve the appearance of your smile.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#193b35]">
      <header className="border-b border-[#193b35]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-semibold tracking-tight">
            NOVADENT<span className="text-[#8cae66]">.</span>
          </a>

          <a
            href={appointmentUrl}
            className="rounded-full bg-[#193b35] px-5 py-3 text-sm text-white transition hover:bg-[#28564c]"
          >
            Book an appointment
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#78945e]">
            Cosmetic dentistry
          </p>

          <h1 className="max-w-xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Your smile, thoughtfully enhanced.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#64736a]">
            Explore personalised cosmetic dental options designed around
            your goals, natural features, and oral health. Every journey
            begins with a conversation about what matters to you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={appointmentUrl}
              className="rounded-full bg-[#193b35] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#28564c]"
            >
              Book your consultation ↗
            </a>

            <a
              href="/teeth-whitening"
              className="rounded-full border border-[#193b35]/20 px-7 py-4 text-sm font-medium transition hover:bg-white"
            >
              Explore teeth whitening
            </a>
          </div>

          <p className="mt-6 text-xs leading-6 text-[#7a867e]">
            Treatment options and expected results depend on an individual
            dental assessment.
          </p>
        </div>

        <div className="relative">
          <img
            src="/images/dentist-portrait.jpg"
            alt="Dental professional at NOVADENT"
            className="h-[360px] w-full rounded-[2rem] object-cover md:h-[540px]"
          />

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#f8f7f2]/95 p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold">Designed around your smile</p>
            <p className="mt-1 text-sm leading-6 text-[#64736a]">
              Personalised guidance and clear explanations at every step.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78945e]">
            Explore your options
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight md:text-4xl">
            A considered approach to your smile goals.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {treatments.map((treatment) => (
              <article
                key={treatment.number}
                className="rounded-3xl border border-[#193b35]/10 p-7"
              >
                <span className="text-sm text-[#78945e]">
                  {treatment.number}
                </span>
                <h3 className="mt-5 text-xl font-medium">
                  {treatment.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#64736a]">
                  {treatment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
          Start with a conversation.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#64736a]">
          Tell us what you would like to improve and discuss which options
          may be suitable for you.
        </p>

        <a
          href={appointmentUrl}
          className="mt-8 inline-flex rounded-full bg-[#193b35] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#28564c]"
        >
          Request an appointment ↗
        </a>
      </section>

      <footer className="border-t border-[#193b35]/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-7 text-sm text-[#64736a]">
          <a href="/" className="font-semibold text-[#193b35]">
            NOVADENT.
          </a>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-[#193b35]">
              Privacy Policy
            </a>
            <a href="/#services" className="hover:text-[#193b35]">
              Our services
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
