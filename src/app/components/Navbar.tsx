"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 50 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left side - name */}
        <div className="font-semibold text-primary text-[17px] select-none transition-transform max-sm:translate-x-3">
          Her0x Portfolio
        </div>

        {/* Right side - Desktop links */}
        <div className="hidden md:flex items-center gap-8 relative transition-transform md:-translate-x-3 lg:translate-x-0">
          <a
            href="#about"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="https://github.com/her0x00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-black hover:bg-gray-800 transition-colors px-4 py-2 rounded-md text-sm font-medium"
          >
            GitHub
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-primary transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40, y: -10 }}
            animate={{ opacity: 1, x: 20, y: 0 }}
            exit={{ opacity: 0, x: 50, y: -20 }}
            transition={{ duration: 0.05, ease: "easeOut" }}
            className="absolute right-4 mt-2 w-48 md:hidden bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            <div className="flex flex-col space-y-2 px-6 py-4 gap-4">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="https://github.com/her0x00"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="text-white bg-black hover:bg-gray-800 transition-colors px-4 py-2 rounded-md text-sm font-medium text-center"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Line under navbar */}
      <hr className="border-gray-200" />
    </motion.nav>
  );
}
