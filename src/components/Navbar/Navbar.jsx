import React, { useState, useEffect } from "react";
import style from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear the token from localStorage or sessionStorage
    localStorage.removeItem("token");
    // Update isLoggedIn state to false
    setIsLoggedIn(false);

    // Display toast message
    toast.success("Logged out successfully!");
    // Navigate to "/" screen
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navbar_container} data-aos="fade-down">
        <div className={style.logo_container}>
          <img
            src="Hostel_Logo.png"
            alt="HostelHub Logo"
            className={style.logo}
            data-aos="zoom-in"
          />
          <span className={style.logo_text} data-aos="fade-right">
            HostelHub
          </span>
        </div>
        <button className={style.toggle_button} onClick={toggleMenu}>
          <span className={style.bar}>Home</span>
          <span className={style.bar}>About</span>
          <span className={style.bar}>Rooms</span>
        </button>
        <div
          className={isOpen ? style.menu_active : style.menu}
          data-aos="fade-down"
        >
          <Link href="/" className={style.nav_link} data-aos="fade-right">
            Home
            <div className={style.line}></div>
          </Link>
          <Link to="/about" className={style.nav_link} data-aos="fade-right">
            About
            <div className={style.line}></div>
          </Link>
          <Link to="/bookings" className={style.nav_link} data-aos="fade-right">
            Rooms
            <div className={style.line}></div>
          </Link>
          <Link
            to="/contact-us"
            className={style.nav_link}
            data-aos="fade-right"
          >
            Contact Us
            <div className={style.line}></div>
          </Link>
          {isLoggedIn ? (
            <button className={style.signup_login} onClick={handleLogout}>
              <Link className={style.link} data-aos="fade-right">
                Logout
              </Link>
            </button>
          ) : (
            <button className={style.signup_login}>
              <Link to="/signup" className={style.link} data-aos="fade-right">
                Signup
              </Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
