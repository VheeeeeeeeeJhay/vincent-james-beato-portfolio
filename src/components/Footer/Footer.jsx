import styles from "./Footer.module.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaMapPin
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import onlinejobs from "../../assets/onlinejobs.jpeg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        {/* Personal / Brand */}
        <div className={styles.block}>
          <h2 className={styles.brand}>Vincent James Beato</h2>
          <p className={styles.tagline}>Crafting clean, creative, and modern digital experiences.</p>
        </div>

        {/* Quick Nav Links */}
        <div className={styles.block}>
          <h4>QUICK LINKS</h4>
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>

        {/* Contact Info */}
        <div className={styles.block}>
          <h4>CONTACT</h4>
          <p><FaPhoneAlt style={{color: "#bb86fc"}} /> +63 928 071 5822</p>
          <a href="mailto:vheebhee7@gmail.com"><FaEnvelope /> vheebhee7@gmail.com</a>
          <p><FaMapPin style={{color: "#bb86fc"}} /> Based in Itogon, Benguet and Baguio City, Philippines</p>
        </div>

        {/* Social Media */}
        <div className={styles.block}>
          <h4>FOLLOW</h4>
          <div className={styles.socials}>
            <a href="https://github.com/vheebhee7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/vheebhee7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <img src={onlinejobs} alt="onlinejobs" className={styles.about_img}/>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Vincent James Beato. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
