import { useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiAlertCircle, FiCheck, FiSend } from "react-icons/fi";
import { SectionTitle } from "./SectionTitle";
import { useInView } from "../hooks/useInView";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full rounded-xl border border-line bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 transition-colors focus:border-primary focus:outline-none";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  const formRef = useRef<HTMLFormElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    // The template's {{time}} variable isn't auto-filled by EmailJS —
    // stamp it right before sending.
    if (timeRef.current) {
      timeRef.current.value = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-28 md:px-10">
      <SectionTitle title="Contact" align="center" />

      <div ref={ref} className="relative">
        <AnimatePresence mode="wait">
          {status === "sent" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-card px-8 py-16 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <FiCheck size={20} />
              </span>
              <p className="font-display text-xl text-ink">Message sent</p>
              <p className="max-w-xs text-sm text-ink-soft">
                Thanks for reaching out — I'll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm text-primary underline-offset-4 hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              ref={formRef}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              {/* Filled in JS right before sending — matches {{time}} in the template */}
              <input type="hidden" name="time" ref={timeRef} />

              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-ink-soft">
                  Name
                </label>
                <input id="name" name="name" type="text" required placeholder="Your name" className={inputClasses} />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-ink-soft">
                  Email
                </label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClasses} />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-ink-soft">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What would you like to talk about?"
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-500">
                  <FiAlertCircle size={15} />
                  Something went wrong — please try again, or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-8px_var(--color-primary)] transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend size={15} /> Send message
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}