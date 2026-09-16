import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kushal Khatri | Cybersecurity Portfolio",
  description: "Kushal Khatri — Cybersecurity & Ethical Hacking trainee, VAPT learner and security-focused builder from Nepal.",
  keywords: ["Kushal Khatri", "Cybersecurity", "VAPT", "Ethical Hacking", "Web Security", "API Security", "Penetration Testing"],
  openGraph: {
    title: "Kushal Khatri | Cybersecurity Portfolio",
    description: "Cybersecurity, VAPT and security projects by Kushal Khatri.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
