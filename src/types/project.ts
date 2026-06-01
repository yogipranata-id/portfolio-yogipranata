export type Project = {
  slug: string;
  title: string;
  description: string;

  image: string;

  screenshots?: string[];

  stack: string[];

  githubUrl: string;
  demoUrl?: string;

  role: string;

  featured?: boolean;

  status: "code-only" | "live" | "completed";

  objective?: string;

  features?: string[];

  challenges?: string[];

  solutions?: string[];
};