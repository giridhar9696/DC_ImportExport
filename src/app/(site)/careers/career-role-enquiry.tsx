"use client";

import { ArrowRight, Send, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { buildWhatsAppCareerEnquiryUrl } from "@/lib/whatsapp";

type Opportunity = {
  title: string;
  description: string;
  bullets: string[];
};

type CareerForm = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
};

const initialForm: CareerForm = { name: "", email: "", phone: "", experience: "", message: "" };

export function CareerRoleEnquiry({ opportunities }: { opportunities: Opportunity[] }) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [form, setForm] = useState<CareerForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof CareerForm, string>>>({});
  const [prepared, setPrepared] = useState(false);
  const openingRef = useRef(false);

  useEffect(() => {
    if (!selectedRole) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedRole(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedRole]);

  function openRoleEnquiry(role: string) {
    setSelectedRole(role);
    setForm(initialForm);
    setErrors({});
    setPrepared(false);
    openingRef.current = false;
  }

  function updateField(field: keyof CareerForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setPrepared(false);
    openingRef.current = false;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedRole) return;

    const nextErrors: Partial<Record<keyof CareerForm, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) nextErrors.email = "Email address is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || openingRef.current) return;

    openingRef.current = true;
    const whatsappWindow = window.open(
      buildWhatsAppCareerEnquiryUrl({ role: selectedRole, ...form }),
      "_blank",
      "noopener,noreferrer"
    );
    if (!whatsappWindow) {
      window.location.assign(buildWhatsAppCareerEnquiryUrl({ role: selectedRole, ...form }));
      return;
    }
    setPrepared(true);
  }

  const inputBase = "mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-brand-body outline-none transition placeholder:text-slate-400 focus:border-brand-teal focus:ring-4 focus:ring-teal-100";
  const errorBase = "border-red-400 focus:border-red-500 focus:ring-red-100";

  return (
    <>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {opportunities.map((role) => (
          <article key={role.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-200">
            <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-teal">Demo Opportunity</span>
            <h3 className="mt-5 font-display text-2xl font-bold text-brand-navy">{role.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{role.description}</p>
            <div className="mt-5"><p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-navy">Example responsibilities</p><ul className="mt-3 space-y-2">{role.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" /><span>{bullet}</span></li>)}</ul></div>
            <button type="button" onClick={() => openRoleEnquiry(role.title)} className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:text-brand-teal">Enquire About This Role<ArrowRight aria-hidden="true" className="h-4 w-4" /></button>
          </article>
        ))}
      </div>

      {selectedRole ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-navy/20 p-4 backdrop-blur-[1px]" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedRole(null); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="career-enquiry-title" className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-slate-200 bg-brand-background p-6 shadow-[0_25px_80px_rgba(11,31,58,0.22)] sm:p-8">
            <div className="flex items-start justify-between gap-6"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">Career Enquiry</p><h2 id="career-enquiry-title" className="mt-3 font-display text-3xl font-extrabold text-brand-navy">Enquire About This Role</h2><p className="mt-3 text-sm leading-6 text-slate-600">Prepare a role-specific enquiry in WhatsApp. This form does not upload a resume or send data to a backend.</p></div><button type="button" aria-label="Close career enquiry" onClick={() => setSelectedRole(null)} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy transition hover:border-brand-teal hover:text-brand-teal"><X aria-hidden="true" className="h-5 w-5" /></button></div>
            <div className="mt-6 rounded-md border border-brand-teal/30 bg-white px-4 py-3"><p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-teal">Enquiry / Role</p><p className="mt-1 font-display text-lg font-bold text-brand-navy">{selectedRole}</p></div>
            {prepared ? <div role="status" className="mt-5 rounded-md border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-semibold text-brand-navy">Your enquiry has been prepared in WhatsApp. Review the message there and send it to complete your enquiry.</div> : null}
            <form className="mt-6 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
              {([['name','Name','text'],['email','Email','email'],['phone','Phone','tel'],['experience','Experience','text']] as const).map(([field,label,type]) => <label key={field} htmlFor={`career-${field}`} className="block text-sm font-semibold text-brand-navy">{label}{(field === 'name' || field === 'email') ? <span className="text-brand-teal"> *</span> : null}<input id={`career-${field}`} type={type} value={form[field]} onChange={(event) => updateField(field,event.target.value)} className={`${inputBase} ${errors[field] ? errorBase : ""}`} aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `career-${field}-error` : undefined} autoComplete={field === 'name' ? 'name' : field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'off'} />{errors[field] ? <span id={`career-${field}-error`} className="mt-2 block text-xs font-semibold text-red-600">{errors[field]}</span> : null}</label>)}
              <label htmlFor="career-message" className="block text-sm font-semibold text-brand-navy sm:col-span-2">Message <span className="text-brand-teal">*</span><textarea id="career-message" value={form.message} onChange={(event) => updateField("message", event.target.value)} className={`${inputBase} min-h-32 resize-y ${errors.message ? errorBase : ""}`} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "career-message-error" : undefined} />{errors.message ? <span id="career-message-error" className="mt-2 block text-xs font-semibold text-red-600">{errors.message}</span> : null}</label>
              <label htmlFor="career-role" className="block text-sm font-semibold text-brand-navy sm:col-span-2">Enquiry <span className="text-brand-teal">*</span><input id="career-role" value={selectedRole} readOnly aria-readonly="true" className={`${inputBase} cursor-not-allowed bg-slate-100`} /></label>
              <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-teal px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-100 sm:col-span-2">Prepare WhatsApp Enquiry<Send aria-hidden="true" className="h-4 w-4" /></button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
