"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CaseStudyAccordionItem {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

export function CaseStudyAccordion({
  items,
}: {
  items: CaseStudyAccordionItem[];
}) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="border border-border bg-card px-6 md:px-8"
        >
          <AccordionTrigger className="py-6 hover:no-underline">
            <span className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-primary">
                {item.number}
              </span>{" "}
              <span className="text-xl font-display text-foreground">
                {item.title}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
