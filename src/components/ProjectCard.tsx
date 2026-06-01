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
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
            {project.role}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs ${
              project.status === "live"
                ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                : project.status === "completed"
                  ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
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
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Case Study
            <ArrowUpRight size={16} />
          </Link>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaGithub size={16} />
            Source Code
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/20"
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