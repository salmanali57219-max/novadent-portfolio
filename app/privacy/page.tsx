
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#193b35]">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-7">
        <a href="/" className="text-xl font-semibold tracking-[0.16em]">
          NOVADENT
        </a>

        <a
          href="/#appointment"
          className="rounded-full bg-[#193b35] px-5 py-3 text-sm text-white transition hover:bg-[#315b4f]"
        >
          Request an appointment ↗
        </a>
      </header>

      <article className="mx-auto max-w-3xl px-6 pb-24 pt-12 md:pt-20">
        <p className="text-xs uppercase tracking-[0.2em] text-[#78916d]">
          Your privacy matters
        </p>

        <h1 className="mt-5 text-4xl tracking-tight md:text-6xl">
          Privacy Policy
        </h1>

        <p className="mt-6 text-sm leading-7 text-[#66756c]">
          This page explains how information submitted through the NOVADENT
          website concept may be collected and used. This is a portfolio
          demonstration and must be reviewed and adapted before a real clinic
          uses it.
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-xl font-semibold">1. Information we collect</h2>
            <p className="mt-3 leading-8 text-[#66756c]">
              The appointment form may collect your name, email address,
              phone number, preferred appointment date, treatment preference,
              and any message you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. How information is used</h2>
            <p className="mt-3 leading-8 text-[#66756c]">
              Information submitted through the form is intended to help the
              clinic respond to appointment requests and communicate with
              prospective patients about their enquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. Form processing</h2>
            <p className="mt-3 leading-8 text-[#66756c]">
              Appointment requests submitted through this demonstration are
              processed using Formspree, a third-party form service. Its own
              privacy terms and data-handling practices may also apply.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Sensitive information</h2>
            <p className="mt-3 leading-8 text-[#66756c]">
              Please do not include medical records, payment details, or other
              sensitive health information in the appointment message. Use an
              approved and secure channel for information that requires
              additional protection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Data retention and requests</h2>
            <p className="mt-3 leading-8 text-[#66756c]">
              A real clinic must explain how long submitted information is
              retained, who can access it, and how individuals can request
              access, correction, or deletion. These details must be confirmed
              with the clinic and its service providers before publication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Contact</h2>
            <p className="mt-3 leading-8 text-[#66756c]">
              For this portfolio demonstration, please use the contact details
              provided directly by the person presenting the project. A real
              clinic should replace this text with its verified contact
              information.
            </p>
          </section>
        </div>

        <div className="mt-14 rounded-2xl bg-[#e9ede4] p-6">
          <p className="text-sm leading-7 text-[#52665a]">
            Portfolio notice: NOVADENT is a demonstration project. This page
            is general informational text, not legal advice or a final privacy
            policy for an operating dental practice.
          </p>
        </div>

        <a
          href="/"
          className="mt-10 inline-block border-b border-[#82977a] pb-2 text-sm"
        >
          ← Back to home
        </a>
      </article>

      <footer className="border-t border-[#e2e5dc] px-6 py-7">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 text-xs text-[#78867c] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold tracking-[0.16em] text-[#193b35]">
            NOVADENT STUDIO
          </span>
          <span>Independent portfolio concept</span>
        </div>
      </footer>
    </main>
  );
}
