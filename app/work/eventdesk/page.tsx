import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EventDesk — Dawood Khan",
  description:
    "An all-in-one SaaS platform for in-person event planners, combining task management, budgets, CRM, invoices, expenses and event operations in one place.",
};

export default function EventDeskPage() {
  const tags = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
  ];

  return (
    <>
      <Container
        component="section"
        wrapperClassName="py-16 border-b border-border"
        className="mx-auto max-w-5xl"
      >
        <Badge variant="secondary" className="font-mono text-xs mb-4">
          Case Study — Placeholder Content
        </Badge>
        <h1 className="text-5xl md:text-6xl font-display tracking-tight mb-4">
          EventDesk
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          An all-in-one SaaS platform for in-person event planners, combining
          task management, budgets, CRM, invoices, expenses and event operations
          in one place.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href="https://app.eventdesk.io"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("uppercase", buttonVariants())}
          >
            Live Demo <ExternalLink className="size-4" />
          </Link>
          <Link
            href="https://github.com/dawood-khan-dev/eventdesk"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("uppercase", buttonVariants({ variant: "outline" }))}
          >
            Code <Github className="size-4" />
          </Link>
        </div>
      </Container>

      <Container
        component="section"
        wrapperClassName="py-16 border-b border-border"
        className="mx-auto max-w-5xl"
      >
        <div className="relative aspect-video overflow-hidden border border-border bg-card">
          <Image
            src="/eventdesk_dashboard.png"
            alt="EventDesk dashboard"
            fill
            className="object-cover"
          />
        </div>
      </Container>

      <Container
        component="section"
        wrapperClassName="py-16"
        className="mx-auto max-w-5xl space-y-4 text-muted-foreground"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">Overview</h2>
        <p>
          This is placeholder copy for the EventDesk case study. Replace with
          the actual problem statement, role, architecture decisions, and
          outcomes once written.
        </p>
      </Container>
    </>
  );
}
