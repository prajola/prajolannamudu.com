import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { X, Check, AlertCircle, Loader2, Send } from "lucide-react";
import { person } from "@/content";
import { EASE } from "./ui";

/**
 * Contact form in a modal, delivered by email.
 *
 * This is a static site with no backend, so submissions go to a
 * form-to-email service. FormSubmit needs no account and no API key — you POST to an
 * endpoint containing the destination address and it emails that address.
 * Its /ajax/ route returns JSON and sends CORS headers, which a plain
 * /formsubmit.co/ POST does not, so fetch() from the browser works.
 *
 * The address is already published on this page as a mailto link, so
 * putting it in the endpoint exposes nothing new.
 *
 * `VITE_FORM_ENDPOINT` overrides this if you later move to Formspree,
 * Web3Forms or your own handler.
 */
const DEFAULT_ENDPOINT = `https://formsubmit.co/ajax/${person.email}`;
const ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) || DEFAULT_ENDPOINT;
const ACCESS_KEY = import.meta.env.VITE_FORM_ACCESS_KEY as string | undefined;

const MAX = 1000;

interface Fields {
  name: string;
  email: string;
  message: string;
}
type Errors = Partial<Record<keyof Fields, string>>;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Tell me your name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Enter a valid email address";
  const m = f.message.trim();
  if (m.length < 10) e.message = "A sentence or two, please";
  else if (m.length > MAX) e.message = `Keep it under ${MAX} characters`;
  return e;
}

export default function ContactForm({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [f, setF] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "mailto" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  /** Bots fill hidden fields; humans do not. */
  const [honey, setHoney] = useState("");

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const returnFocusRef = useRef<Element | null>(null);

  const close = useCallback(() => {
    onClose();
    // Hand focus back to whatever opened the dialog.
    (returnFocusRef.current as HTMLElement | null)?.focus?.();
  }, [onClose]);

  /* Escape to dismiss, scroll lock, focus in and back out again. */
  useEffect(() => {
    if (!open) return;
    returnFocusRef.current = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstFieldRef.current?.focus(), 80);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      // Keep Tab inside the dialog while it is open.
      const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!nodes || nodes.length === 0) return;
      const list = Array.from(nodes).filter((n) => n.offsetParent !== null);
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open, close]);

  function set<K extends keyof Fields>(k: K) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setF((v) => ({ ...v, [k]: e.target.value }));
      setErrors((p) => (p[k] ? { ...p, [k]: undefined } : p));
    };
  }

  function openMailto() {
    const subject = `Website enquiry from ${f.name.trim()}`;
    const body = `${f.message.trim()}\n\n—\n${f.name.trim()}\n${f.email.trim()}`;
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setState("mailto");
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honey) return; // bot
    const next = validate(f);
    if (Object.keys(next).length) {
      setErrors(next);
      const firstKey = Object.keys(next)[0];
      document.getElementById(`cf-${firstKey}`)?.focus();
      return;
    }
    setErrors({});

    setState("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...(ACCESS_KEY ? { access_key: ACCESS_KEY } : {}),
          name: f.name.trim(),
          email: f.email.trim(),
          message: f.message.trim(),
          // FormSubmit reads these to set the subject, format the mail as a
          // table, skip its captcha page, and make Reply-To the sender so a
          // reply goes to them rather than back to the form.
          _subject: `prajolannamudu.com - message from ${f.name.trim()}`,
          _template: "table",
          _captcha: "false",
          _replyto: f.email.trim(),
        }),
      });
      // FormSubmit answers 200 even when it refuses the message (an
      // unactivated form, a blocked address), reporting the real outcome
      // in the body. Checking res.ok alone would show the visitor a
      // "thank you" for a message that was never delivered.
      const data = (await res.json().catch(() => ({}))) as {
        success?: string | boolean;
        message?: string;
      };
      const ok = res.ok && (data.success === undefined || String(data.success) === "true");
      if (!ok) {
        throw new Error(
          data.message || `The form service returned ${res.status}.`,
        );
      }
      setState("sent");
    } catch (err) {
      setErrMsg(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  const remaining = f.message.length;
  const inputBase =
    "mt-2 w-full rounded-[10px] border bg-white px-3.5 py-3 text-[16px] outline-none transition-colors focus:border-black disabled:opacity-60 sm:text-[15px]";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            onClick={close}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cf-title"
            className="relative max-h-[92vh] w-full overflow-y-auto rounded-t-[18px] p-6 sm:max-w-[520px] sm:rounded-[18px] sm:p-8"
            style={{ background: "var(--pa-bg)" }}
            initial={{ y: 28, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2
                  id="cf-title"
                  className="pa-display text-[24px] font-semibold tracking-[-0.02em]"
                  style={{ color: "var(--pa-text)" }}
                >
                  {state === "sent" || state === "mailto" ? "Thank you" : "Send a message"}
                </h2>
                {state === "idle" && (
                  <p className="mt-1.5 text-[14px]" style={{ color: "var(--pa-muted)" }}>
                    It goes straight to {person.email}.
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="-mr-1 -mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors hover:border-black"
                style={{ borderColor: "var(--pa-line-2)", color: "var(--pa-text)" }}
              >
                <X size={16} />
              </button>
            </div>

            {state === "sent" || state === "mailto" ? (
              <div className="mt-8">
                <div
                  className="grid h-12 w-12 place-items-center rounded-full"
                  style={{ background: "var(--pa-text)", color: "#fff" }}
                >
                  <Check size={22} />
                </div>
                <p className="mt-5 text-[15.5px] leading-relaxed" style={{ color: "var(--pa-muted)" }}>
                  {state === "sent"
                    ? "Your message is on its way. I read every one and will reply as soon as I can."
                    : `Your mail app should be opening with the message ready to send to ${person.email}. If it didn't, email me directly.`}
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-7 w-full rounded-full px-6 py-3.5 text-[14px] font-medium transition-opacity hover:opacity-88"
                  style={{ background: "var(--pa-text)", color: "#fff" }}
                >
                  Done
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="mt-7">
                {/* Honeypot — hidden from people, irresistible to bots. */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                  style={{
                    position: "absolute",
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clipPath: "inset(50%)",
                    whiteSpace: "nowrap",
                    border: 0,
                  }}
                />

                <label htmlFor="cf-name" className="block">
                  <span className="pa-mono text-[10.5px] uppercase tracking-[0.18em]" style={{ color: "var(--pa-dim)" }}>
                    Name
                  </span>
                  <input
                    id="cf-name"
                    ref={firstFieldRef}
                    value={f.name}
                    onChange={set("name")}
                    disabled={state === "sending"}
                    placeholder="Your name"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "cf-name-err" : undefined}
                    className={inputBase}
                    style={{ borderColor: errors.name ? "#b3261e" : "var(--pa-line-2)", color: "var(--pa-text)" }}
                  />
                </label>
                {errors.name && (
                  <p id="cf-name-err" className="mt-1.5 text-[12.5px]" style={{ color: "#b3261e" }}>
                    {errors.name}
                  </p>
                )}

                <label htmlFor="cf-email" className="mt-5 block">
                  <span className="pa-mono text-[10.5px] uppercase tracking-[0.18em]" style={{ color: "var(--pa-dim)" }}>
                    Email
                  </span>
                  <input
                    id="cf-email"
                    type="email"
                    value={f.email}
                    onChange={set("email")}
                    disabled={state === "sending"}
                    placeholder="your@email.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "cf-email-err" : undefined}
                    className={inputBase}
                    style={{ borderColor: errors.email ? "#b3261e" : "var(--pa-line-2)", color: "var(--pa-text)" }}
                  />
                </label>
                {errors.email && (
                  <p id="cf-email-err" className="mt-1.5 text-[12.5px]" style={{ color: "#b3261e" }}>
                    {errors.email}
                  </p>
                )}

                <label htmlFor="cf-message" className="mt-5 block">
                  <span className="pa-mono text-[10.5px] uppercase tracking-[0.18em]" style={{ color: "var(--pa-dim)" }}>
                    Message
                  </span>
                  <textarea
                    id="cf-message"
                    rows={5}
                    maxLength={MAX}
                    value={f.message}
                    onChange={set("message")}
                    disabled={state === "sending"}
                    placeholder="What would you like to discuss?"
                    aria-invalid={!!errors.message}
                    aria-describedby="cf-count"
                    className={`${inputBase} resize-y`}
                    style={{ borderColor: errors.message ? "#b3261e" : "var(--pa-line-2)", color: "var(--pa-text)" }}
                  />
                </label>
                <div className="mt-1.5 flex items-start justify-between gap-4">
                  <p className="text-[12.5px]" style={{ color: "#b3261e" }}>
                    {errors.message}
                  </p>
                  <span
                    id="cf-count"
                    className="pa-mono shrink-0 text-[11px]"
                    style={{ color: remaining > MAX * 0.9 ? "#b3261e" : "var(--pa-dim)" }}
                  >
                    {remaining}/{MAX}
                  </span>
                </div>

                {state === "error" && (
                  <div
                    role="alert"
                    className="mt-4 flex items-start gap-2 rounded-[10px] border p-3 text-[13px]"
                    style={{ borderColor: "#b3261e", color: "#b3261e" }}
                  >
                    <AlertCircle size={15} className="mt-0.5 shrink-0" />
                    <span>
                      {errMsg}{" "}
                      <button type="button" onClick={openMailto} className="underline" style={{ color: "var(--pa-text)" }}>
                        Send it by email instead
                      </button>
                      .
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-[14px] font-medium transition-opacity hover:opacity-88 disabled:opacity-60"
                  style={{ background: "var(--pa-text)", color: "#fff" }}
                >
                  {state === "sending" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} /> Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
