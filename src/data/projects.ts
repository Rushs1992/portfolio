export type ProjectStatus = "live" | "building" | "planned";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  liveUrl: string;
  repoUrl?: string;
  stack: string[];
  problem: string;
  architecture: string;
  tradeoffs: string[];
  scaling: string;
};

export const projects: Project[] = [
  {
    slug: "tasks",
    name: "Task API",
    tagline: "REST API with JWT auth, Postgres, and a full test suite",
    status: "planned",
    liveUrl: "https://tasks.shahrushang.com",
    stack: ["Node", "Fastify", "PostgreSQL", "Docker"],
    problem:
      "A multi-user task manager API: sign up, log in, create and share task lists, with pagination and search. The point is to do the boring parts properly: auth, validation, error handling, migrations, and tests.",
    architecture: "",
    tradeoffs: [],
    scaling: "",
  },
  {
    slug: "go",
    name: "URL shortener",
    tagline: "Redis-backed redirects with a hand-written rate limiter",
    status: "planned",
    liveUrl: "https://go.shahrushang.com",
    stack: ["Node", "Redis", "PostgreSQL"],
    problem:
      "Turn long URLs into short ones and redirect fast. Postgres is the source of truth; Redis caches hot links. Rate limiting is implemented from scratch (token bucket) rather than pulled from a package.",
    architecture: "",
    tradeoffs: [],
    scaling: "",
  },
  {
    slug: "chat",
    name: "Real-time chat",
    tagline: "WebSockets, persisted messages, Redis pub/sub across instances",
    status: "planned",
    liveUrl: "https://chat.shahrushang.com",
    stack: ["Node", "WebSockets", "Redis", "PostgreSQL"],
    problem:
      "Rooms, message history, presence. Built to run as more than one server instance from the start, so it has to solve message fan-out between processes, not just between sockets.",
    architecture: "",
    tradeoffs: [],
    scaling: "",
  },
  {
    slug: "jobs",
    name: "Background jobs",
    tagline: "Queue with retries, backoff, and a live dashboard",
    status: "planned",
    liveUrl: "https://jobs.shahrushang.com",
    stack: ["Node", "BullMQ", "Redis", "Worker threads"],
    problem:
      "Upload a file, get it processed later. Covers idempotent jobs, retries with backoff, dead-letter handling, and moving CPU-heavy work off the event loop.",
    architecture: "",
    tradeoffs: [],
    scaling: "",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
