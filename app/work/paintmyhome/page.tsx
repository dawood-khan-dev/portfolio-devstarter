import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SectionNav } from "@/components/case-study/section-nav";
import { ZoomableImage } from "@/components/case-study/zoomable-image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PaintMyHome — Dawood Khan",
  description:
    "A modern marketing and lead-generation website built for a home painting business.",
};

export default function PaintMyHomePage() {
  const tags = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn",
    "Basehub",
  ];

  const sectionNav = [
    { id: "overview", label: "Overview" },
    { id: "objective", label: "Objective" },
    { id: "role", label: "Role" },
    { id: "structure", label: "Structure" },
    { id: "design", label: "Design" },
    { id: "technical", label: "Technical" },
    { id: "result", label: "Result" },
  ];

  const objectives = [
    "Help homeowners discover PaintMyHome through search",
    "Make painting-cost information easy to find and understand",
    "Help visitors discover relevant painting services",
    "Guide visitors from information to action",
    "Generate qualified quote requests",
    "Provide a foundation for expanding SEO-focused content over time",
  ];

  const responsibilities = [
    "Website architecture and information structure",
    "UX and responsive interface design",
    "Next.js application development",
    "Reusable UI components",
    "Service and content structures",
    "SEO implementation",
    "CMS integration",
    "Forms and lead-generation flows",
    "Third-party integrations",
    "Production deployment",
  ];

  const journeySteps = [
    "Discover",
    "Understand",
    "Explore",
    "Estimate",
    "Enquire",
  ];

  const designConsiderations = [
    "Clear service discovery",
    "Strong but restrained calls to action",
    "Easy-to-scan content sections",
    "Painting-cost discovery as a prominent user journey",
    "Consistent service presentation",
    "Responsive layouts across desktop and mobile",
    "Accessible forms and quote-request flows",
  ];

  const designScreens = [
    {
      title: "Homepage",
      description:
        "The homepage establishes the business proposition quickly and provides multiple paths into the site's core services and resources.",
      image: "/work/paintmyhome/hero.png",
    },
    {
      title: "Service & CTA Sections",
      description:
        "Service pages and supporting sections are structured to help visitors understand the offering before presenting an appropriate next action.",
      image: "/work/paintmyhome/services.png",
    },
  ];

  const seoPoints = [
    "Search-focused service pages",
    "Informational guides",
    "Painting-cost discovery",
    "Search-friendly content structures",
    "Metadata and page-level SEO",
    "Scalable content expansion",
  ];

  const technicalSections = [
    {
      title: "Frontend",
      description:
        "The interface was implemented using reusable components and responsive layouts, allowing common patterns such as service sections, CTAs, forms and content blocks to remain consistent across the website.",
    },
    {
      title: "CMS",
      description:
        "Content is managed through a CMS, separating the content layer from the application code. This makes it possible to expand services, guides and other SEO-focused content without requiring every content change to be implemented as a code change.",
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
              PaintMyHome
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A modern marketing and lead-generation website built for a home
              painting business.
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
                href="https://paintmyhome.in"
                target="_blank"
                rel="noopener noreferrer"
                className={cn("uppercase", buttonVariants())}
              >
                Live Demo <ExternalLink className="size-4" />
              </Link>
              <Link
                href="https://github.com/dawood-khan-dev/paintmyhome_v0.1"
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
              src="/work/paintmyhome/hero.png"
              alt="PaintMyHome homepage"
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
        <SectionNav items={sectionNav} />
      </Container>

      <Container
        id="overview"
        component="section"
        wrapperClassName="py-16 border-b border-border"
        className="mx-auto max-w-5xl space-y-4 text-muted-foreground"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">Overview</h2>
        <p>
          PaintMyHome is a modern marketing and lead-generation website built
          for a home painting business.
        </p>
        <p>
          The website is designed to help homeowners discover painting services,
          understand their options, estimate painting costs and take the next
          step toward requesting a quote.
        </p>
        <p>
          Rather than functioning as a simple company website, the experience is
          structured around{" "}
          <strong className="text-foreground font-semibold">
            search-driven discovery, useful information and clear conversion
            paths
          </strong>
          .
        </p>
      </Container>

      <Container
        id="objective"
        component="section"
        wrapperClassName="py-16 border-b border-border bg-secondary/20"
        className="mx-auto max-w-5xl"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">
          Business Objective
        </h2>
        <p className="text-muted-foreground mb-8">
          The primary objective was to build a website that could become a
          long-term acquisition channel for the business, with a strong focus on
          organic search.
        </p>
        <p className="text-muted-foreground mb-4">The experience needed to:</p>
        <ul className="space-y-2 mb-8 border-l-2 border-primary/30 pl-4">
          {objectives.map((item) => (
            <li key={item} className="text-muted-foreground text-sm">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground">
          A key part of the strategy was the{" "}
          <strong className="text-foreground font-semibold">
            Painting Cost Calculator
          </strong>
          , giving visitors a useful starting point while creating a natural
          path from cost discovery to a quote request.
        </p>
      </Container>

      <Container
        id="role"
        component="section"
        wrapperClassName="py-16 border-b border-border"
        className="mx-auto max-w-5xl"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">My Role</h2>
        <p className="border-l-2 border-primary pl-4 text-lg text-foreground italic mb-8">
          I designed and built PaintMyHome end-to-end, covering the product
          experience, frontend implementation and technical foundation.
        </p>

        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
          Responsibilities
        </div>
        <ul className="sm:columns-2 gap-x-8 mb-8">
          {responsibilities.map((item) => (
            <li
              key={item}
              className="mb-3 break-inside-avoid text-sm text-muted-foreground border-l-2 border-primary/30 pl-4"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground">
          The focus was not only on making the website look polished, but on
          creating a foundation that could support ongoing content growth and
          lead generation.
        </p>
      </Container>

      <Container
        id="structure"
        component="section"
        wrapperClassName="py-16 border-b border-border"
        className="mx-auto max-w-5xl space-y-4 text-muted-foreground"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">
          Information Architecture
        </h2>
        <p>
          The website is organized around the way a potential customer typically
          explores a painting service.
        </p>

        <div className="flex flex-wrap items-center gap-2 py-4">
          {journeySteps.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <Badge variant="secondary" className="font-mono text-xs">
                {step}
              </Badge>
              {index < journeySteps.length - 1 && (
                <ArrowRight className="size-4 text-primary" />
              )}
            </div>
          ))}
        </div>

        <p>
          Visitors can discover the business through search, explore painting
          services, learn about the work involved and use cost-related resources
          before being guided toward a quote request.
        </p>
        <p>
          The structure also allows individual service and informational pages
          to exist as independent search entry points, rather than forcing every
          visitor through the homepage.
        </p>
        <p>
          This creates a foundation for expanding the website with additional
          services, guides and SEO-focused content without requiring a redesign
          of the overall navigation.
        </p>
      </Container>

      <Container
        id="design"
        component="section"
        wrapperClassName="py-16 border-b border-border bg-secondary/20"
        className="mx-auto max-w-5xl"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">Design</h2>
        <div className="space-y-4 text-muted-foreground mb-8">
          <p>
            The visual design focuses on clarity, trust and conversion rather
            than decorative complexity.
          </p>
          <p>
            The interface uses a clean visual hierarchy to make important
            information easy to scan, while prominent calls to action provide
            clear next steps throughout the experience.
          </p>
        </div>

        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
          Key Design Considerations
        </div>
        <ul className="sm:columns-2 gap-x-8 mb-16 border-l-2 border-primary/30 pl-4">
          {designConsiderations.map((item) => (
            <li
              key={item}
              className="mb-2 break-inside-avoid text-sm text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="space-y-16">
          {designScreens.map((screen) => (
            <div key={screen.title}>
              <h3 className="text-xl font-display text-foreground mb-2">
                {screen.title}
              </h3>
              <p className="text-muted-foreground mb-6">{screen.description}</p>
              <div className="relative aspect-video overflow-hidden border border-border bg-card shadow-lg">
                <Image
                  src={screen.image}
                  alt={screen.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-xl font-display text-foreground mb-2">
              Mobile Experience
            </h3>
            <div className="text-muted-foreground space-y-2 mb-6">
              <p>
                The interface was designed responsively rather than treating
                mobile as a reduced version of the desktop layout.
              </p>
              <p>
                Navigation, content hierarchy, service sections and conversion
                points adapt to smaller screens while preserving the core user
                journey.
              </p>
            </div>
            <div className="relative aspect-505/772 max-w-xs overflow-hidden border border-border bg-card shadow-lg mx-auto">
              <Image
                src="/work/paintmyhome/mobile.png"
                alt="PaintMyHome mobile experience"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-display text-foreground mb-2">
              Representative Screens
            </h3>
            <p className="text-muted-foreground mb-6">
              Additional screens demonstrate the reusable visual system and
              consistent experience across the website.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <ZoomableImage
                src="/work/paintmyhome/calculator.png"
                alt="PaintMyHome painting cost calculator"
                width={1920}
                height={1080}
                triggerClassName="aspect-video"
              />
              <ZoomableImage
                src="/work/paintmyhome/guides.png"
                alt="PaintMyHome guides"
                width={1920}
                height={1080}
                triggerClassName="aspect-video"
              />
            </div>
          </div>
        </div>
      </Container>

      <Container
        id="technical"
        component="section"
        wrapperClassName="py-16 border-b border-border"
        className="mx-auto max-w-5xl"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">
          Technical Implementation
        </h2>
        <p className="text-muted-foreground mb-12">
          PaintMyHome was built with{" "}
          <strong className="text-foreground font-semibold">Next.js</strong>,
          providing the foundation for a modern, production-ready web
          application with a strong focus on performance and SEO.
        </p>

        <div className="space-y-10">
          {technicalSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-display text-foreground mb-2">
                {section.title}
              </h3>
              <p className="text-muted-foreground">{section.description}</p>
            </div>
          ))}

          <div>
            <h3 className="text-xl font-display text-foreground mb-2">SEO</h3>
            <p className="text-muted-foreground mb-4">
              SEO was treated as part of the website architecture rather than an
              afterthought.
            </p>
            <p className="text-muted-foreground mb-4">
              The structure supports:
            </p>
            <ul className="sm:columns-2 gap-x-8 mb-4 border-l-2 border-primary/30 pl-4">
              {seoPoints.map((point) => (
                <li
                  key={point}
                  className="mb-2 break-inside-avoid text-sm text-muted-foreground"
                >
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              The goal is to create multiple useful entry points for homeowners
              searching for painting-related information and services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display text-foreground mb-2">
              Forms &amp; Integrations
            </h3>
            <div className="text-muted-foreground space-y-4">
              <p>
                Lead-generation forms and supporting integrations connect the
                website experience to the business workflow, allowing visitors
                to move from discovering a service or estimating a cost toward
                requesting a quote.
              </p>
              <p>
                The integration layer is kept separate from the presentation
                layer so that individual services can evolve without requiring
                changes throughout the website.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-display text-foreground mb-2">
              Deployment
            </h3>
            <p className="text-muted-foreground">
              The application is deployed to production using a modern Next.js
              deployment workflow, with the infrastructure designed to remain
              lightweight while supporting continued development and content
              expansion.
            </p>
          </div>
        </div>
      </Container>

      <Container
        id="result"
        component="section"
        wrapperClassName="py-16"
        className="mx-auto max-w-5xl"
      >
        <h2 className="text-2xl font-display text-foreground mb-2">Result</h2>
        <div className="space-y-4 text-muted-foreground mb-8">
          <p>
            PaintMyHome is now a production-ready marketing and lead-generation
            website built around a scalable content and SEO strategy.
          </p>
          <p>
            It combines service discovery, painting-cost information and
            quote-generation flows into a single responsive experience, while
            providing a foundation for expanding the site&apos;s organic search
            presence over time.
          </p>
        </div>
        <Link
          href="https://paintmyhome.in"
          target="_blank"
          rel="noopener noreferrer"
          className={cn("uppercase", buttonVariants({ size: "lg" }))}
        >
          Visit PaintMyHome <ArrowRight className="size-4" />
        </Link>
      </Container>
    </>
  );
}
