"use client";

import { FormEvent, useRef, useState } from "react";
import { Send } from "lucide-react";
import { buildWhatsAppEnquiryUrl } from "@/lib/whatsapp";

export type FormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: ""
};

const enquiryTypes = [
  "Import Enquiry",
  "Export Enquiry",
  "Logistics",
  "Sourcing",
  "Documentation",
  "General Enquiry"
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [prepared, setPrepared] = useState(false);
  const openingRef = useRef(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setPrepared(false);
    openingRef.current = false;
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.subject) {
      nextErrors.subject = "Select an enquiry type.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      if (openingRef.current) return;
      openingRef.current = true;
      const whatsappUrl = buildWhatsAppEnquiryUrl(form);
      const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      if (!whatsappWindow) {
        window.location.assign(whatsappUrl);
        return;
      }

      setPrepared(true);
    }
  }

  const inputBase =
    "mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-brand-body outline-none transition placeholder:text-slate-400 focus:border-brand-teal focus:ring-4 focus:ring-teal-100";
  const errorBase = "border-red-400 focus:border-red-500 focus:ring-red-100";

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft sm:p-8"
    >
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
          Enquiry Form
        </p>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-brand-navy">
          Send a demo enquiry.
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Complete the fields below to prepare this enquiry in WhatsApp. The
          website does not send data to email, CRM, database, API, or any backend.
        </p>
      </div>

      {prepared ? (
        <div
          role="status"
          className="mt-6 rounded-md border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-semibold text-brand-navy"
        >
          Your enquiry has been prepared in WhatsApp. Review it there before sending.
        </div>
      ) : null}

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label htmlFor="fullName" className="block text-sm font-semibold text-brand-navy">
          Full Name <span className="text-brand-teal">*</span>
          <input
            id="fullName"
            name="fullName"
            required
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className={`${inputBase} ${errors.fullName ? errorBase : ""}`}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            autoComplete="name"
          />
          {errors.fullName ? (
            <span id="fullName-error" className="mt-2 block text-xs font-semibold text-red-600">
              {errors.fullName}
            </span>
          ) : null}
        </label>

        <label htmlFor="email" className="block text-sm font-semibold text-brand-navy">
          Email Address <span className="text-brand-teal">*</span>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={`${inputBase} ${errors.email ? errorBase : ""}`}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
          />
          {errors.email ? (
            <span id="email-error" className="mt-2 block text-xs font-semibold text-red-600">
              {errors.email}
            </span>
          ) : null}
        </label>

        <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy">
          Phone Number
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputBase}
            autoComplete="tel"
          />
        </label>

        <label htmlFor="company" className="block text-sm font-semibold text-brand-navy">
          Company / Organization
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className={inputBase}
            autoComplete="organization"
          />
        </label>

        <label htmlFor="subject" className="block text-sm font-semibold text-brand-navy md:col-span-2">
          Subject / Enquiry Type <span className="text-brand-teal">*</span>
          <select
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            className={`${inputBase} ${errors.subject ? errorBase : ""}`}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          >
            <option value="">Select an enquiry type</option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.subject ? (
            <span id="subject-error" className="mt-2 block text-xs font-semibold text-red-600">
              {errors.subject}
            </span>
          ) : null}
        </label>

        <label htmlFor="message" className="block text-sm font-semibold text-brand-navy md:col-span-2">
          Message <span className="text-brand-teal">*</span>
          <textarea
            id="message"
            name="message"
            required
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={`${inputBase} min-h-36 resize-y ${errors.message ? errorBase : ""}`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <span id="message-error" className="mt-2 block text-xs font-semibold text-red-600">
              {errors.message}
            </span>
          ) : null}
        </label>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-teal px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-100"
      >
        Submit Demo Enquiry
        <Send aria-hidden="true" className="h-4 w-4" />
      </button>
    </form>
  );
}
