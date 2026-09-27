import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <h2>
            Cine<span>Book</span>
          </h2>

          <p>
            Your simple way to discover movies,
            choose your seats, and book tickets.
          </p>

          <div className="footer-socials">

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/movies">Movies</Link>

          <Link to="/discount">Discounts</Link>

          <Link to="/bookings">My Bookings</Link>

        </div>

        {/* Categories */}

        <div className="footer-column">

          <h3>Categories</h3>

          <Link to="/movies">Action</Link>

          <Link to="/movies">Comedy</Link>

          <Link to="/movies">Drama</Link>

          <Link to="/movies">Sci-Fi</Link>

        </div>

        {/* Support */}

        <div className="footer-column">

          <h3>Support</h3>

          <a href="#">Contact Us</a>

          <a href="#">Help Center</a>

          <a href="#">Terms & Conditions</a>

          <a href="#">Privacy Policy</a>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © 2026 CineBook. All rights reserved.
        </p>


      </div>

    </footer>
  );
}

export default Footer;