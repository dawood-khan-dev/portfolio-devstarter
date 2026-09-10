import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ScrollSpyNav } from "@/components/scroll-spy-nav";
import { CaseStudyAccordion } from "@/components/case-study/case-study-accordion";
import type { Metadata } from "next";

function DecisionField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
        {label}
      </div>
      <div className="space-y-4 text-muted-foreground">{children}</div>
    </div>
  );
}

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

  const features = [
    {
      title: "Event & Task Management",
      description:
        "Plan each event, assign tasks, track progress and keep deadlines on schedule.",
      image: "/work/eventdesk/tasks.png",
    },
    {
      title: "Budget & Finance",
      description:
        "Manage budgets, expenses, bills and invoices throughout the event lifecycle.",
      image: "/work/eventdesk/bills.png",
    },
    {
      title: "CRM",
      description:
        "Manage leads, clients and vendors alongside the events they're connected to.",
      image: "/work/eventdesk/leads.png",
    },
  ];

  const responsibilityGroups = [
    {
      group: "Product & Engineering",
      items: [
        {
          label: "Product Architecture",
          description:
            "Designed the overall application architecture and technical foundations.",
        },
        {
          label: "Frontend",
          description:
            "Built the product UI and workflows using Next.js, React and TypeScript.",
        },
        {
          label: "Backend",
          description:
            "Developed server-side logic, APIs and business workflows.",
        },
        {
          label: "Business Logic",
          description:
            "Built the core workflows for events, tasks, budgets, expenses, invoices, leads, clients and vendors.",
        },
      ],
    },
    {
      group: "Data & Security",
      items: [
        {
          label: "Database",
          description:
            "Designed the PostgreSQL data model and persistence layer using Prisma.",
        },
        {
          label: "Authentication",
          description:
            "Implemented user authentication and account management.",
        },
        {
          label: "Authorization",
          description:
            "Designed access control around users, organizations and application resources.",
        },
        {
          label: "Multi-tenancy",
          description:
            "Implemented tenant isolation using PostgreSQL Row-Level Security (RLS).",
        },
      ],
    },
    {
      group: "Infrastructure & Operations",
      items: [
        {
          label: "Integrations",
          description:
            "Integrated the external services required to operate the SaaS product.",
        },
        {
          label: "Deployment",
          description:
            "Set up production deployment, environments and application infrastructure.",
        },
        {
          label: "Observability",
          description:
            "Implemented analytics, error tracking and operational monitoring.",
        },
      ],
    },
  ];

  const architectureItems = [
    {
      label: "Next.js",
      description:
        "Application layer, combining the React frontend with server-side logic and APIs.",
    },
    {
      label: "Prisma",
      description:
        "ORM and data-access layer between the application and database.",
    },
    {
      label: "Neon PostgreSQL",
      description: "Primary database for tenant and business data.",
    },
    {
      label: "PostgreSQL RLS",
      description: "Provides database-level isolation between tenants.",
    },
    {
      label: "Clerk",
      description: "Handles authentication and user management.",
    },
    {
      label: "SaaS integrations",
      description:
        "Stripe, Resend, PostHog, Better Stack and Tawk.to provide specialized platform capabilities.",
    },
  ];

  const sectionNav = [
    { id: "problem", label: "Problem" },
    { id: "product", label: "Product" },
    { id: "role", label: "Role" },
    { id: "architecture", label: "Architecture" },
    { id: "challenges", label: "Challenges" },
    { id: "decisions", label: "Decisions" },
    { id: "outcome", label: "Outcome" },
  ];

  const challengeItems = [
    {
      id: "challenge-1",
      number: "01",
      title: "Production Deployment",
      content: (
        <div className="space-y-4">
          <p>
            Getting Prisma to work reliably on Vercel inside a Next.js monorepo
            required several iterations around Prisma&apos;s native query
            engine, Vercel&apos;s build tracing and Next.js/Turbopack.
          </p>
          <p>
            The final solution combined explicit Prisma binary targets with
            Next.js file-tracing configuration, along with deployment-time
            migration handling. Along the way, I also resolved production issues
            involving environment validation and dynamic rendering with Clerk
            authentication.
          </p>
        </div>
      ),
    },
    {
      id: "challenge-2",
      number: "02",
      title: "Multi-tenancy & Data Isolation",
      content: (
        <div className="space-y-4">
          <p>
            EventDesk uses PostgreSQL Row-Level Security (RLS) to isolate data
            between organizations, with tenant context propagated through the
            application and enforced at the database layer.
          </p>
          <p>
            As the schema grew, maintaining tenant isolation across every table
            became increasingly important. I consolidated tenant-context
            handling into a shared{" "}
            <code className="font-mono text-sm bg-muted text-foreground px-1.5 py-0.5 rounded">
              getTenantContext()
            </code>{" "}
            abstraction used across server actions, and separated the database
            roles used for application queries and schema migrations.
          </p>
          <p>
            Role-based authorization was layered on top of tenant isolation,
            allowing organization members to access only the events and tasks
            they were assigned to.
          </p>
        </div>
      ),
    },
    {
      id: "challenge-3",
      number: "03",
      title: "Data Modelling",
      content: (
        <div className="space-y-4">
          <p>
            Several real-world workflows exposed limitations in the initial data
            model.
          </p>
          <p>
            Invoice and bill payment tracking was refactored from denormalized
            payment fields into a shared{" "}
            <code className="font-mono text-sm bg-muted text-foreground px-1.5 py-0.5 rounded">
              PaymentRecord
            </code>{" "}
            model, with balances and statuses calculated consistently from
            payment data.
          </p>
          <p>
            Lead conversion was also made idempotent so that transitioning a
            lead to{" "}
            <code className="font-mono text-sm bg-muted text-foreground px-1.5 py-0.5 rounded">
              CONVERTED
            </code>{" "}
            reliably creates the corresponding client without depending on which
            code path triggered the conversion.
          </p>
          <p>
            These changes reduced duplicated state and made important business
            rules enforceable in a single place.
          </p>
        </div>
      ),
    },
    {
      id: "challenge-4",
      number: "04",
      title: "Third-party Integrations",
      content: (
        <div className="space-y-4">
          <p>
            EventDesk relies on several external services, and integrating them
            introduced problems that weren&apos;t visible from the application
            layer alone.
          </p>
          <p>
            I worked through browser security restrictions involving COEP/CORS
            for hCaptcha, Stripe, Tawk.to and Cal.com, while keeping security
            exceptions scoped to the routes and origins that required them.
          </p>
          <p>
            Stripe subscription state was synchronized through webhooks, while
            PostHog feature flags were adapted to the capabilities of the
            installed server SDK and its serverless execution model.
          </p>
          <p>
            Monitoring also required adapting an ArcJet rule when BetterStack
            changed its monitoring bot&apos;s user-agent, replacing a brittle
            string match with a category-based rule.
          </p>
        </div>
      ),
    },
    {
      id: "challenge-5",
      number: "05",
      title: "Complex UI State",
      content: (
        <div className="space-y-4">
          <p>
            As the application introduced inline creation of related entities
            inside forms and sheets, interactions between dirty-form detection,
            nested dialogs and component state became increasingly complex.
          </p>
          <p>
            I implemented a generic sub-dialog guard to prevent parent forms
            from incorrectly triggering discard confirmations while a child
            dialog was open. Backdrop interactions were subsequently refined so
            that dirty forms ignore accidental backdrop clicks while explicit
            cancellation still requires confirmation.
          </p>
          <p>
            Some of these flows also required addressing React state batching
            and stale-closure issues to ensure newly created records were
            immediately reflected in the parent form.
          </p>
        </div>
      ),
    },
    {
      id: "challenge-6",
      number: "06",
      title: "Product Onboarding",
      content: (
        <div className="space-y-4">
          <p>
            The guided onboarding wizard combined Driver.js spotlight
            interactions, custom step state, real user actions and responsive
            behavior.
          </p>
          <p>
            The implementation required solving mobile sidebar interaction
            loops, stale closures in step advancement, pointer-event conflicts
            between the spotlight and wizard controls, and reliable detection of
            user actions through event-based detection with a polling fallback.
          </p>
          <p>
            The result was a guided workflow that could respond to actual
            product usage rather than functioning as a simple static tour.
          </p>
        </div>
      ),
    },
  ];

  const decisionItems = [
    {
      id: "decision-1",
      number: "01",
      title: "Next.js as the Application Framework",
      content: (
        <div className="space-y-6">
          <DecisionField label="Decision">
            <p>
              Use Next.js as the primary application framework for both the
              frontend and backend.
            </p>
          </DecisionField>
          <DecisionField label="Reason">
            <p>
              The original approach considered a separate React frontend and
              Node.js backend. I initially started building a CRUD engine to
              provide a generic data-access layer similar to PostgREST, which
              could serve as the foundation for backend APIs.
            </p>
            <p>
              As the team structure changed and I became responsible for
              building the product end-to-end, the separation between frontend
              and backend introduced unnecessary development overhead. Next.js
              allowed me to keep the application in a single codebase while
              implementing server-side logic alongside the React application
              through Server Actions and other server-side capabilities.
            </p>
          </DecisionField>
          <DecisionField label="Trade-off">
            <p>
              This creates tighter coupling between the frontend and backend
              than a separately deployed API architecture, but significantly
              reduces the amount of infrastructure, boilerplate and coordination
              required for a small engineering team.
            </p>
            <p>
              For EventDesk, the reduction in complexity was more valuable than
              maintaining a strict frontend/backend separation.
            </p>
          </DecisionField>
        </div>
      ),
    },
    {
      id: "decision-2",
      number: "02",
      title: "PostgreSQL + Prisma",
      content: (
        <div className="space-y-6">
          <DecisionField label="Decision">
            <p>
              Use PostgreSQL as the primary database with Prisma as the ORM and
              data-access layer.
            </p>
          </DecisionField>
          <DecisionField label="Reason">
            <p>
              PostgreSQL was selected for the project from the outset. For the
              ORM layer, I evaluated TypeORM and Drizzle, and found Drizzle to
              be a better fit than TypeORM. In fact, Drizzle was initially used
              as the ORM for the CRUD engine I was developing.
            </p>
            <p>
              When the architecture moved to Next.js, Prisma became the natural
              choice because of its strong integration with the Next.js SaaS
              stack and the next-forge foundation being used for the project.
              Given the development timeline, I chose Prisma rather than
              spending additional time validating a separate Drizzle + Next.js
              setup.
            </p>
          </DecisionField>
          <DecisionField label="Trade-off">
            <p>
              This meant moving away from the Drizzle-based approach I had
              already started building around, but it allowed me to align more
              closely with the chosen Next.js SaaS foundation and move the
              product forward without introducing another round of framework
              experimentation.
            </p>
          </DecisionField>
        </div>
      ),
    },
    {
      id: "decision-3",
      number: "03",
      title: "PostgreSQL Row-Level Security for Multi-tenancy",
      content: (
        <div className="space-y-6">
          <DecisionField label="Decision">
            <p>
              Enforce tenant isolation at the PostgreSQL database layer using
              Row-Level Security (RLS), rather than relying entirely on
              application-level tenant filtering.
            </p>
          </DecisionField>
          <DecisionField label="Reason">
            <p>
              Application-level filtering depends on every developer remembering
              to include the correct tenant condition in every query. As the
              product and engineering team grow, a single missed filter can
              become a serious data-isolation vulnerability.
            </p>
            <p>
              I considered two stronger alternatives: a separate database per
              tenant and a separate PostgreSQL schema per tenant. A database per
              tenant provides strong isolation but introduces significant
              provisioning, resource and operational complexity. Separate
              schemas reduce some of that overhead, but became increasingly
              complex as I explored the approach while developing the
              multi-tenant library.
            </p>
            <p>
              PostgreSQL RLS provided the balance I was looking for: tenant
              isolation is enforced by the database, while the application only
              needs to establish the tenant context. Once that context is set,
              the rest of the application can use normal Prisma queries without
              repeatedly carrying tenant-filtering logic throughout the
              codebase.
            </p>
          </DecisionField>
          <DecisionField label="Trade-off">
            <p>
              RLS adds complexity to database migrations, tenant-context
              management and debugging because authorization is no longer
              visible entirely within application queries.
            </p>
            <p>
              In return, the database itself becomes the final enforcement
              boundary for tenant isolation, reducing the risk of developer
              error while retaining the performance and operational
              characteristics of a shared database.
            </p>
          </DecisionField>
        </div>
      ),
    },
    {
      id: "decision-4",
      number: "04",
      title: "Managed Authentication with Clerk",
      content: (
        <div className="space-y-6">
          <DecisionField label="Decision">
            <p>
              Use Clerk for authentication and user management instead of
              building authentication in-house.
            </p>
          </DecisionField>
          <DecisionField label="Reason">
            <p>
              Authentication is security-sensitive infrastructure with a
              substantial ongoing maintenance burden. The team had already
              experienced significant delays before development began, while the
              target was to build the product within a much shorter development
              window.
            </p>
            <p>
              Building authentication from scratch would have introduced months
              of additional development and left the team responsible for
              maintaining a security-critical subsystem.
            </p>
            <p>
              Clerk also integrated naturally with the next-forge SaaS
              foundation used for EventDesk, making it possible to adopt a
              mature authentication system without building the surrounding
              infrastructure ourselves.
            </p>
          </DecisionField>
          <DecisionField label="Trade-off">
            <p>
              Using a third-party authentication provider introduces vendor
              dependency and reduces control over the authentication layer.
            </p>
            <p>
              For EventDesk, that trade-off was preferable to spending
              significant engineering time building and maintaining
              authentication infrastructure that was not part of the
              product&apos;s core value.
            </p>
          </DecisionField>
        </div>
      ),
    },
    {
      id: "decision-5",
      number: "05",
      title: "Vercel for Deployment",
      content: (
        <div className="space-y-6">
          <DecisionField label="Decision">
            <p>Deploy the Next.js application on Vercel.</p>
          </DecisionField>
          <DecisionField label="Reason">
            <p>
              Vercel is the platform behind Next.js, with deployment
              capabilities optimized around the framework. I chose it as the
              initial deployment platform to take advantage of that integration
              and evaluate the experience before considering alternatives such
              as Netlify.
            </p>
            <p>
              The first production deployment exposed significant Prisma and
              build-tracing issues in the monorepo, requiring several iterations
              to resolve.
            </p>
          </DecisionField>
          <DecisionField label="Trade-off">
            <p>
              The platform&apos;s build and runtime constraints introduced
              additional complexity around Prisma&apos;s native query engine and
              Next.js build tracing.
            </p>
            <p>
              However, once those issues were resolved, there was no compelling
              reason to introduce the additional migration and operational work
              involved in moving to another provider. Vercel continues to serve
              the application without requiring a separate infrastructure layer.
            </p>
          </DecisionField>
        </div>
      ),
    },
  ];

  return (
    <>
      <Container
        component="section"
        wrapperClassName="relative overflow-hidden border-b border-border"
        className="mx-auto max-w-7xl py-24"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="font-mono text-xs mb-4">
              Case Study
            </Badge>
            <h1 className="text-5xl md:text-6xl font-display tracking-tight mb-4">
              EventDesk
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              An all-in-one SaaS platform for in-person event planners.
            </p>
            <div className="mb-8 border-l-2 border-primary/30 pl-4">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                Role
              </div>
              <div className="font-mono text-sm mb-4">Full-stack Developer</div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="font-mono text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
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
                className={cn(
                  "uppercase",
                  buttonVariants({ variant: "outline" }),
                )}
              >
                Code <Github className="size-4" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-border shadow-2xl">
            <Image
              src="/work/eventdesk/dashboard.png"
              alt="EventDesk dashboard"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </Container>

      <Container
        component="nav"
        wrapperClassName="sticky top-16 z-40 bg-background/80 backdrop-blur-md border-b border-border"
        className="mx-auto max-w-5xl flex gap-6 overflow-x-auto py-3 text-xs font-mono uppercase tracking-wider"
      >
        <ScrollSpyNav items={sectionNav} />
      </Container>

      <Container
        id="problem"
        component="section"
        wrapperClassName="py-16 border-b border-border"
        className="mx-auto max-w-5xl space-y-4 text-muted-foreground"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">
          The Problem
        </h2>
        <p>
          Planning and managing an event involves much more than coordinating
          the day itself. Event planners have to keep track of clients, vendors,
          tasks, budgets, invoices, expenses and deadlines—often across
          spreadsheets, messaging apps and separate tools.
        </p>
        <p>
          As an event grows, keeping everything in sync becomes increasingly
          difficult. Financial information gets scattered, follow-ups can be
          missed, and it becomes harder to see the overall health of an event at
          a glance.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            EventDesk brings these workflows together in one place
          </strong>
          , giving event planners a centralized system to manage their events,
          teams, clients, vendors and finances from planning through completion.
        </p>
      </Container>

      <Container
        id="product"
        component="section"
        wrapperClassName="py-16 border-b border-border bg-secondary/20"
        className="mx-auto max-w-5xl"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">
          The Product
        </h2>
        <p className="text-muted-foreground mb-16">
          EventDesk brings the core workflows of event planning into a single
          workspace. Planners can manage events, coordinate tasks, work with
          clients and vendors, track budgets and expenses, and handle invoices
          without jumping between disconnected tools.
        </p>

        <div className="space-y-16">
          {features.map((feature) => (
            <div key={feature.title}>
              <h3 className="text-xl font-display text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {feature.description}
              </p>
              <div className="relative aspect-video overflow-hidden border border-border bg-card shadow-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container
        id="role"
        component="section"
        wrapperClassName="py-16 border-b border-border"
        className="mx-auto max-w-5xl"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">My Role</h2>
        <div className="space-y-4 text-muted-foreground mb-12">
          <p className="border-l-2 border-primary pl-4 text-lg text-foreground italic">
            I designed and built EventDesk end-to-end.
          </p>
          <p>
            From product architecture and data modeling to frontend, backend,
            authentication, authorization and deployment, I owned the
            engineering across the entire product.
          </p>
        </div>

        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-6">
          Responsibilities
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {responsibilityGroups.map((group) => (
            <div
              key={group.group}
              className="border-l-2 border-primary/30 pl-4"
            >
              <h4 className="font-mono text-sm text-primary mb-4">
                {group.group}
              </h4>
              <dl className="space-y-4">
                {group.items.map((item) => (
                  <div key={item.label}>
                    <dt className="font-mono text-sm text-foreground font-semibold mb-1">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-muted-foreground">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Container>

      <Container
        id="architecture"
        component="section"
        wrapperClassName="py-16 border-b border-border bg-secondary/20"
        className="mx-auto max-w-5xl"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">
          Architecture
        </h2>
        <div className="space-y-4 text-muted-foreground mb-8">
          <p>
            EventDesk is built as a modern full-stack SaaS application, with a
            Next.js application at the core and PostgreSQL as the primary data
            layer.
          </p>
          <p>
            The application follows a clear separation between the user-facing
            application, data access layer and database, while integrating
            specialized SaaS services for authentication, payments, email,
            analytics, monitoring and customer support.
          </p>
        </div>

        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
          Core Architecture
        </div>
        <dl className="sm:columns-2 gap-x-8 mb-12 border-l-2 border-primary/30 pl-4">
          {architectureItems.map((item) => (
            <div key={item.label} className="mb-6 break-inside-avoid">
              <dt className="font-mono text-sm text-foreground font-semibold mb-1">
                {item.label}
              </dt>
              <dd className="text-sm text-muted-foreground">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>

        <p className="text-muted-foreground mb-8">
          The architecture keeps the core product logic within the application
          while relying on proven services where they provide a clear advantage.
        </p>

        <div className="border border-border bg-card p-6 md:p-10">
          <Image
            src="/work/eventdesk/architecture.png"
            alt="EventDesk architecture diagram"
            width={1346}
            height={1168}
            className="w-full h-auto"
          />
        </div>
      </Container>

      <Container
        id="challenges"
        component="section"
        wrapperClassName="py-16 border-b border-border"
        className="mx-auto max-w-5xl"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">
          Engineering Challenges
        </h2>
        <p className="text-muted-foreground mb-12">
          Building EventDesk involved solving problems well beyond implementing
          CRUD features. As the product evolved, the engineering challenges
          moved from infrastructure and database architecture to security,
          third-party integrations and increasingly complex product
          interactions.
        </p>

        <CaseStudyAccordion items={challengeItems} />
      </Container>

      <Container
        id="decisions"
        component="section"
        wrapperClassName="py-16 border-b border-border bg-secondary/20"
        className="mx-auto max-w-5xl"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">
          Technical Decisions
        </h2>
        <p className="text-muted-foreground mb-12">
          Building EventDesk required balancing development speed, security,
          scalability and the realities of building a SaaS product with a small
          engineering team.
        </p>

        <CaseStudyAccordion items={decisionItems} />
      </Container>

      <Container
        id="outcome"
        component="section"
        wrapperClassName="py-16"
        className="mx-auto max-w-5xl"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">Outcome</h2>
        <div className="space-y-4 text-muted-foreground mb-8">
          <p>
            EventDesk is now a working SaaS application that I designed and
            built end-to-end.
          </p>
          <p>
            The product brings event planning, task management, budgeting,
            finance and CRM into a single workspace for in-person event
            planners. The application has been taken from an initial product
            idea through architecture, implementation, deployment and ongoing
            iteration.
          </p>
          <p>
            Building EventDesk gave me the opportunity to work across the entire
            product lifecycle—from designing the system and data model to
            solving production infrastructure, multi-tenancy, security and
            complex product workflows.
          </p>
        </div>
        <Link
          href="https://app.eventdesk.io"
          target="_blank"
          rel="noopener noreferrer"
          className={cn("uppercase", buttonVariants({ size: "lg" }))}
        >
          Visit EventDesk <ArrowRight className="size-4" />
        </Link>
      </Container>
    </>
  );
}
