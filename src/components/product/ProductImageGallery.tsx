"use client";

import { useState } from "react";

type ProductImageGalleryProps = {
  images: string[];
  alt: string;
};

export function ProductImageGallery({ images, alt }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-4/3 overflow-hidden rounded-[14px] bg-bg-alt">
        <img
          src={images[activeIndex]}
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
              className={`shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-colors duration-300 ${
                index === activeIndex
                  ? "border-foreground"
                  : "border-transparent hover:border-birch-deep"
              }`}
            >
              <img
                src={image}
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
