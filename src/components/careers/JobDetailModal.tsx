"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type DragEvent,
  type FormEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Paperclip,
  Phone,
  Send,
  Trash2,
  Upload,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { JobDetail } from "@/lib/insights/types";

// ---------------------------------------------------------------------------
// Shared input style — mirrors ContactPageView exactly
// ---------------------------------------------------------------------------
const inputCls = cn(
  "min-h-12 w-full rounded-xl border bg-ink/70 px-4 py-3 text-sm text-white outline-none transition-[border-color,box-shadow,background-color] duration-200",
  "placeholder:text-white/25",
  "border-white/10 hover:border-white/20",
  "focus:border-cyan/45 focus:bg-ink focus:shadow-[0_0_0_3px_rgba(0,190,212,0.12)]",
);

// ---------------------------------------------------------------------------
// Math captcha
// ---------------------------------------------------------------------------
function randomCaptcha() {
  return {
    a: Math.floor(Math.random() * 8) + 1,
    b: Math.floor(Math.random() * 8) + 1,
  };
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------
type Props = {
  jobId: number | string;
  jobTitle: string;
};

// ---------------------------------------------------------------------------
// Fetch state for job detail
// ---------------------------------------------------------------------------
type FetchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error" }
  | { status: "ok"; detail: JobDetail };

// ---------------------------------------------------------------------------
// Apply form state
// ---------------------------------------------------------------------------
type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "resume" | "captcha", string>>;

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.oasis.opendocument.text",
];
const ACCEPTED_EXTS = ".pdf,.doc,.docx,.odf,.odt";
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // strip data-url prefix — Resend wants raw base64
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function JobDetailModal({ jobId, jobTitle }: Props) {
  const [open, setOpen] = useState(false);
  const [fetchState, setFetchState] = useState<FetchState>({ status: "idle" });

  // Apply form
  const [formState, setFormState] = useState<FormState>({ status: "idle" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [captcha, setCaptcha] = useState<{ a: number; b: number } | null>(
    () => randomCaptcha(),
  );
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const captchaExpected = useMemo(
    () => (captcha ? captcha.a + captcha.b : 0),
    [captcha],
  );

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const captchaRef = useRef<HTMLInputElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const titleId = useId();

  // ── Open: start detail fetch; Close: reset all state + refresh captcha ───
  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFetchState({ status: "loading" });

      fetch(`/api/career-detail?id=${encodeURIComponent(String(jobId))}`)
        .then((res) => {
          if (!res.ok) throw new Error("API error");
          return res.json() as Promise<{ detail: JobDetail | null }>;
        })
        .then((data) => {
          setFetchState(
            data.detail
              ? { status: "ok", detail: data.detail }
              : { status: "error" },
          );
        })
        .catch(() => setFetchState({ status: "error" }));
    } else {
      setFormState({ status: "idle" });
      setFieldErrors({});
      setCaptchaAnswer("");
      setResumeFile(null);
      setFetchState({ status: "idle" });
      // Refresh captcha so it is ready for the next open
      setCaptcha(randomCaptcha());
    }
  }, [open, jobId]);

  // ── Body scroll lock + focus trap + Escape ───────────────────────────────
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
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
      document.body.style.overflow = "";
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
      previouslyFocused.current?.focus?.();
    };
  }, [open]);

  // ── File validation ───────────────────────────────────────────────────────
  const validateAndSetFile = useCallback(
    (file: File | undefined | null) => {
      if (!file) return;
      if (!ACCEPTED_TYPES.includes(file.type) && !file.name.match(/\.(pdf|doc|docx|odf|odt)$/i)) {
        setFieldErrors((prev) => ({
          ...prev,
          resume: "Only PDF, DOC, DOCX, or ODF files are accepted.",
        }));
        return;
      }
      if (file.size > MAX_BYTES) {
        setFieldErrors((prev) => ({
          ...prev,
          resume: "File must be 5 MB or smaller.",
        }));
        return;
      }
      setResumeFile(file);
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next.resume;
        return next;
      });
    },
    [],
  );

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };
  const onDragLeave = () => setIsDragOver(false);
  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    validateAndSetFile(e.dataTransfer.files[0]);
  };

  // ── Form submit ───────────────────────────────────────────────────────────
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    const errors: FieldErrors = {};
    if (!name) errors.name = "Enter your name.";
    if (!email) errors.email = "Enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Enter a valid email.";
    if (!phone) errors.phone = "Enter your contact number.";
    if (!captchaExpected || Number(captchaAnswer) !== captchaExpected)
      errors.captcha = "Enter the correct answer.";

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      if (errors.name) nameRef.current?.focus();
      else if (errors.email) emailRef.current?.focus();
      else if (errors.phone) phoneRef.current?.focus();
      else if (errors.captcha) captchaRef.current?.focus();
      return;
    }

    setFormState({ status: "submitting" });

    try {
      let resumeBase64: string | undefined;
      let resumeName: string | undefined;

      if (resumeFile) {
        resumeBase64 = await readFileAsBase64(resumeFile);
        resumeName = resumeFile.name;
      }

      const res = await fetch("/api/career-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobId: String(jobId),
          jobTitle,
          name,
          email,
          phone,
          website,
          resumeBase64,
          resumeName,
        }),
      });
      const result = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !result.ok) {
        setFormState({
          status: "error",
          message:
            result.error ??
            "Unable to submit right now. Please email careers@inheritx.com.",
        });
        return;
      }

      setFormState({ status: "success" });
    } catch {
      setFormState({
        status: "error",
        message:
          "Unable to submit right now. Please email careers@inheritx.com.",
      });
    }
  };

  const clearErr = (f: keyof FieldErrors) =>
    setFieldErrors((prev) => {
      if (!prev[f]) return prev;
      const next = { ...prev };
      delete next[f];
      return next;
    });

  const detail =
    fetchState.status === "ok" ? fetchState.detail : null;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-auto inline-flex items-center justify-center rounded-full border border-cyan/40 bg-cyan/10 px-4 py-2 text-xs font-medium text-cyan transition-colors hover:bg-cyan/20 focus-visible:outline-2 focus-visible:outline-cyan"
      >
        Apply Now
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-90 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex w-full max-w-5xl flex-col rounded-3xl border border-white/10 bg-ink shadow-2xl"
              style={{ maxHeight: "calc(100dvh - 3rem)" }}
            >
              {/* ── Header — fixed, never scrolls ── */}
              <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/8 px-6 py-5 md:px-8 md:py-6">
                <div className="min-w-0">
                  <h2
                    id={titleId}
                    className="font-display text-xl text-white md:text-2xl"
                  >
                    {detail?.title ?? jobTitle}
                  </h2>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/50">
                    {detail?.experience && (
                      <span>
                        <span className="text-white/30">Experience: </span>
                        {detail.experience}
                      </span>
                    )}
                    {detail?.location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={11} className="shrink-0" />
                        {detail.location}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-cyan/40 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              {/* ── Body — scrollable ── */}
              <div className="scrollbar-none min-h-0 flex-1 overflow-y-auto px-6 py-6 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:px-8 md:py-8">

                {/* Loading skeleton */}
                {fetchState.status === "loading" && (
                  <div className="space-y-3 py-4">
                    {[100, 85, 90, 75, 80].map((w, i) => (
                      <div
                        key={i}
                        className="h-3 animate-pulse rounded-full bg-white/10"
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                )}

                {/* Fetch error */}
                {fetchState.status === "error" && (
                  <p className="py-4 text-sm text-white/50">
                    Unable to load job details. Please try again later.
                  </p>
                )}

                {/* Main content */}
                {fetchState.status === "ok" && detail && (
                  <div className="grid gap-8 md:grid-cols-[1fr_340px]">

                    {/* ── Left: roles + requirements ── */}
                    <div className="space-y-7">
                      {detail.roles.length > 0 && (
                        <section>
                          <h3 className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-cyan uppercase">
                            Roles and Responsibilities
                          </h3>
                          <ul className="space-y-2">
                            {detail.roles.map((role, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan/60" />
                                <span className="text-sm leading-relaxed text-white/70">
                                  {role}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}

                      {detail.requirements.length > 0 && (
                        <section>
                          <h3 className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-cyan uppercase">
                            Requirements
                          </h3>
                          <ul className="space-y-2">
                            {detail.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan/60" />
                                <span className="text-sm leading-relaxed text-white/70">
                                  {req}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}
                    </div>

                    {/* ── Right: apply form ── */}
                    <div className="md:sticky md:top-6 md:self-start">
                      <div className="rounded-2xl border border-white/10 bg-ink-soft p-5 md:p-6">

                        {formState.status === "success" ? (
                          /* ── Success state ── */
                          <div className="flex flex-col items-center gap-4 py-4 text-center">
                            <div className="flex size-12 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10">
                              <CheckCircle2 size={22} className="text-cyan" />
                            </div>
                            <div>
                              <p className="font-display text-lg text-white">
                                Application sent!
                              </p>
                              <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                                Our HR team will review your application and
                                get back to you soon.
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setFormState({ status: "idle" });
                                setFieldErrors({});
                                setCaptchaAnswer("");
                                setResumeFile(null);
                                setCaptcha(randomCaptcha());
                              }}
                              className="text-xs text-cyan underline-offset-2 hover:underline"
                            >
                              Submit another application
                            </button>
                          </div>
                        ) : (
                          /* ── Application form ── */
                          <>
                            <p className="font-display text-lg text-white">
                              Apply for {detail.title}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-white/45">
                              Fill in your details and our HR team will be
                              in touch.
                            </p>

                            <form
                              onSubmit={onSubmit}
                              className="mt-5 space-y-4"
                              noValidate
                            >
                              {/* Honeypot */}
                              <input
                                type="text"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                className="hidden"
                              />

                              {/* Name */}
                              <div>
                                <div className="relative">
                                  <input
                                    ref={nameRef}
                                    name="name"
                                    autoComplete="name"
                                    placeholder="Name"
                                    aria-label="Name"
                                    aria-invalid={Boolean(fieldErrors.name)}
                                    onChange={() => clearErr("name")}
                                    className={cn(
                                      inputCls,
                                      "pr-10",
                                      fieldErrors.name && "border-red-400/60",
                                    )}
                                  />
                                  <span className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center">
                                    <User size={16} strokeWidth={1.75} className="text-white/30" />
                                  </span>
                                </div>
                                {fieldErrors.name && (
                                  <p className="mt-1 text-xs text-red-300" role="alert">
                                    {fieldErrors.name}
                                  </p>
                                )}
                              </div>

                              {/* Email */}
                              <div>
                                <div className="relative">
                                  <input
                                    ref={emailRef}
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Email Address"
                                    aria-label="Email Address"
                                    aria-invalid={Boolean(fieldErrors.email)}
                                    onChange={() => clearErr("email")}
                                    className={cn(
                                      inputCls,
                                      "pr-10",
                                      fieldErrors.email && "border-red-400/60",
                                    )}
                                  />
                                  <span className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center">
                                    <Mail size={16} strokeWidth={1.75} className="text-white/30" />
                                  </span>
                                </div>
                                {fieldErrors.email && (
                                  <p className="mt-1 text-xs text-red-300" role="alert">
                                    {fieldErrors.email}
                                  </p>
                                )}
                              </div>

                              {/* Phone */}
                              <div>
                                <div className="relative">
                                  <input
                                    ref={phoneRef}
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="Contact No"
                                    aria-label="Contact No"
                                    aria-invalid={Boolean(fieldErrors.phone)}
                                    onChange={() => clearErr("phone")}
                                    className={cn(
                                      inputCls,
                                      "pr-10",
                                      fieldErrors.phone && "border-red-400/60",
                                    )}
                                  />
                                  <span className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center">
                                    <Phone size={16} strokeWidth={1.75} className="text-white/30" />
                                  </span>
                                </div>
                                {fieldErrors.phone && (
                                  <p className="mt-1 text-xs text-red-300" role="alert">
                                    {fieldErrors.phone}
                                  </p>
                                )}
                              </div>

                              {/* Resume upload */}
                              <div>
                                <div
                                  onDragOver={onDragOver}
                                  onDragLeave={onDragLeave}
                                  onDrop={onDrop}
                                  onClick={() => !resumeFile && fileInputRef.current?.click()}
                                  className={cn(
                                    "relative rounded-xl border border-dashed px-4 py-4 transition-colors",
                                    resumeFile
                                      ? "cursor-default border-cyan/40 bg-cyan/5"
                                      : "cursor-pointer border-white/15 bg-ink/70 hover:border-white/30",
                                    isDragOver && "border-cyan/60 bg-cyan/10",
                                    fieldErrors.resume && "border-red-400/60",
                                  )}
                                >
                                  <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept={ACCEPTED_EXTS}
                                    className="sr-only"
                                    onChange={(e) => validateAndSetFile(e.target.files?.[0])}
                                  />

                                  {resumeFile ? (
                                    <div className="flex items-center justify-between gap-3">
                                      <div className="flex min-w-0 items-center gap-2.5">
                                        <Paperclip size={15} className="shrink-0 text-cyan" />
                                        <span className="truncate text-sm text-white/80">
                                          {resumeFile.name}
                                        </span>
                                        <span className="shrink-0 text-xs text-white/35">
                                          {(resumeFile.size / 1024).toFixed(0)} KB
                                        </span>
                                      </div>
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setResumeFile(null);
                                          if (fileInputRef.current) fileInputRef.current.value = "";
                                        }}
                                        className="shrink-0 text-white/30 transition-colors hover:text-red-400"
                                        aria-label="Remove file"
                                      >
                                        <Trash2 size={14} />
                                      </button>
                                    </div>
                                  ) : (
                                    <div className="flex flex-col items-center gap-2 text-center">
                                      <Upload size={20} className="text-white/30" />
                                      <p className="text-sm text-white/50">
                                        Drag & drop your resume here, or{" "}
                                        <span className="text-cyan">click to Upload</span>
                                      </p>
                                      <p className="text-[11px] text-white/30">
                                        PDF, DOC, DOCX, ODF. Max 5 MB.
                                      </p>
                                    </div>
                                  )}
                                </div>
                                {fieldErrors.resume && (
                                  <p className="mt-1 text-xs text-red-300" role="alert">
                                    {fieldErrors.resume}
                                  </p>
                                )}
                              </div>

                              {/* Captcha */}
                              <div>
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-ink font-mono text-sm text-white">
                                    {captcha?.a ?? "·"}
                                  </span>
                                  <span className="text-white/35">+</span>
                                  <span className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-ink font-mono text-sm text-white">
                                    {captcha?.b ?? "·"}
                                  </span>
                                  <span className="text-white/35">=</span>
                                  <input
                                    ref={captchaRef}
                                    inputMode="numeric"
                                    value={captchaAnswer}
                                    onChange={(e) => {
                                      setCaptchaAnswer(e.target.value);
                                      clearErr("captcha");
                                    }}
                                    aria-label="Captcha answer"
                                    aria-invalid={Boolean(fieldErrors.captcha)}
                                    className={cn(
                                      inputCls,
                                      "max-w-20 min-h-10 text-center font-mono",
                                      fieldErrors.captcha && "border-red-400/60",
                                    )}
                                    placeholder="?"
                                  />
                                </div>
                                {fieldErrors.captcha && (
                                  <p className="mt-1 text-xs text-red-300" role="alert">
                                    {fieldErrors.captcha}
                                  </p>
                                )}
                              </div>

                              {/* API error banner */}
                              {formState.status === "error" && (
                                <p
                                  className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-xs text-red-200"
                                  role="alert"
                                >
                                  {formState.message}
                                </p>
                              )}

                              {/* Submit */}
                              <button
                                type="submit"
                                disabled={formState.status === "submitting"}
                                className="cta-primary group flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,190,212,0.2)] transition-opacity disabled:opacity-60"
                              >
                                {formState.status === "submitting" ? (
                                  "Submitting…"
                                ) : (
                                  <>
                                    Submit
                                    <Send
                                      size={14}
                                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                  </>
                                )}
                              </button>
                            </form>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
