import { useState } from "react";
import { Mail, MessageSquare, Clock, CheckCircle2, ArrowRight } from "lucide-react";

/* ─── Info Card ─── */
function InfoCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-widest mb-1" style={{ fontWeight: 500 }}>
          {label}
        </p>
        <p className="text-sm text-slate-800" style={{ fontWeight: 500 }}>
          {value}
        </p>
        {sub && (
          <p className="text-xs text-slate-400 mt-0.5" style={{ fontWeight: 400 }}>
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

/* ─── Support Page ─── */
export default function Support() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full rounded-xl border text-sm text-slate-900 placeholder-slate-400 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 ${
      errors[field]
        ? "border-red-300 bg-red-50/30"
        : "border-slate-200 bg-white hover:border-slate-300"
    }`;

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs" style={{ fontWeight: 500 }}>
              Get help
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
            We're here to help.
          </h1>
          <p
            className="text-slate-500"
            style={{ fontSize: "1.0625rem", fontWeight: 400, lineHeight: 1.7 }}
          >
            Reach out with any questions, bug reports, or feedback. Our team
            responds within one business day.
          </p>
        </div>

        {/* Info cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          <InfoCard
            icon={<Mail size={18} />}
            label="Email"
            value="support@kether.dev"
            sub="Available Monday – Friday"
          />
          <InfoCard
            icon={<Clock size={18} />}
            label="Response time"
            value="Within 24 hours"
            sub="Business days only"
          />
          <InfoCard
            icon={<MessageSquare size={18} />}
            label="Inquiry types"
            value="Technical & General"
            sub="All questions welcome"
          />
        </div>

        {/* Form + aside layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
                    <CheckCircle2 size={28} />
                  </div>
                  <h2
                    className="text-slate-900"
                    style={{ fontSize: "1.25rem", fontWeight: 600 }}
                  >
                    Message sent!
                  </h2>
                  <p
                    className="text-slate-500 max-w-xs text-sm"
                    style={{ fontWeight: 400 }}
                  >
                    Thanks for reaching out. We'll get back to you at{" "}
                    <span className="text-indigo-600" style={{ fontWeight: 500 }}>
                      {form.email}
                    </span>{" "}
                    within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
                    style={{ fontWeight: 500 }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2
                    className="text-slate-900 mb-7"
                    style={{ fontSize: "1.125rem", fontWeight: 600 }}
                  >
                    Send us a message
                  </h2>

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-slate-700 mb-1.5"
                        style={{ fontWeight: 500 }}
                      >
                        Full name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={inputClass("name")}
                        style={{ fontWeight: 400 }}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1" style={{ fontWeight: 400 }}>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-slate-700 mb-1.5"
                        style={{ fontWeight: 500 }}
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={inputClass("email")}
                        style={{ fontWeight: 400 }}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1" style={{ fontWeight: 400 }}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-sm text-slate-700 mb-1.5"
                      style={{ fontWeight: 500 }}
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className={inputClass("subject")}
                      style={{ fontWeight: 400 }}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1" style={{ fontWeight: 400 }}>
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label
                      htmlFor="message"
                      className="block text-sm text-slate-700 mb-1.5"
                      style={{ fontWeight: 500 }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us more about your issue or question…"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={`${inputClass("message")} resize-none`}
                      style={{ fontWeight: 400 }}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1" style={{ fontWeight: 400 }}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 py-3 text-sm transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto justify-center"
                    style={{ fontWeight: 500 }}
                  >
                    Send message
                    <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Aside */}
          <div className="flex flex-col gap-5">
            {/* FAQ */}
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
              <h3
                className="text-slate-900 mb-4"
                style={{ fontSize: "0.9375rem", fontWeight: 600 }}
              >
                Common topics
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "How to report a bug",
                  "Billing & subscription questions",
                  "API access & integrations",
                  "Account management",
                  "Feature requests",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                    <span className="text-sm text-slate-600" style={{ fontWeight: 400 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct email card */}
            <div className="bg-indigo-600 rounded-2xl p-6">
              <p className="text-indigo-200 text-xs uppercase tracking-widest mb-2" style={{ fontWeight: 500 }}>
                Prefer email?
              </p>
              <p className="text-white text-sm mb-3" style={{ fontWeight: 400, lineHeight: 1.6 }}>
                Write to us directly and we'll get back to you as soon as
                possible.
              </p>
              <a
                href="mailto:support@kether.dev"
                className="inline-flex items-center gap-1.5 text-sm text-white hover:text-indigo-200 transition-colors"
                style={{ fontWeight: 500 }}
              >
                support@kether.dev
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
