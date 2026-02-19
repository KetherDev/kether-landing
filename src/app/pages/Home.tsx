import { Link } from "react-router";
import { Smartphone, LayoutDashboard, Zap, ShieldCheck, ArrowRight } from "lucide-react";

/* ─── Service Card ─── */
function ServiceCard({
  icon,
  title,
  description,
  tag,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-8 flex flex-col gap-5">
      {/* Icon badge */}
      <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100 transition-colors">
        {icon}
      </div>
      {/* Tag */}
      <span
        className="inline-block text-xs text-indigo-500 bg-indigo-50 rounded-full px-3 py-1 w-fit"
        style={{ fontWeight: 500 }}
      >
        {tag}
      </span>
      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-slate-900" style={{ fontSize: "1.0625rem", fontWeight: 600 }}>
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

/* ─── Trust Pill ─── */
function TrustPill({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-full border border-slate-100 shadow-sm px-4 py-2">
      <ShieldCheck size={14} className="text-indigo-500 shrink-0" />
      <span className="text-sm text-slate-600" style={{ fontWeight: 400 }}>
        {label}
      </span>
    </div>
  );
}

/* ─── Home Page ─── */
export default function Home() {
  const services = [
    {
      icon: <Smartphone size={20} />,
      title: "Mobile Apps",
      tag: "Android · iOS",
      description:
        "We design and build native and cross-platform mobile applications that are fast, accessible, and polished — from MVP to production.",
    },
    {
      icon: <LayoutDashboard size={20} />,
      title: "Web Dashboards",
      tag: "React · Next.js",
      description:
        "Custom web interfaces and internal tools built for clarity and speed. We turn complex data into intuitive, responsive dashboards.",
    },
    {
      icon: <Zap size={20} />,
      title: "Backend & Integrations",
      tag: "APIs · Cloud",
      description:
        "Robust server-side architecture, REST and GraphQL APIs, third-party integrations, and cloud infrastructure — all production-ready.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span className="text-xs" style={{ fontWeight: 500 }}>
                Tech Studio
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-slate-900 mb-5"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
              }}
            >
              Kether builds mobile
              <br />
              <span className="text-indigo-600">&amp; web products.</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-slate-500 mb-10 max-w-xl"
              style={{ fontSize: "1.125rem", fontWeight: 400, lineHeight: 1.7 }}
            >
              We craft reliable apps and platforms for growing businesses — with
              a focus on quality, security, and long-term maintainability.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/support"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-sm transition-all duration-200 shadow-sm hover:shadow-md"
                style={{ fontWeight: 500 }}
              >
                Contact support
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/privacy"
                className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                style={{ fontWeight: 400 }}
              >
                Privacy policy
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50/60">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-14">
            <p
              className="text-xs text-indigo-500 uppercase tracking-widest mb-3"
              style={{ fontWeight: 500 }}
            >
              What we do
            </p>
            <h2
              className="text-slate-900 max-w-md"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.25,
              }}
            >
              End-to-end product development.
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust ────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
            {/* Text */}
            <div className="flex-1">
              <p
                className="text-xs text-indigo-500 uppercase tracking-widest mb-3"
                style={{ fontWeight: 500 }}
              >
                Our commitment
              </p>
              <h2
                className="text-slate-900 mb-4"
                style={{
                  fontSize: "clamp(1.375rem, 3vw, 1.75rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                }}
              >
                We focus on quality, security, and maintainability.
              </h2>
              <p
                className="text-slate-500 max-w-lg"
                style={{ fontSize: "0.9375rem", fontWeight: 400, lineHeight: 1.75 }}
              >
                Every product we ship is built to last. We follow best practices
                for code architecture, security, and performance so your platform
                grows with your business — not against it.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-col gap-3 shrink-0">
              {[
                "Code quality standards",
                "Security-first approach",
                "Maintainable architecture",
                "Transparent communication",
              ].map((label) => (
                <TrustPill key={label} label={label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────── */}
      <section className="py-20 px-6 bg-indigo-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-white mb-4"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
            }}
          >
            Ready to build something great?
          </h2>
          <p
            className="text-indigo-200 mb-8 max-w-md mx-auto"
            style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.7 }}
          >
            Reach out and let's talk about your project.
          </p>
          <Link
            to="/support"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 hover:bg-indigo-50 rounded-xl px-6 py-3 text-sm transition-all duration-200 shadow-sm"
            style={{ fontWeight: 500 }}
          >
            Get in touch
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
