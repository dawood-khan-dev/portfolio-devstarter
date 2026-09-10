import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import { ScrollSpyNav } from "@/components/scroll-spy-nav";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "projects", label: "Work" },
  { id: "what-i-do", label: "What I Do" },
  { id: "about", label: "About" },
  { id: "skills", label: "Technology" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <Container
      component="header"
      wrapperClassName="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      className="mx-auto max-w-7xl flex items-center justify-between h-16 uppercase"
    >
      <Link
        href="/"
        className="flex items-center gap-2 text-3xl font-bold font-mono tracking-tighter"
      >
        <span
          role="img"
          aria-label="Logo"
          className="inline-block h-6 aspect-2436/1216 bg-foreground"
          style={{
            WebkitMaskImage: "url(/logo.svg)",
            maskImage: "url(/logo.svg)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
        <span>
          Dawood<span className="text-primary">_</span>Khan
        </span>
      </Link>
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <ScrollSpyNav items={navItems} basePath="/" />
      </nav>
      <Link
        href="mailto:hello@khan.life"
        className={cn(
          "font-mono text-xs border-primary/50 hover:bg-primary/10! hover:text-primary! hover:border-primary!",
          buttonVariants({ variant: "outline" }),
        )}
      >
        <span className="hidden sm:inline">Let&apos;s Talk</span>
        <Mail className="size-3 sm:hidden" />
        <ArrowRight className="hidden sm:inline size-3" />
      </Link>
    </Container>
  );
}
