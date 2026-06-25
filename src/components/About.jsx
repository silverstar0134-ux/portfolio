import { motion } from "framer-motion";
import {
  FiCode,
  FiMonitor,
  FiLayers,
} from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="about-section"
    >
      <div className="about-container">

        {/* Left Side */}
        <motion.div
          className="about-left"
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <p className="about-tag">
            ABOUT ME
          </p>

          <h2>
            Crafting Digital
            <span> Experiences</span>
          </h2>

          <p className="about-desc">
            I'm a passionate MERN Stack
            Developer who loves building
            modern, animated and premium
            websites. I focus on creating
            scalable web applications with
            clean UI, smooth interactions
            and real-world performance.
          </p>

          <div className="experience-box">
            <h3>1+</h3>
            <p>
              Years of Learning &
              Building Projects
            </p>
          </div>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          className="about-right"
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="premium-card"
          >
            <FiCode className="icon" />

            <h3>
              Clean Development
            </h3>

            <p>
              Scalable MERN stack
              applications with
              optimized performance.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="premium-card"
          >
            <FiMonitor className="icon" />

            <h3>
              Premium UI Design
            </h3>

            <p>
              Beautiful modern designs
              with smooth interactions
              and animations.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="premium-card"
          >
            <FiLayers className="icon" />

            <h3>
              Full Stack Skills
            </h3>

            <p>
              React, Node.js, MongoDB,
              Express and Python
              development.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;