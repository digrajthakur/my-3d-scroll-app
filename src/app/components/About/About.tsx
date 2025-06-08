'use client';

import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 flex items-center gap-8"
    >
      {/* Left: Person Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center about-image"
      >
        <img
          src="/deepanshu-thakur.jpeg"
          alt="Person's portrait"
          className="rounded-lg shadow-lg max-w-xs sm:max-w-sm object-cover"
        />
      </motion.div>

      {/* Right: Title and Description */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full md:w-1/2 about-content"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-4">Frontend Web Developer</h3>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I am passionate about crafting immersive digital experiences that combine creativity and
          technology. With expertise in AI integration, 3D animations, and interactive web design,
          I aim to bring innovative solutions to life and push the boundaries of modern web development.
        </p>
        <a
          href="/Deepanshu-Resume.pdf"
          download
          className="button inline-block bg-gray-800 hover:bg-gray-700 px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold text-white transition-all duration-300 shadow-md mb-4"
        >
          Download CV
        </a>
      </motion.div>

    </section>
  );
}
