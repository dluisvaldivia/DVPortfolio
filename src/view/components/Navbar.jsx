import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../styles/_navbar.scss";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNav = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(section), 300);
    } else {
      scrollToSection(section);
    }
  };

  return (
    <nav>
      <button className="item" onClick={() => handleNav("projects")}>
        Projects
      </button>
      <button className="item" onClick={() => handleNav("contact")}>
        Contact
      </button>
      <Link to="/rates" className="item">
        Rates
      </Link>
      <ThemeToggle />
    </nav>
  );
}
