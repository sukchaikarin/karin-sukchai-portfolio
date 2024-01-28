import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { path: "home", name: "home" },
  { path: "skills", name: "skills" },
  { path: "projects", name: "my projects" },
  { path: "contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = () => {
    const scrollPosition = window.scrollY / 4;

    // Check the position of each section
    links.forEach((link) => {
      const sectionId = link.path;
      const section = document.getElementById(sectionId);

      if (section) {
        const { top } = section.getBoundingClientRect();
        if (top < scrollPosition) {
          setActiveLink(sectionId);
        }
      }
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link) => (
        <a
          href={`#${link.path}`}
          onClick={() => scrollToSection(link.path)}
          key={link.name}
          className={`capitalize ${linkStyles}`}
        >
          {activeLink === link.path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
