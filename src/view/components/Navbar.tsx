import { FaHome } from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNav = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(section), 300);
    } else {
      scrollToSection(section);
    }
  };

  return (
    <nav>
      <button className="nav-item" onClick={() => handleNav("projects")}>
        Projects
      </button>
      <button className="nav-item" onClick={() => handleNav("contact")}>
        Contact
      </button>
      <div className="nav-item dropdown">
        <span>Free Tools</span>
        <div className="dropdown-content">
          <Link to="/free-tools/accessibility-checker" className="dropdown-link">Accessibility Checker</Link>
        </div>
      </div>
      <Link to="/rates" className="nav-item">
        Rates
      </Link>
      <Link to="/" className="nav-item">
        <FaHome style={{ fontSize: '1.5rem', marginBottom: '-4px' }} />
      </Link>
      <ThemeToggle />
    </nav>
  );
}
