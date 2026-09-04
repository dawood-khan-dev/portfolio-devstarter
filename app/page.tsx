import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Layers3,
  Network,
  ShieldCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectImage } from "@/components/project-image";

export default function Home() {
  const projects = [
    {
      title: "EventDesk",
      description:
        "An all-in-one SaaS platform for in-person event planners, combining task management, budgets, CRM, invoices, expenses and event operations in one place.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
      ],
      image: "/home/eventdesk_dashboard.png",
      link: "https://app.eventdesk.io",
      repo: "https://github.com/dawood-khan-dev/eventdesk",
      caseStudyUrl: "/work/eventdesk",
    },
    {
      title: "PaintMyHome",
      description:
        "A modern marketing and lead-generation website for home painting services, designed around search-driven acquisition, painting-cost discovery and quote generation.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn",
        "Basehub",
      ],
      image: "/home/paintmyhome_screenshot.png",
      link: "https://paintmyhome.in",
      repo: "https://github.com/dawood-khan-dev/paintmyhome_v0.1",
      caseStudyUrl: null,
    },
    {
      title: "Multi-Tenant PostgreSQL RLS",
      description:
        "An open-source PostgreSQL library for implementing secure multi-tenant data isolation with Row-Level Security (RLS), designed for SaaS applications using Prisma.",
      tags: ["PostgreSQL", "RLS", "Multi-Tenancy", "Prisma", "Open Source"],
      image: "/home/postgres_rls_without_text.png",
      link: null,
      repo: "https://github.com/dawood-khan-dev/multitenant-postgres-rls",
      caseStudyUrl: null,
    },
  ];

  const whatIDo = [
    {
      icon: Layers,
      title: "SaaS Development",
      description:
        "Build and evolve SaaS products end-to-end — from startup MVPs and initial architecture to new features, integrations and production deployments.",
    },
    {
      icon: Code2,
      title: "Full-Stack Web Development",
      description:
        "Build modern, responsive web applications and business platforms with Next.js, React, TypeScript and Node.js.",
    },
    {
      icon: Cpu,
      title: "Product Engineering",
      description:
        "Solve complex product and engineering problems — from architecture and data modeling to integrations, performance and evolving existing applications.",
    },
  ];

  const techHighlights = [
    {
      icon: Layers3,
      title: "FULL-STACK",
      description:
        "From frontend interfaces to APIs, databases and server-side logic.",
    },
    {
      icon: Network,
      title: "SAAS ARCHITECTURE",
      description:
        "Multi-tenancy, authentication, authorization, data modeling and business workflows.",
    },
    {
      icon: ShieldCheck,
      title: "PRODUCTION READY",
      description:
        "Performance, reliability, observability and maintainable code built for real-world use.",
    },
    {
      icon: Rocket,
      title: "SHIP & OPERATE",
      description:
        "Deployment, CI/CD, environments and infrastructure from development to production.",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Responsive UI"],
    },
    {
      category: "Backend",
      items: ["Node.js", "PostgreSQL", "Prisma", "REST APIs", "Typescript"],
    },
    {
      category: "Integrations",
      items: ["Clerk", "Stripe", "PostHog", "Resend", "Better Stack"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Container
        wrapperClassName="relative min-h-screen flex items-center pt-16 overflow-hidden"
        className="mx-auto max-w-7xl flex-1"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-[100vw] h-[100vh] bg-background overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/home/hero-bg.jpg')] before:absolute before:inset-0 before:bg-primary before:mix-blend-color-dodge dark:before:mix-blend-color" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SYSTEM ONLINE // AVAILABLE FOR HIRE
            </div>
            <h1 className="text-4xl md:text-6xl font-display tracking-tight leading-tight text-balance">
              I build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
                SaaS products
              </span>{" "}
              from idea to production.
            </h1>
            <p className="md:text-xl text-muted-foreground max-w-md leading-relaxed">
              I&apos;m Dawood Khan, a full-stack developer specializing in
              Next.js, React, TypeScript and Node.js. I build and ship SaaS
              products, business applications and modern web experiences
              end-to-end.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 items-center">
              <Link
                href="#projects"
                className={cn("uppercase", buttonVariants({ size: "lg" }))}
              >
                View my work <ArrowRight className="size-4" />
              </Link>
              <Link
                href="mailto:hello@khan.life"
                className={cn(
                  "uppercase hover:bg-primary/10! hover:text-primary! hover:border-primary!",
                  buttonVariants({ variant: "outline", size: "lg" }),
                )}
              >
                Let&apos;s talk
              </Link>
              <div className="flex gap-2">
                <Link
                  href="https://github.com/dawood-khan-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/thedawoodkhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:hello@khan.life"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Abstract Element */}
          <div className="hidden md:block relative h-[500px] w-full border border-border/30 bg-card/10 backdrop-blur-sm p-8">
            <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-primary"></div>

            <div className="h-full w-full flex flex-col justify-between font-mono text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>SYS.STATUS: NORMAL</span>
                <span>UPTIME: 99.9%</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary w-[75%]"></div>
                </div>
                <div className="flex justify-between">
                  <span>CPU_LOAD</span>
                  <span>75%</span>
                </div>
                <div className="h-1 w-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary w-[42%]"></div>
                </div>
                <div className="flex justify-between">
                  <span>MEM_USAGE</span>
                  <span>42%</span>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-4xl font-bold text-foreground">
                  03
                </span>
                <span>ACTIVE_PROJECTS</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Projects Section */}
      <Container
        id="projects"
        component="section"
        wrapperClassName="py-24 border-t border-border"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-display tracking-tighter mb-4">
              SELECTED
              <br />
              WORK
            </h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>
          <p className="text-muted-foreground max-w-sm text-left">
            A selection of products and engineering projects I&apos;ve designed,
            built and shipped — including open-source work.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] grid-rows-[repeat(3,auto)] gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="pt-0 group bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-none overflow-hidden grid grid-rows-subgrid row-span-3 content-start items-start"
            >
              {project.caseStudyUrl ? (
                <Link href={project.caseStudyUrl}>
                  <ProjectImage src={project.image} alt={project.title} />
                </Link>
              ) : (
                <ProjectImage src={project.image} alt={project.title} />
              )}
              <div className="grid gap-4">
                <CardHeader className="grid gap-4">
                  <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors">
                    {project.caseStudyUrl ? (
                      <Link href={project.caseStudyUrl}>{project.title}</Link>
                    ) : (
                      project.title
                    )}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </div>
              <CardFooter
                className={cn(
                  "flex pt-0",
                  project.link ? "justify-between" : "justify-end",
                )}
              >
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-display flex items-center hover:text-primary transition-colors gap-2"
                  >
                    LIVE DEMO <ExternalLink className="size-3" />
                  </Link>
                )}
                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-display flex items-center hover:text-primary transition-colors gap-2"
                >
                  CODE <Github className="size-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
      {/* What I Do Section */}
      <Container
        id="what-i-do"
        component="section"
        wrapperClassName="py-24 bg-secondary/20 border-t border-border"
        className="mx-auto max-w-7xl flex-1"
      >
        <h2 className="text-4xl font-display tracking-tighter mb-4 uppercase">
          What I Do
        </h2>

        <div className="grid gap-6 sm:grid-cols-3 mt-12">
          {whatIDo.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-colors duration-300 rounded-none"
            >
              <CardHeader className="flex flex-row items-center gap-3">
                <item.icon className="h-6 w-6 text-primary shrink-0" />
                <CardTitle className="text-xl font-display">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
      {/* About Section */}
      <Container
        id="about"
        component="section"
        wrapperClassName="py-24 border-t border-border"
        className="mx-auto max-w-7xl flex-1"
      >
        <h2 className="text-4xl font-display tracking-tighter mb-4 uppercase">
          About
        </h2>
        <div className="max-w-3xl space-y-4 text-muted-foreground">
          <p>
            I&apos;m Dawood Khan, a software engineer and product builder based
            in India, with 10+ years of experience building software.
          </p>
          <p>
            Today, I focus on building SaaS products and modern web
            applications, working across the stack from product architecture and
            database design to frontend, backend and deployment.
          </p>
          <p>
            I&apos;ve built products end-to-end, including{" "}
            <strong className="text-foreground font-semibold">EventDesk</strong>
            , an all-in-one SaaS platform for in-person event planners, and{" "}
            <strong className="text-foreground font-semibold">
              PaintMyHome
            </strong>
            , a marketing and lead-generation website built for an actual
            business.
          </p>
          <p>
            I enjoy working with founders and teams to turn ideas into working
            products, whether that&apos;s an MVP, a new SaaS product, or a
            feature that needs to be designed and engineered properly.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary font-normal">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Currently available for selected freelance SaaS and web development
            projects.
          </div>
        </div>
      </Container>
      {/* Skills Matrix */}
      <Container
        id="skills"
        component="section"
        wrapperClassName="py-24 bg-secondary/20 border-t border-border"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-display tracking-tighter mb-6 uppercase">
              Technology
            </h2>
            <p className="text-muted-foreground mb-8">
              The technologies I use to turn ideas into reliable,
              production-ready digital products.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {techHighlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border border-border bg-background hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-2 mb-1">
                    <item.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-mono text-xs">{item.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 grid sm:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-xl font-display border-b border-primary/30 pb-2 inline-block">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center justify-between group"
                    >
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                      <div className="h-[2px] w-12 bg-secondary group-hover:bg-primary transition-colors"></div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
      {/* Contact Section */}
      <Container id="contact" className="py-24 bg-card border-t border-border">
        <div className="max-w-2xl justify-self-center text-center space-y-6">
          <h2 className="text-4xl font-display text-balance">
            Have a SaaS idea or need help building your product?
          </h2>
          <p className="text-muted-foreground">
            I&apos;m available for selected freelance projects involving SaaS
            development and modern web applications.
          </p>
          <Link
            href="mailto:hello@khan.life"
            className={cn("uppercase", buttonVariants({ size: "lg" }))}
          >
            Let&apos;s talk <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </>
  );
}
