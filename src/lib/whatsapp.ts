export const WHATSAPP_NUMBER = "919014973467";

export type WhatsAppEnquiryData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppEnquiryUrl(data: WhatsAppEnquiryData) {
  const lines = [
    "Hello, I would like to make an enquiry.",
    "",
    "*Enquiry Details*",
    `Full Name: ${data.fullName.trim()}`,
    `Email Address: ${data.email.trim()}`,
    data.phone.trim() ? `Phone Number: ${data.phone.trim()}` : null,
    data.company.trim() ? `Company / Organization: ${data.company.trim()}` : null,
    `Enquiry Type: ${data.subject.trim()}`,
    "",
    "Message:",
    data.message.trim(),
    "",
    "Sent from the company website."
  ].filter((line): line is string => line !== null);

  return buildWhatsAppUrl(lines.join("\n"));
}

export type CareerEnquiryData = {
  role: string;
  name: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
};

export function buildWhatsAppCareerEnquiryUrl(data: CareerEnquiryData) {
  const lines = [
    "Hello, I would like to enquire about a career opportunity.",
    "",
    "Career Enquiry",
    "",
    `Enquiry / Role: ${data.role.trim()}`,
    "",
    `Name: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    data.phone.trim() ? `Phone: ${data.phone.trim()}` : null,
    data.experience.trim() ? `Experience: ${data.experience.trim()}` : null,
    "",
    "Message:",
    data.message.trim(),
    "",
    "Sent from the Careers section of the website."
  ].filter((line): line is string => line !== null);

  return buildWhatsAppUrl(lines.join("\n"));
}
