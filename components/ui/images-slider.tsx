/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { cubicBezier } from "motion";
import React, { useCallback, useEffect, useState } from "react";

type Direction = "up" | "down";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: boolean;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: Direction;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const loadImages = useCallback(() => {
    const loadPromises = images.map(
      (image) =>
        new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve(image);
          img.onerror = reject;
        }),
    );

    Promise.all(loadPromises)
      .then((imgs) => setLoadedImages(imgs))
      .catch((err) => console.error("Failed to load images", err));
  }, [images]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      else if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: ReturnType<typeof setInterval> | undefined;
    if (autoplay) {
      interval = setInterval(() => handleNext(), 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious]);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        // Motion (not Framer) uses `easing` instead of `ease`
        easing: cubicBezier(0.645, 0.045, 0.355, 1.0),
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: { duration: 0.3 },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: { duration: 0.3 },
    },
  } as const;

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden [perspective:1000px]",
        className,
      )}
    >
      {areImagesLoaded && children}

      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 z-40 bg-white/40", overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image absolute inset-0 h-full w-full object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};
