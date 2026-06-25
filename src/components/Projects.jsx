import { useState } from "react";
import { motion } from "framer-motion";

// assets
import fishmartVideo from "../assets/projects/fishmart.mp4";
import farmerImage from "../assets/projects/farmerapp.png";
import sweetkaramVideo from "../assets/projects/sweetkaram.mp4";

const projects = [
  {
    title: "Online Fish Mart",
    desc:
      "Modern fish ordering ecommerce platform.",
    image: fishmartVideo,
    type: "video",

    github:
      "https://github.com/silverstar0134-ux/Fishmart-project",
  },

  {
    title: "Farmer Worker App",
    desc:
      "Farmers and workers platform.",
    image: farmerImage,
    type: "image",

    github:
      "https://github.com/silverstar0134-ux/farmer-worker-app",
  },

  {
    title: "Sweet & Karam",
    desc:
      "Premium sweets ecommerce website.",
    image: sweetkaramVideo,
    type: "video",

    github:
      "https://github.com/silverstar0134-ux/sweet-ecommerce-project",
  },
];

const Projects = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openMedia = (project) => {
    setSelectedMedia(project);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  return (
    <section id="projects" className="projects-section">

      {/* HEADER */}
      <motion.div
        className="project-header"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="project-tag">MY PROJECTS</p>
        <h2>
          Featured <span>Projects</span>
        </h2>
      </motion.div>

      {/* GRID */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
          >
            
            {/* MEDIA (CLICKABLE) */}
            <div
              className="project-media"
              onClick={() => openMedia(project)}
              style={{ cursor: "pointer" }}
            >
              {project.type === "video" ? (
                <video
                  className="project-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={project.image} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              )}
            </div>

            {/* CONTENT */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="project-buttons">
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    View Code
  </a>
</div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* 🔥 FULLSCREEN MODAL */}
      {selectedMedia && (
        <div className="modal-overlay" onClick={closeMedia}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            {selectedMedia.type === "video" ? (
              <video
                autoPlay
                muted
                loop
                controls
                className="modal-media"
              >
                <source
                  src={selectedMedia.image}
                  type="video/mp4"
                />
              </video>
            ) : (
              <img
                src={selectedMedia.image}
                alt={selectedMedia.title}
                className="modal-media"
              />
            )}

            <button className="close-btn" onClick={closeMedia}>
              ✕
            </button>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;