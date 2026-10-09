
const appointmentUrl = "/?treatment=general#appointment";

export default function GeneralDentistryPage() {
  const services = [
    {
      number: "01",
      title: "Routine check-ups",
      description:
        "Regular dental examinations help your dentist monitor your oral health and identify concerns early.",
    },
    {
      number: "02",
      title: "Professional cleaning",
      description:
        "A professional cleaning can help remove plaque and tartar that everyday brushing may leave behind.",
    },
    {
      number: "03",
      title: "Personalised care",
      description:
        "Get advice and treatment recommendations tailored to your individual dental needs.",
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
            Everyday dental care
          </p>

          <h1 className="max-w-xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            A healthier smile starts with great care.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#64736a]">
            From routine check-ups to personalised treatment plans, our
            approach focuses on your comfort, prevention, and long-term
            oral health.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={appointmentUrl}
              className="rounded-full bg-[#193b35] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#28564c]"
            >
              Book your appointment ↗
            </a>

            <a
              href="/#services"
              className="rounded-full border border-[#193b35]/20 px-7 py-4 text-sm font-medium transition hover:bg-white"
            >
              Explore our services
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/clinic-interior.jpg"
            alt="Welcoming dental clinic interior"
            className="h-[360px] w-full rounded-[2rem] object-cover md:h-[520px]"
          />

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#f8f7f2]/95 p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold">Comfort comes first</p>
            <p className="mt-1 text-sm leading-6 text-[#64736a]">
              Clear explanations and a care plan designed around your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78945e]">
            Our approach
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight md:text-4xl">
            The essentials for a confident, healthy smile.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-3xl border border-[#193b35]/10 p-7"
              >
                <span className="text-sm text-[#78945e]">
                  {service.number}
                </span>
                <h3 className="mt-5 text-xl font-medium">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#64736a]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
          Make time for your smile.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#64736a]">
          Book a consultation to discuss your oral health and the care
          that may be right for you.
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
