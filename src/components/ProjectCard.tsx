import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MonitorPlay } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D97706]/40 hover:bg-white hover:shadow-[0_20px_60px_rgba(217,119,6,0.1)] dark:border-white/10 dark:bg-white/5 dark:hover:border-[#F0C05A]/30 dark:hover:bg-white/[0.08] dark:hover:shadow-[0_20px_60px_rgba(240,192,90,0.08)]">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent dark:from-[#0A0A0B] opacity-60" />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full border border-amber-600/30 bg-amber-500/10 px-3 py-1 text-xs text-amber-700 dark:border-[#F0C05A]/20 dark:bg-[#F0C05A]/10 dark:text-[#F5D078]">
            {project.role}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs ${
              project.status === "live"
                ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.15)]"
                : project.status === "completed"
                  ? "border border-amber-600/30 bg-amber-500/10 text-amber-700 dark:border-[#F0C05A]/20 dark:bg-[#F0C05A]/10 dark:text-[#F5D078]"
                  : "border border-yellow-400/20 bg-yellow-400/10 text-yellow-600 dark:text-yellow-300"
            }`}
          >
            {project.status === "live"
              ? "Live"
              : project.status === "completed"
                ? "Completed"
                : "Code Only"}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>

        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 text-xs text-slate-700 transition-colors duration-300 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/20 dark:hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-[#D97706] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B45309] hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] dark:bg-[#F0C05A] dark:text-slate-950 dark:hover:bg-[#F5D078] dark:hover:shadow-[0_0_20px_rgba(240,192,90,0.3)]"
            >
              <MonitorPlay size={16} />
              Live Demo
              <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </a>
          ) : (
            <Link
              href={`/projects/${project.slug}`}
              className="group/btn inline-flex items-center gap-2 rounded-full bg-[#D97706] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B45309] hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] dark:bg-[#F0C05A] dark:text-slate-950 dark:hover:bg-[#F5D078] dark:hover:shadow-[0_0_20px_rgba(240,192,90,0.3)]"
            >
              View Case Study
              <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </Link>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-[#D97706] hover:text-[#D97706] dark:border-white/15 dark:bg-transparent dark:text-white dark:hover:border-[#F0C05A] dark:hover:text-[#F0C05A]"
            >
              <FaGithub size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}