"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

export function HeroSection() {
  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
  ];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center w-2xs h-36 lg:w-2xl lg:h-52 bg-white/80 rounded-xl border-1 border-neutral-600"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-600 py-4">
          Pensiunea Aybo <br /> Hotel Agigea
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
