import { Close, Menu } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/95 c dark:border-gray-800 dark:bg-[#070B22]/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600">
          <span className="text-green-600 font-bold font-">TRM</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            className="font-medium text-white transition hover:text-green-600 dark:text-gray-200 dark:hover:text-blue-400"
            onClick={() => scrollToSection("home")}
          >
            Home
          </Link>

          <Link
            className="font-medium text-white transition hover:text-green-600 dark:text-gray-200 dark:hover:text-blue-400"
            onClick={() => scrollToSection("about")}
          >
            About
          </Link>

          <Link
            className="font-medium text-white transition hover:text-green-600 dark:text-gray-200 dark:hover:text-blue-400"
            onClick={() => scrollToSection("project")}
          >
            My Projects
          </Link>

          <Link
            className="rounded-lg px-5 py-2.5 font-medium text-white transition hover:text-green-700"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Link>
        </div>

        {/* Mobile view*/}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-white hover:bg-gray-100 md:hidden dark:text-white dark:hover:bg-gray-800"
        >
          {menuOpen ? (
            <span className="text-2xl">
              <Close className="text-gray-400" />
            </span>
          ) : (
            <span className="text-2xl">
              <Menu className=" text-gray-400" />
            </span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden dark:border-gray-800 dark:bg-[#070B22]">
          <div ref={dropdownRef} className="flex flex-col gap-3">
            <Link
              onClick={() => {
                setMenuOpen(false);
                scrollToSection("home");
              }}
              className="rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Home
            </Link>

            <Link
              onClick={() => {
                setMenuOpen(false);
                scrollToSection("about");
              }}
              className="rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              About
            </Link>

            <Link
              onClick={() => {
                setMenuOpen(false);
                scrollToSection("project");
              }}
              className="rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              My Projects
            </Link>

            <Link
              onClick={() => {
                setMenuOpen(false);
                scrollToSection("contact");
              }}
              className="rounded-lg  px-4 py-3 text-center font-medium text-white hover:bg-blue-700"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
