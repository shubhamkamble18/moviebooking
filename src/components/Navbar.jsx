import { useEffect, useRef, useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import popcornLogo from "../images/popcorn-logo-transparent.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <Link
        className="logo"
        to="/"
        aria-label="TicketDada home"
        onClick={() => setMenuOpen(false)}
      >
        <img className="nav-logo-image" src={popcornLogo} alt="" />
        Ticket<span>Dada</span>
      </Link>

      <div
        className={`nav-links${menuOpen ? " is-open" : ""}`}
        id="primary-navigation"
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/movies" onClick={() => setMenuOpen(false)}>Movies</Link>
        <Link to="/discount" onClick={() => setMenuOpen(false)}>Discount</Link>
        <Link to="/bookings" onClick={() => setMenuOpen(false)}>My Bookings</Link>
        <Link
          to="/login"
          className="mobile-login-link"
          onClick={() => setMenuOpen(false)}
        >
          Login
        </Link>
      </div>

      <div className="nav-right">
        <FaSearch className="nav-search-icon" aria-hidden="true" />
        <Link to="/login" className="login-nav-btn">
          Login
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          className="nav-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;