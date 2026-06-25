import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="loader-text"
        initial={{
          scale: 0.7,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        SILVER
        <span> STAR</span>
      </motion.h1>

      <motion.p
        className="loader-sub"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.7,
          duration: 1,
        }}
      >
        MERN STACK DEVELOPER
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;