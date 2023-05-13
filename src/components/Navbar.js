import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { RiMenu5Fill } from "react-icons/ri";
import "../style/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/sigmacode.png" alt="Logo" />
          </Link>
        </div>
        <div
          className={`navbar-links ${isOpen ? "active" : ""}`}
          isOpen={isOpen}
        >
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        <div className="navbar-icons">
          <a
            href="https://www.linkedin.com/in/prajwal-shindee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon linkedin" />
          </a>
          <a
            href="https://twitter.com/Prajwal_shindee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon twitter" />
          </a>
          <a
            href="mailto:prajwalshindeee@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="icon email" />
          </a>
        </div>
        <div className="navbar-toggle">
          <RiMenu5Fill onClick={toggleMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
