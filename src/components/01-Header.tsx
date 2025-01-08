import { useState } from "react";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-dark-pink p-4 flex justify-between items-center shadow-md fixed w-full z-50 font-jost">
      <h1 className="text-white text-2xl font-bold">My Portfolio</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4">
        <button onClick={toggleSidebar} className="text-white hover:underline">
          About Me
        </button>
        <a href="#hero" className="text-white hover:underline">
          Hero
        </a>
        <a href="#skills" className="text-white hover:underline">
          Skills
        </a>
        <a href="#portofolio" className="text-white hover:underline">
          Portfolio
        </a>
        <a href="#experience" className="text-white hover:underline">
          Experience
        </a>
        <a href="#testimonial" className="text-white hover:underline">
          Testimonial
        </a>
        <a href="#contact" className="text-white hover:underline">
          Contact
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="text-white text-2xl md:hidden focus:outline-none"
      >
        ☰
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-dark-pink shadow-md z-40 md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4">
            <button
              onClick={() => {
                toggleSidebar();
                setIsMenuOpen(false);
              }}
              className="text-white hover:underline"
            >
              About Me
            </button>
            <a
              href="#hero"
              className="text-white hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Hero
            </a>
            <a
              href="#skills"
              className="text-white hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#portofolio"
              className="text-white hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#experience"
              className="text-white hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#testimonial"
              className="text-white hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonial
            </a>
            <a
              href="#contact"
              className="text-white hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
