import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPython,
  SiMysql,
  SiSqlite,
  SiDjango,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  {
    name: "React JS",
    icon: <SiReact />,
  },
  {
    name: "Node JS",
    icon: <SiNodedotjs />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Express JS",
    icon: <SiExpress />,
  },
  {
    name: "Python",
    icon: <SiPython />,
  },
  {
    name: "Django",
    icon: <SiDjango />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "SQLite",
    icon: <SiSqlite />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-section"
    >
      <motion.div
        className="skills-header"
        initial={{
          opacity: 0,
          y: 80,
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
        <p className="skills-tag">
          MY SKILLS
        </p>

        <h2>
          Technologies I
          <span> Work With</span>
        </h2>

        <p>
          I build scalable full-stack
          applications using modern
          technologies and tools.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skills.map(
          (skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>
                {skill.name}
              </h3>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default Skills;