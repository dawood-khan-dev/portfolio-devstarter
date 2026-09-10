import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <Container
      wrapperClassName="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
      className="mx-auto max-w-7xl flex-1"
    >
      <div className="relative z-10 w-full flex justify-center py-16">
        <div className="relative w-full max-w-2xl border border-border/30 bg-card/10 backdrop-blur-sm p-8 md:p-12 text-center">
          <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-primary"></div>
          <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-primary"></div>
          <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-primary"></div>
          <div className="absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-primary"></div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-destructive/30 bg-destructive/5 text-destructive text-xs font-mono mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
            </span>
            SYSTEM ERROR // PAGE NOT FOUND
          </div>

          <div className="font-display text-7xl md:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground mb-4">
            404
          </div>
          <p className="font-mono text-xs text-muted-foreground mb-6">
            ERR_PAGE_NOT_FOUND
          </p>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            The page you&apos;re looking for doesn&apos;t exist or may have
            been moved.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className={cn("uppercase", buttonVariants({ size: "lg" }))}
            >
              <ArrowLeft className="size-4" /> Back home
            </Link>
            <Link
              href="/#projects"
              className={cn(
                "uppercase hover:bg-primary/10! hover:text-primary! hover:border-primary!",
                buttonVariants({ variant: "outline", size: "lg" }),
              )}
            >
              View my work <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
