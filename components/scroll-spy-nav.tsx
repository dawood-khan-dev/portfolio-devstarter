"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ScrollSpyNavItem {
  id: string;
  label: string;
}

export function ScrollSpyNav({
  items,
  basePath = "",
}: {
  items: ScrollSpyNavItem[];
  basePath?: string;
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 },
    );

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.id}
          href={`${basePath}#${item.id}`}
          className={cn(
            "whitespace-nowrap transition-colors hover:text-primary",
            active === item.id ? "text-primary" : "text-muted-foreground",
          )}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
