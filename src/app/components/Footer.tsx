import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand + tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span
                className="text-slate-900 tracking-tight"
                style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                Kether
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            </div>
            <p className="text-sm text-slate-400" style={{ fontWeight: 400 }}>
              Building reliable mobile &amp; web products.
            </p>
          </div>

          {/* Contact + links */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1" style={{ fontWeight: 500 }}>
                Support
              </p>
              <a
                href="mailto:support@kether.dev"
                className="text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                style={{ fontWeight: 400 }}
              >
                support@kether.dev
              </a>
            </div>

            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1" style={{ fontWeight: 500 }}>
                Links
              </p>
              <div className="flex items-center gap-4">
                <Link
                  to="/privacy"
                  className="text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                  style={{ fontWeight: 400 }}
                >
                  Privacy
                </Link>
                <Link
                  to="/support"
                  className="text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                  style={{ fontWeight: 400 }}
                >
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-400" style={{ fontWeight: 400 }}>
            © {new Date().getFullYear()} Kether. All rights reserved.
          </p>
          <p className="text-xs text-slate-400" style={{ fontWeight: 400 }}>
            Quality · Security · Maintainability
          </p>
        </div>
      </div>
    </footer>
  );
}
