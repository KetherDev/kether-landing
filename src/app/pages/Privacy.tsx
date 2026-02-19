/* ── Privacy Policy Page ─────────────────────────────────────────────────── */

const sections = [
  {
    title: "Introduction",
    body: `Kether ("we", "our", "us") is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services, visit our website, or interact with our applications. By using any of our products, you agree to the practices described in this policy.`,
  },
  {
    title: "Information We Collect",
    body: `We may collect information you provide directly to us, such as your name, email address, and message when you contact us via our support form. We may also collect certain technical information automatically, including your IP address, browser type, device identifiers, and usage data through standard web analytics tools. We do not collect sensitive personal data such as financial information or government identifiers.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use the information we collect to respond to your support inquiries and communications, improve the performance and reliability of our products, understand how users interact with our services, and comply with our legal obligations. We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: "Data Retention",
    body: `We retain personal data only for as long as necessary to fulfill the purposes described in this policy. Support-related correspondence may be retained for up to 24 months to ensure continuity of service. You may request deletion of your data at any time by contacting us at support@kether.dev.`,
  },
  {
    title: "Cookies & Tracking",
    body: `Our website may use cookies and similar tracking technologies to enhance your browsing experience and gather anonymized analytics. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of certain features on our website.`,
  },
  {
    title: "Third-Party Services",
    body: `We may use trusted third-party providers for analytics, infrastructure, and communication services. These providers access only the data necessary to perform their functions and are bound by confidentiality agreements. We are not responsible for the privacy practices of external websites linked from our platform.`,
  },
  {
    title: "Security",
    body: `We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet is 100% secure and we cannot guarantee absolute security.`,
  },
  {
    title: "Your Rights",
    body: `Depending on your location, you may have certain rights regarding your personal information — including the right to access, correct, or delete your data. To exercise any of these rights, please contact us at support@kether.dev. We will respond to your request within 30 days.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. We will notify you of significant changes by updating the date at the top of this page. We encourage you to review this policy regularly.`,
  },
  {
    title: "Contact Us",
    body: `If you have any questions or concerns about this Privacy Policy or how we handle your information, please reach out to us at support@kether.dev. We take every inquiry seriously and will respond as quickly as possible.`,
  },
];

export default function Privacy() {
  const lastUpdated = "February 18, 2026";

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs" style={{ fontWeight: 500 }}>
              Legal
            </span>
          </div>
          <h1
            className="text-slate-900 mb-4"
            style={{
              fontSize: "clamp(1.875rem, 4vw, 2.625rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm" style={{ fontWeight: 400 }}>
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Summary card */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-12">
          <p className="text-slate-700 text-sm leading-relaxed" style={{ fontWeight: 400 }}>
            <span className="text-indigo-600" style={{ fontWeight: 600 }}>
              TL;DR —
            </span>{" "}
            We collect only what we need, never sell your data, and you can
            request deletion at any time. For questions, email{" "}
            <a
              href="mailto:support@kether.dev"
              className="text-indigo-600 hover:underline"
              style={{ fontWeight: 500 }}
            >
              support@kether.dev
            </a>
            .
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-0">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className="py-8 border-b border-slate-100 last:border-b-0"
            >
              <div className="flex items-start gap-5">
                {/* Number */}
                <span
                  className="shrink-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-400 mt-0.5"
                  style={{ fontWeight: 500 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2
                    className="text-slate-900 mb-3"
                    style={{ fontSize: "1.0625rem", fontWeight: 600, lineHeight: 1.4 }}
                  >
                    {section.title}
                  </h2>
                  <p
                    className="text-slate-500 text-sm leading-relaxed"
                    style={{ fontWeight: 400 }}
                  >
                    {section.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
