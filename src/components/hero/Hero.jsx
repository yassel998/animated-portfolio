import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Yassine El Aissati</motion.h2>
          <motion.h1 variants={textVariants}>
            Motivierter Full-Stack Webentwickler sucht Ausbildung als
            Fachinformatiker für Anwendungsentwicklung
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <motion.a href="#Portfolio" variants={textVariants}>
                Siehe meine Projekte
              </motion.a>
            </motion.button>
            <motion.button variants={textVariants}>
              <motion.a href="#Kontakt" variants={textVariants}>
                Kontaktiere mich
              </motion.a>
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Ausbildung Bewerber Fachinformatiker Anwendungsentwicklung
      </motion.div>
      <div className="imageContainer">
        <img src="/image.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
