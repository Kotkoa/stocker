"use client";

import { useState } from "react";
import { assetPath } from "@/lib/assets";

type ProductImageGalleryProps = {
  images: string[];
  alt: string;
};

export function ProductImageGallery({ images, alt }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-foreground/5">
        <img
          src={assetPath(images[activeIndex])}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition-colors ${
                index === activeIndex
                  ? "border-foreground"
                  : "border-transparent hover:border-border"
              }`}
            >
              <img
                src={assetPath(image)}
                alt={`${alt} — ${index + 1}`}
                className="h-20 w-20 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
