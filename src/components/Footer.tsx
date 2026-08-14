import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");

  const socialLinks = [
    { href: "https://github.com/yogipranata-id", label: "GitHub", icon: <FaGithub size={20} /> },
    { href: "https://www.linkedin.com/in/yogi-pranata", label: "LinkedIn", icon: <FaLinkedin size={20} /> },
    { href: "https://instagram.com/yogipranataaaa", label: "Instagram", icon: <FaInstagram size={20} /> },
  ];

  return (
    <footer className="mt-10">
      {/* Gradient divider instead of solid border */}
      <div className="gradient-divider" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        {/* Brand / Copyright */}
        <div className="text-center md:text-left">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            Yogi<span className="text-[#F0C05A]">Pranata</span>
          </Link>
          <p className="mt-2 text-sm text-slate-500">
            {t("copyright", { year: currentYear })}
          </p>
        </div>

        {/* Social Links with hover glow */}
        <div className="flex items-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-all duration-300 hover:text-[#F0C05A] hover:drop-shadow-[0_0_8px_rgba(240,192,90,0.4)]"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
