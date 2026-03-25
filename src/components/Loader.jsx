import { motion } from 'framer-motion';

const Loader = () => {
  const nameChars = "Nitin Tyagi".split("");
  const welcomeChars = "Welcome to my portfolio".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1a1a1a]"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <div className="flex">
          {nameChars.map((char, index) => (
            <motion.h1 
              key={index}
              className="text-[#c9a961] text-6xl md:text-8xl"
              style={{ fontFamily: "'Tangerine', cursive" }}
              variants={charVariants}
            >
              {char === " " ? "\u00A0" : char}
            </motion.h1>
          ))}
        </div>
        
        <motion.div 
          className="flex mt-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 1.2 } }
          }}
        >
          {welcomeChars.map((char, index) => (
            <motion.p
              key={index}
              className="text-[#e8e8e8] text-sm md:text-lg tracking-widest uppercase font-serif"
              variants={charVariants}
            >
              {char === " " ? "\u00A0" : char}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
