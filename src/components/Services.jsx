import { motion } from "framer-motion";
import {
  FiCode,
  FiShoppingCart,
  FiLayout,
  FiDatabase,
  FiGlobe,
  FiSmartphone,
} from "react-icons/fi";

const services = [
  {
    icon: <FiCode />,
    title: "MERN Development",
    desc:
      "Modern MERN stack web applications with clean UI and smooth performance.",
  },

  {
    icon: <FiShoppingCart />,
    title: "Ecommerce Website",
    desc:
      "Professional ecommerce websites with admin panel and product management.",
  },

  {
    icon: <FiLayout />,
    title: "Portfolio Website",
    desc:
      "Premium personal portfolio websites with animations and modern UI.",
  },

  {
    icon: <FiDatabase />,
    title: "Backend Development",
    desc:
      "REST APIs using Node.js, Django, MySQL and MongoDB.",
  },

  {
    icon: <FiGlobe />,
    title: "Responsive Design",
    desc:
      "Fully responsive websites for mobile, tablet and desktop.",
  },

  {
    icon: <FiSmartphone />,
    title: "Modern UI/UX",
    desc:
      "Beautiful interfaces with premium animations and smooth user experience.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="services-section"
    >
      <motion.div
        className="services-header"
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
        <p className="services-tag">
          MY SERVICES
        </p>

        <h2>
          What I
          <span> Offer</span>
        </h2>

        <p>
          I create premium web
          experiences using modern
          technologies and clean UI.
        </p>
      </motion.div>

      <div className="services-grid">
        {services.map(
          (service, index) => (
            <motion.div
              key={index}
              className="service-card"
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
                scale: 1.03,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.desc}
              </p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;