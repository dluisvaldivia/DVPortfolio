import React from "react";
import { Link } from "react-router-dom";
import "../../styles/_navbar.scss";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <button className="item" onClick={() => scrollToSection("projects")}>Projects</button>
      <button className="item" onClick={() => scrollToSection("contact")}>Contact</button>
      <Link to="/rates" className="item">Rates</Link>
      <ThemeToggle />
    </nav>
  );
}
