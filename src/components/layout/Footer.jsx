import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.main}>
      <div className={styles.content}>
        <p>© 2025 My Library System</p>
        <div className={styles.buttons}>
          <button onClick={() => (window.location.href = "/")}>Home</button>
          <button onClick={() => (window.location.href = "/about")}>
            About
          </button>
          <button onClick={() => (window.location.href = "/contact")}>
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
