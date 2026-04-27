import { Outlet, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import brandLogo from "@/assets/b402c8efd70b38e0d5cb2eef9fe01649b01c6575.png";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const brandName = "Digital Risk Lab";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${mobileMenuOpen
          ? "bg-slate-950/95 backdrop-blur-lg border-b border-slate-800"
          : scrolled
            ? "bg-slate-950/95 backdrop-blur-lg border-b border-slate-800"
            : "bg-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
              <img
                src={brandLogo}
                alt="Digital Risk Lab"
                className="h-9 w-9 sm:h-11 sm:w-11 object-contain rounded-sm shrink-0"
              />
              <div className="flex flex-col leading-none min-w-0">
                <span className="font-display text-lg sm:text-2xl md:text-3xl font-bold tracking-tight truncate">
                  <span className="logo-shine">
                    {brandName}
                  </span>
                </span>
                <span className="hidden sm:block text-[11px] font-bold tracking-[0.28em] text-slate-200 uppercase mt-1">
                  Trust · Resilience · Innovation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 text-sm font-medium font-display">

              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 rounded-full border border-slate-700/60 text-slate-200 hover:border-orange-500/60 hover:text-white transition-all duration-200 bg-slate-900/40 backdrop-blur-sm">
                  Lab <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-52 bg-slate-900 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-800 overflow-hidden">
                  <Link to="/" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">Labs Home</Link>
                  <Link to="/advisory/services" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">All Services</Link>
                  <Link to="/advisory/case-studies" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">Case Studies</Link>
                </div>
              </div>

              <Link
                to="/news"
                className="px-4 py-2 rounded-full border border-slate-700/60 text-slate-200 hover:border-orange-500/60 hover:text-white transition-all duration-200 bg-slate-900/40 backdrop-blur-sm"
              >
                News
              </Link>

              <Link to="/research" className="px-4 py-2 rounded-full border border-slate-700/60 text-slate-200 hover:border-blue-500/60 hover:text-white transition-all duration-200 bg-slate-900/40 backdrop-blur-sm">
                Research
              </Link>

              <Link to="/register" className="px-5 py-2 bg-slate-500 hover:bg-gray-600 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-orange-500/40">
                Login / Signup
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-3 p-4 rounded-2xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-black/40 space-y-1.5"
              >
                <Link
                  to="/"
                  className="block py-2 text-base text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Lab Home
                </Link>
                <Link
                  to="/advisory/services"
                  className="block py-2 pl-4 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Services
                </Link>
                <Link
                  to="/advisory/case-studies"
                  className="block py-2 pl-4 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Case Studies
                </Link>
                <Link
                  to="/news"
                  className="block py-2 text-base text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  News
                </Link>
                <Link
                  to="/research"
                  className="block py-2 text-base text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Research
                </Link>
                <Link
                  to="/register"
                  className="block mt-4 px-6 py-3 bg-linear-to-r from-slate-500 to-gray-200 text-white rounded-xl text-center font-semibold"
                >
                  Login / Signup
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={brandLogo}
                alt="Digital Risk Lab"
                className="h-12 w-12 object-contain rounded-sm"
              />
              <div>
                <div className="font-display font-bold text-lg leading-none">
                  <span className="logo-shine">Digital Risk Lab</span>
                </div>
                <div className="text-xs text-slate-400">
                  Trust. Resilience. Innovation.
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Capability building for cyber, compliance, and digital risk
              professionals.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-orange-500">
              Lab
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/advisory" className="text-slate-400 hover:text-white transition-colors">
                  Lab Home
                </Link>
              </li>
              <li>
                <Link
                  to="/advisory/services"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/advisory/case-studies"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-blue-500">
              Quick Access
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/news" className="text-slate-400 hover:text-white transition-colors">News</Link>
              </li>
              <li>
                <Link to="/research" className="text-slate-400 hover:text-white transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-slate-400 hover:text-white transition-colors">
                  Login / Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © 2026 Digital Risk Labs. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
