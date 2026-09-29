export const WHATSAPP_NUMBER = "919014973467";

export type WhatsAppEnquiryData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

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

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
