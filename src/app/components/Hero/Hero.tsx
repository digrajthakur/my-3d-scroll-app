'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import './Hero.css';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden text-white bg-black px-4 sm:px-6 md:px-8 pt-[250px] hero-banner"
    >
      {/* Deep radial + gradient background effect */}
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-gray-900 opacity-90 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 z-0" />

      {/* Optional glow or visual accent */}
      <div className="absolute top-1/2 left-1/2 w-[100%] h-[150vw] max-w-none -translate-x-1/2 -translate-y-1/2 bg-indigo-900 opacity-10 rounded-full blur-3xl z-0" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center text-center max-w-4xl mx-auto h-full">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
        >
          Crafting Modern Web Experiences
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 drop-shadow-md"
        >
          I'm a web developer specializing in building responsive, user-friendly websites using React, Shopify, WordPress, and modern front-end technologies.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Link href="#contact">
            <button className="button mt-[30px] bg-blue-600 hover:bg-blue-700 px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg">
             Let’s Build Together
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
