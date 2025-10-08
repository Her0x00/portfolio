"use client";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left side - name */}
        <div className="font-semibold text-primary text-[17px] -translate-x-5 select-none">Her0x Portfolio</div>

        {/* Right side - links */}
        <div className="flex items-center gap-8 translate-x-6">
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
      </div>

      {/* Line under navbar */}
      <hr className="border-gray-200" />
    </nav>
  );
}
