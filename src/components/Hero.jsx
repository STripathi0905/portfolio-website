// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiArrowDown } from "react-icons/hi";
import profilePic from "../assets/profile.jpg"; // <-- put your image here

const container = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 14 },
  },
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-[#061022] to-[#03050b]"
    >
      {/* Decorative background blobs (subtle) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-8 top-20 w-64 h-64 bg-cyan-500/6 rounded-full blur-3xl animate-float" />
        <div
          className="absolute right-8 bottom-16 w-96 h-96 bg-violet-500/6 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.2s" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Text */}
          <motion.div variants={item} className="space-y-6">
            <div className="text-teal-300 font-mono text-sm">
              Hi, my name is
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Shashank Tripathi
            </h1>

            <h2 className="text-2xl sm:text-3xl text-cyan-300 font-semibold">
              Full Stack Web Developer — MERN &amp; NEXT.JS
            </h2>

            <p className="text-gray-300 max-w-xl leading-relaxed">
              I build fast, accessible, and maintainable web applications.
              Frontend with React &amp; Tailwind, production APIs with
              Node/Express.js, containerized deployments and cloud-ready
              infrastructure.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="mailto:stripathi0905@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-medium shadow hover:scale-105 transition-transform"
                aria-label="Email Shashank"
              >
                <HiMail className="w-5 h-5" />
                <span>Get in touch</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-700 text-gray-200 hover:bg-gray-800 transition-colors"
              >
                Download Resume
              </a>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://github.com/STripathi0905"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shashank-tripathi09/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Profile image + decorative rings */}
          <motion.div
            variants={item}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border border-white/6 transform scale-105" />
                <div className="absolute w-5/6 h-5/6 rounded-full border border-cyan-400/12 transform rotate-6" />
                <div className="absolute w-4/6 h-4/6 rounded-full border border-violet-400/10 transform rotate-12" />
              </div>

              {/* image */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-2 border-white/6">
                <img
                  src={profilePic}
                  alt="Shashank Tripathi — profile"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 10%" }} // 50% = center horizontally, 30% = little up
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.button
          onClick={() => {
            const el = document.getElementById("about");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 flex flex-col items-center gap-2"
          aria-label="Scroll to about"
        >
          <span className="text-xs font-mono">Scroll to explore</span>
          <HiArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}
