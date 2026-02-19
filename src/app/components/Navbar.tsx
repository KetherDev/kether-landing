import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "Privacy", to: "/privacy" },
    { label: "Support", to: "/support" },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <Link to="/" className="flex items-center gap-2 group">
          <span
            className="text-slate-900 tracking-tight select-none"
            style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Kether
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full bg-indigo-500 mb-0.5 group-hover:bg-indigo-400 transition-colors"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm transition-colors ${
                isActive(link.to)
                  ? "text-indigo-600"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              style={{ fontWeight: isActive(link.to) ? 500 : 400 }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 pb-4">
          <div className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive(link.to)
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
                style={{ fontWeight: isActive(link.to) ? 500 : 400 }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
