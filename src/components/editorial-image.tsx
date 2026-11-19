"use client";

import Image from "next/image";
import { useState } from "react";

interface EditorialImageProps {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/** The reference photography lives on the original image host; bundled crops ensure graceful offline fallback. */
export function EditorialImage({ src, fallback, alt, className = "", priority, sizes = "(max-width: 640px) 100vw, 33vw" }: EditorialImageProps) {
  const [failed, setFailed] = useState(false);
  return (
    <Image
      src={failed ? fallback : src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
