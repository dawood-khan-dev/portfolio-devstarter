import { Container } from "@/components/zippystarter/container";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Container
        component="div"
        wrapperClassName="pt-16"
        className="mx-auto max-w-5xl md:hidden flex items-center h-16 border-b border-border"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="size-4" />
          BACK TO WORK
        </Link>
      </Container>
      {children}
    </>
  );
}
