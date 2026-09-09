"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  triggerClassName?: string;
}

export function ZoomableImage({
  src,
  alt,
  width,
  height,
  triggerClassName,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative block w-full cursor-zoom-in overflow-hidden border border-border bg-card shadow-lg text-left",
          triggerClassName,
        )}
      >
        <Image src={src} alt={alt} fill className="object-cover object-top" />
        <div className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all group-hover:bg-background/50 group-hover:opacity-100">
          <Expand className="size-6 text-foreground" />
        </div>
      </button>
      <DialogContent
        className="max-w-[95vw] sm:max-w-[95vw] border-none bg-transparent p-0 shadow-none"
        showCloseButton
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="mx-auto h-auto max-h-[90vh] w-auto max-w-full rounded-lg border border-border"
        />
      </DialogContent>
    </Dialog>
  );
}
