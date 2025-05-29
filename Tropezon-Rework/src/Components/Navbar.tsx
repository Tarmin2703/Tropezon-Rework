import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const Nav = styled.nav`
  background: #222;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    color: #ffcc00;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <motion.div whileHover={{ scale: 1.1 }}>
        <StyledLink to="/">Inicio</StyledLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <StyledLink to="/about">Sobre Nosotros</StyledLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <StyledLink to="/contact">Contacto</StyledLink>
      </motion.div>
    </Nav>
  );
};

export default Navbar;