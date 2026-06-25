import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    {
      number: "3+",
      text: "Projects Completed",
    },
    {
      number: "10+",
      text: "Technologies",
    },
    {
      number: "100%",
      text: "Responsive Design",
    },
    {
      number: "24/7",
      text: "Learning Mindset",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: i * 0.2,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2>
              {item.number}
            </h2>

            <p>
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;