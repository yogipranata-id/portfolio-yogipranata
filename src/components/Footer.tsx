import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");

  return (
    <footer className="mt-10 border-t border-white/10 bg-black/20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        {/* Brand / Copyright */}
        <div className="text-center md:text-left">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            Yogi<span className="text-cyan-400">Pranata</span>
          </Link>
          <p className="mt-2 text-sm text-slate-500">
            {t("copyright", { year: currentYear })}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/yogipranata-id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-cyan-400"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yogi-pranata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-cyan-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://instagram.com/yogipranataaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-cyan-400"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
