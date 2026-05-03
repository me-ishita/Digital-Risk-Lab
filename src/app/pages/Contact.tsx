import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "advisory",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setFormData({
      name: "",
      email: "",
      organization: "",
      interest: "advisory",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "success" || status === "error") setStatus("idle");
  };

  const inputBase = "w-full px-4 py-3 text-base bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

  return (
    <div className="pt-20">
      <section className="relative py-16 sm:py-20 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-foreground">Get in Touch</h1>
            <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
              Ready to strengthen your digital risk capability? Let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 md:p-8 shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-foreground">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputBase}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputBase}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-2">Organization</label>
                    <input
                      id="organization"
                      type="text"
                      name="organization"
                      autoComplete="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className={inputBase}
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">I'm interested in *</label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className={inputBase}
                    >
                      <option value="advisory">Advisory Services</option>
                      <option value="academy">Academy Programmes</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="speaking">Speaking Engagements</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`${inputBase} resize-none`}
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        role="status"
                        className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 text-green-300 text-sm rounded-lg p-4"
                      >
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                        <span>Thanks — we've received your message and will reply within 24 hours on business days.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>

            <motion.div
              className="space-y-5 sm:space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div className="min-w-0">
                      <div className="font-medium">Email</div>
                      <a href="mailto:contact@digitalrisklabs.com" className="text-primary hover:opacity-80 text-sm break-all font-medium">
                        contact@digitalrisklabs.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a href="tel:+1234567890" className="text-primary hover:opacity-80 text-sm font-medium">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <div className="font-medium">Location</div>
                      <p className="text-primary text-sm font-medium">
                        Global operations with advisory teams worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary font-medium">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary font-medium">Saturday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary font-medium">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">Quick Response</h3>
                <p className="text-primary text-sm font-medium">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground">Prefer to Schedule a Call?</h2>
            <p className="text-xl font-semibold text-primary uppercase tracking-widest mb-6 sm:mb-8">
              Book a consultation directly with our advisory team.
            </p>
            <a
              href="mailto:contact@digitalrisklabs.com?subject=Consultation%20Request"
              className="inline-flex items-center gap-2 min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 active:scale-[0.99] transition-all shadow-md"
            >
              <Mail className="w-5 h-5" />
              <span>Schedule a Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
