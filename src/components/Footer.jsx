import { motion } from "framer-motion";
import {
  FiGithub,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <h2>
          Silver
          <span> Star</span>
        </h2>

        <p>
          MERN Stack Developer |
          Building premium web
          experiences with modern
          UI & smooth animations.
        </p>

        <div className="footer-socials">

          {/* GitHub */}
          <a
            href="https://github.com/silverstar0134-ux"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/silver_star_013/?__pwa=1"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>

          {/* Gmail */}
          <a href="mailto:silverstar0134@gmail.com">
            <FiMail />
          </a>

        </div>

        <p className="copyright">
          © 2026 Silver Star.
          All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;