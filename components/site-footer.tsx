import { Container } from "@/components/zippystarter/container";
import Link from "next/link";

export function SiteFooter() {
  return (
    <Container
      component="footer"
      className="py-8 border-t border-border bg-background text-center max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} DAWOOD KHAN. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6 text-xs font-mono text-muted-foreground">
          <Link
            href="https://github.com/dawood-khan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GITHUB
          </Link>
          <Link
            href="https://www.linkedin.com/in/thedawoodkhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LINKEDIN
          </Link>
        </div>
      </div>
    </Container>
  );
}
