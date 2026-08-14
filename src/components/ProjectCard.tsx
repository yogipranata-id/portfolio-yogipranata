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
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#F0C05A]/30 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_rgba(240,192,90,0.08)]">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full border border-[#F0C05A]/20 bg-[#F0C05A]/10 px-3 py-1 text-xs text-[#F5D078]">
            {project.role}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs ${
              project.status === "live"
                ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.15)]"
                : project.status === "completed"
                  ? "border border-[#F0C05A]/20 bg-[#F0C05A]/10 text-[#F5D078]"
                  : "border border-yellow-400/20 bg-yellow-400/10 text-yellow-300"
            }`}
          >
            {project.status === "live"
              ? "Live"
              : project.status === "completed"
                ? "Completed"
                : "Code Only"}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white">{project.title}</h3>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-colors duration-300 hover:border-white/20 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-[#F0C05A] px-4 py-2 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-[#F5D078] hover:shadow-[0_0_20px_rgba(240,192,90,0.3)]"
          >
            View Case Study
            <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </Link>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-[#F0C05A] hover:text-[#F0C05A] hover:shadow-[0_0_16px_rgba(240,192,90,0.1)]"
          >
            <FaGithub size={16} />
            Source Code
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition-all duration-300 hover:bg-emerald-400/20 hover:shadow-[0_0_16px_rgba(52,211,153,0.15)]"
            >
              <MonitorPlay size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}