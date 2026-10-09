
const benefits = [
  {
    number: "01",
    title: "A brighter smile",
    description:
      "Refresh the natural appearance of your teeth with a personalised whitening approach.",
  },
  {
    number: "02",
    title: "Designed for you",
    description:
      "Your treatment begins with a conversation about your goals, oral health and expectations.",
  },
  {
    number: "03",
    title: "Care comes first",
    description:
      "We assess your suitability and explain the process before recommending a treatment.",
  },
];

export default function TeethWhiteningPage() {
  const appointmentUrl = "/?treatment=whitening#appointment";

  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#193b35]">
      <header className="border-b border-[#193b35]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a
            href="/"
            className="text-2xl font-semibold tracking-[0.16em]"
          >
            NOVADENT
          </a>

          <a
            href={appointmentUrl}
            className="rounded-full bg-[#193b35] px-5 py-3 text-sm text-white transition hover:bg-[#28564c]"
          >
            Book a consultation
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#66836b]">
            Our treatments · Cosmetic dentistry
          </p>

          <h1 className="max-w-xl text-5xl font-medium leading-[1.12] tracking-tight md:text-7xl">
            A brighter smile, with care.
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-[#193b35]/70">
            Discover a personalised approach to teeth whitening,
            designed around your smile, comfort and oral health.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={appointmentUrl}
              className="rounded-full bg-[#193b35] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#28564c]"
            >
              Request a consultation
            </a>

            <a
              href="/#services"
              className="rounded-full border border-[#193b35]/20 px-7 py-4 text-sm font-medium transition hover:bg-white"
            >
              Explore our services
            </a>
          </div>

          <p className="mt-6 text-sm leading-6 text-[#193b35]/55">
            Treatment suitability and expected results vary from
            person to person. A dental assessment is recommended
            before whitening.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-[#d9edb7]" />

          <img
            src="/images/dentist-portrait.jpg"
            alt="Dentist at the NOVADENT clinic"
            className="relative h-[420px] w-full rounded-[2rem] object-cover md:h-[560px]"
          />

          <div className="absolute -bottom-5 left-5 max-w-[240px] rounded-2xl bg-white p-5 shadow-lg md:left-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[#66836b]">
              Your smile, your care
            </p>
            <p className="mt-2 text-lg font-medium">
              Personalised from the first visit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#66836b]">
              The NOVADENT approach
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
              Thoughtful care. Natural-looking results.
            </h2>

            <p className="mt-5 leading-7 text-[#193b35]/65">
              We believe cosmetic dentistry should start with
              understanding your needs, explaining your options
              and putting your oral health first.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-3xl border border-[#193b35]/10 p-7 md:p-8"
              >
                <span className="text-sm text-[#66836b]">
                  {benefit.number}
                </span>

                <h3 className="mt-8 text-xl font-medium">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-[#193b35]/65">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 rounded-[2rem] bg-[#d9edb7] p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em]">
              Your next step
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
              Let’s talk about your smile.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-[#193b35]/75">
              Request a consultation to discuss your goals and
              find out whether teeth whitening is right for you.
            </p>
          </div>

          <a
            href={appointmentUrl}
            className="inline-flex items-center justify-center rounded-full bg-[#193b35] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#28564c]"
          >
            Book a consultation →
          </a>
        </div>
      </section>

      <footer className="border-t border-[#193b35]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 text-sm text-[#193b35]/60 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <a href="/" className="font-semibold tracking-[0.16em]">
            NOVADENT
          </a>

          <div className="flex flex-wrap gap-5">
            <a href="/privacy" className="hover:text-[#193b35]">
              Privacy Policy
            </a>
            <a href="/" className="hover:text-[#193b35]">
              Back to home
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
