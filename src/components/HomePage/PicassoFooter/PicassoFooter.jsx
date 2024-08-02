// PicassoFooter.js
import React from "react";
import styles from "./PicassoFooter.module.css";
import { Link } from "react-router-dom";

const PicassoFooter = () => {
  return (
    <footer className={styles.footer}>
      <footer id="picassoFooter" className={styles.picassoFooter}>
        <div className={styles.footerNavigation}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul className={styles.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/bookings">Rooms</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerContact}>
          <h3>Contact Us</h3>
          <p>Email: smitdesai@gmail.com</p>
          <p>Phone: +91 9687155397</p>
        </div>
        <div className={styles.footerSocial}>
          <h3 className={styles.follow}>Follow Us</h3>
          <div className={styles.socialIcons}>
            {/* eslint-disable */}
            <a
              href="https://facebook.com"
              target="_blank"
              className={styles.socialIcon}
            >
              <img src="Instagram_Icon.png" alt="Instagram_Icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className={styles.socialIcon}
            >
              <img src="Linkedin_Icon.png" alt="Linkedin_Icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className={styles.socialIcon}
            >
              <img src="Twitter_Icon.png" alt="Twitter_Icon" />
            </a>
          </div>
        </div>
        <div className={styles.footerArt}>
          <img src="Hostel_Logo.png " alt="Hostel_Logo" />
        </div>
      </footer>
    </footer>
  );
};

export default PicassoFooter;
