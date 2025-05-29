import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1>Bienvenido a Tropezón</h1>
      <p>Explora nuestro nuevo diseño interactivo.</p>
    </motion.div>
  );
};

export default Home;
