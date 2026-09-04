import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground ">
        <Link
          href="/#projects"
          className="hover:text-primary transition-colors"
        >
          Work
        </Link>
        <Link
          href="/#what-i-do"
          className="hover:text-primary transition-colors"
        >
          What I Do
        </Link>
        <Link href="/#about" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link href="/#skills" className="hover:text-primary transition-colors">
          Technology
        </Link>
        <Link href="/#contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
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
