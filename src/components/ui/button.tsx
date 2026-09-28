import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-brand-teal text-white shadow-sm hover:bg-teal-600"
      : "border border-slate-200 bg-white text-brand-navy hover:border-brand-teal hover:text-brand-teal";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
