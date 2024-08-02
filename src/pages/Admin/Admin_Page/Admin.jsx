// Admin.js

import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

const Admin = ({ children }) => {
  const location = useLocation();

  // Define your menu items
  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Users", path: "/users" },
    { name: "Locations", path: "/locations" },
    { name: "Hostel Forms", path: "/hostelforms" },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <div className={styles.logo}>
            <img src="Hostel_Logo.png" alt="Hostel Logo" />
          </div>
          <div className={styles.menu}>
            {menuItems.map((menuItem, index) => (
              <div
                key={index}
                className={`${styles.menuItem} ${
                  location.pathname === menuItem.path ? styles.active : ""
                }`}
              >
                <Link to={menuItem.path}>{menuItem.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <img src="Bell_Notification.png" alt="Bell Notification" />
              <Link to="/admin">Admin</Link>
            </div>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
