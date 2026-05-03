import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  Loader2,
  CreditCard,
  AlertTriangle,
  LogIn,
  UserPlus,
  LogOut,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  COURSE_DETAILS,
  signupUser,
  loginUser,
  logPayment,
} from "../lib/api";

type Stage = "signup" | "login" | "course" | "paying";

export function Register() {
  const searchParams = new URLSearchParams(window.location.search);
  const initialCourse = searchParams.get("course") || "investment-banking";

  const [stage, setStage] = useState<Stage>("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<string>(initialCourse);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [infoMsg, setInfoMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const courseConfig =
    COURSE_DETAILS[selectedCourse] || COURSE_DETAILS["investment-banking"];

  useEffect(() => {
    const resolvePendingOrder = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const pendingOrder = localStorage.getItem("dra_pending_order");
        const pendingCourse = localStorage.getItem("dra_pending_course");
        const isReturn = params.get("checkout_return") === "true";

        if (!pendingOrder) {
          if (isReturn) {
            window.history.replaceState({}, document.title, window.location.pathname);
          }
          return;
        }

        if (!isReturn) {
          // User came back without completing checkout — drop the pending order, don't log anything.
          localStorage.removeItem("dra_pending_order");
          localStorage.removeItem("dra_pending_course");
          return;
        }

        const session = localStorage.getItem("dra_session");
        const user = session ? JSON.parse(session) : {};
        const courseKey = pendingCourse || "investment-banking";
        const conf = COURSE_DETAILS[courseKey] || COURSE_DETAILS["investment-banking"];
        const failed =
          params.get("status") === "failed" || params.get("result") === "failed";

        // Await the log so the request completes before we navigate away.
        await logPayment({
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
          organization: user.organization || "",
          course: courseKey,
          amount: conf.amount,
          currency: conf.currency,
          orderId: pendingOrder,
          status: failed ? "failed" : "done",
        }).catch(() => {});

        localStorage.removeItem("dra_pending_order");
        localStorage.removeItem("dra_pending_course");

        if (failed) {
          window.history.replaceState({}, document.title, window.location.pathname);
          setStage("course");
          setErrorMsg(friendlyError("payment_failed"));
        } else {
          // Payment succeeded — send the user to the home page.
          window.location.replace("/");
        }
      } catch {
        // ignore
      }
    };

    try {
      const session = localStorage.getItem("dra_session");
      if (session) {
        const parsed = JSON.parse(session);
        if (parsed?.email) {
          setName(parsed.name || "");
          setEmail(parsed.email);
          setPhone(parsed.phone || "");
          setOrganization(parsed.organization || "");
          setStage("course");
        }
      }
    } catch {
      // ignore
    }

    resolvePendingOrder();

    // Handle bfcache restore (browser back from Revolut often restores without re-running effects)
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) resolvePendingOrder();
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputBase =
    "w-full px-4 py-3 text-base bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition";

  const handleSignup = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg("Please provide your name, email, and phone.");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!isValidPhone(phone)) {
      setErrorMsg("Please enter a valid phone number (7–15 digits, optional + prefix).");
      return;
    }
    setErrorMsg(null);
    setInfoMsg(null);
    setSubmitting(true);
    try {
      await signupUser({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        organization: organization.trim() || undefined,
      });
      setInfoMsg("Signed up successfully. Please log in to continue.");
      setStage("login");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "unknown_error";
      setErrorMsg(friendlyError(msg));
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMsg("Please enter the email you signed up with.");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setErrorMsg(null);
    setInfoMsg(null);
    setSubmitting(true);
    try {
      const result = await loginUser(email.trim());
      setName(result.user.name);
      setEmail(result.user.email);
      setPhone(result.user.phone);
      setOrganization(result.user.organization);
      localStorage.setItem("dra_session", JSON.stringify(result.user));
      setStage("course");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "unknown_error";
      setErrorMsg(friendlyError(msg));
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("dra_session");
    setName("");
    setEmail("");
    setPhone("");
    setOrganization("");
    setErrorMsg(null);
    setInfoMsg(null);
    setStage("signup");
  };

  const handlePay = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const checkoutUrl = courseConfig.noCodeLink;
    if (!checkoutUrl) {
      setErrorMsg(friendlyError("payment_not_configured"));
      return;
    }

    setStage("paying");
    const orderId = `ord_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    localStorage.setItem("dra_pending_order", orderId);
    localStorage.setItem("dra_pending_course", selectedCourse);
    window.location.href = checkoutUrl;
  };

  return (
    <div className="pt-20">
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 text-orange-400 text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
              <GraduationCap className="w-4 h-4" />
              Digital Risk Academy
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              {stage === "signup" && "Sign Up"}
              {stage === "login" && "Log In"}
              {(stage === "course" || stage === "paying") && "Choose Your Course"}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300">
              {stage === "signup" &&
                "Create your account in a few seconds."}
              {stage === "login" &&
                "Enter your email to continue to course selection."}
              {(stage === "course" || stage === "paying") &&
                "Pick a programme and pay securely through Revolut."}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-6 md:p-8 min-h-[400px]">
                <AnimatePresence mode="wait">
                  {stage === "signup" && (
                    <motion.div
                      key="signup"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <h2 className="text-xl sm:text-2xl font-bold mb-2">
                        Step 1 — Create Your Account
                      </h2>
                      <p className="text-slate-400 text-sm mb-6">
                        Provide your details to create your Digital Risk Academy account.
                      </p>

                      <form onSubmit={handleSignup} className="space-y-5 sm:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                          <div>
                            <label htmlFor="fullName" className="block text-sm font-medium mb-2">Full Name *</label>
                            <input
                              id="fullName"
                              name="fullName"
                              autoComplete="name"
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className={inputBase}
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                            <input
                              id="email"
                              name="email"
                              autoComplete="email"
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className={inputBase}
                              placeholder="you@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone *</label>
                            <input
                              id="phone"
                              name="phone"
                              autoComplete="tel"
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className={inputBase}
                              placeholder="+91 98765 43210"
                            />
                          </div>
                          <div>
                            <label htmlFor="organization" className="block text-sm font-medium mb-2">
                              Organization / University
                            </label>
                            <input
                              id="organization"
                              name="organization"
                              autoComplete="organization"
                              type="text"
                              value={organization}
                              onChange={(e) => setOrganization(e.target.value)}
                              className={inputBase}
                              placeholder="Your organization"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/50 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Creating account…</span>
                            </>
                          ) : (
                            <>
                              <UserPlus className="w-5 h-5" />
                              <span>Sign Up</span>
                            </>
                          )}
                        </button>

                        <p className="text-sm text-slate-400 text-center">
                          Already have an account?{" "}
                          <button
                            type="button"
                            onClick={() => {
                              setErrorMsg(null);
                              setInfoMsg(null);
                              setStage("login");
                            }}
                            className="text-orange-400 hover:text-orange-300 font-medium"
                          >
                            Log in
                          </button>
                        </p>

                        {errorMsg && (
                          <div
                            role="alert"
                            className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-lg p-4"
                          >
                            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                            <span>{errorMsg}</span>
                          </div>
                        )}
                      </form>
                    </motion.div>
                  )}

                  {stage === "login" && (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <h2 className="text-xl sm:text-2xl font-bold mb-2">
                        Log In
                      </h2>
                      <p className="text-slate-400 text-sm mb-6">
                        Enter the email you signed up with.
                      </p>

                      {infoMsg && (
                        <div
                          role="status"
                          className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 text-green-300 text-sm rounded-lg p-4 mb-6"
                        >
                          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                          <span>{infoMsg}</span>
                        </div>
                      )}

                      <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
                        <div>
                          <label htmlFor="loginEmail" className="block text-sm font-medium mb-2">Email *</label>
                          <input
                            id="loginEmail"
                            name="email"
                            autoComplete="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputBase}
                            placeholder="you@example.com"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/50 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Logging in…</span>
                            </>
                          ) : (
                            <>
                              <LogIn className="w-5 h-5" />
                              <span>Log In</span>
                            </>
                          )}
                        </button>

                        <p className="text-sm text-slate-400 text-center">
                          Don't have an account?{" "}
                          <button
                            type="button"
                            onClick={() => {
                              setErrorMsg(null);
                              setInfoMsg(null);
                              setStage("signup");
                            }}
                            className="text-orange-400 hover:text-orange-300 font-medium"
                          >
                            Sign up
                          </button>
                        </p>

                        {errorMsg && (
                          <div
                            role="alert"
                            className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-lg p-4"
                          >
                            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                            <span>{errorMsg}</span>
                          </div>
                        )}
                      </form>
                    </motion.div>
                  )}

                  {(stage === "course" || stage === "paying") && (
                    <motion.div
                      key="course"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h2 className="text-xl sm:text-2xl font-bold">Step 2 — Choose Course & Pay</h2>
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="text-xs text-slate-400 hover:text-orange-400 flex items-center gap-1 shrink-0 mt-1"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          Log out
                        </button>
                      </div>
                      <p className="text-slate-400 text-sm mb-6">
                        Signed in as <span className="text-white">{email}</span>. Select your programme and proceed to payment.
                      </p>

                      <form onSubmit={handlePay} className="space-y-5 sm:space-y-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="course" className="block text-sm font-medium">Selected Course</label>
                          <div className="relative">
                            <select
                              id="course"
                              value={selectedCourse}
                              onChange={(e) => setSelectedCourse(e.target.value)}
                              className={`${inputBase} appearance-none pr-10 bg-slate-950/40 border-slate-800 focus:border-orange-500`}
                            >
                              {Object.entries(COURSE_DETAILS).map(([key, details]) => (
                                <option key={key} value={key} className="bg-slate-900 text-white">
                                  {details.label} - {details.price}
                                </option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={stage === "paying"}
                          className="w-full min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/50 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          {stage === "paying" ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Opening checkout…</span>
                            </>
                          ) : (
                            <>
                              <CreditCard className="w-5 h-5" />
                              <span>Pay & Enroll</span>
                            </>
                          )}
                        </button>

                        {errorMsg && (
                          <div
                            role="alert"
                            className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-lg p-4"
                          >
                            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                            <span>{errorMsg}</span>
                          </div>
                        )}
                      </form>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              className="space-y-5 sm:space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg sm:text-xl font-bold">What happens next</h3>
                </div>
                <ol className="space-y-3 text-sm text-slate-300 list-decimal list-inside">
                  <li>Sign up with your contact details.</li>
                  <li>Log in with your email.</li>
                  <li>Choose your preferred programme.</li>
                  <li>Pay securely through Revolut.</li>
                  <li>Receive a receipt and course access link.</li>
                </ol>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Need help?</h3>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                  <div className="min-w-0">
                    <div className="font-medium">Email</div>
                    <a
                      href="mailto:info@digitalriskacademy.com"
                      className="text-orange-400 hover:text-orange-300 font-medium"
                    >
                      info@digitalriskacademy.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-orange-500/20 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Limited seats</h3>
                <p className="text-slate-300 text-sm">
                  Cohorts are kept small to protect the practitioner-led format. Register early to secure your place.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/[^\d]/g, "");
  if (digits.length < 7 || digits.length > 15) return false;
  return /^\+?[\d\s\-().]+$/.test(phone.trim());
}

function friendlyError(code: string): string {
  switch (code) {
    case "already_registered":
      return "An account with this email already exists. Please log in instead.";
    case "not_found":
      return "No account found with that email. Please sign up first.";
    case "network_error":
      return "Network error. Check your connection and try again.";
    case "payment_failed":
      return "Payment was not successful. Please try again or use a different payment method.";
    case "payment_not_configured":
      return "Payments aren't configured yet. Please try again shortly or contact support.";
    case "invalid_input":
      return "Please check the details you entered and try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}
