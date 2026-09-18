import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        Ticket<span>Dada</span>
      </h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/discount">Discount</Link>
        <Link to="/bookings">My Bookings</Link>
      </div>

      <div className="nav-right">
        <FaSearch />

     <Link to="/login" className="login-nav-btn">
      Login
    </Link>
      </div>
    </nav>
  );
}

export default Navbar;