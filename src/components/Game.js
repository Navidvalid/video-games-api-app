import React from 'react';
//Styling and Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Game({ game }) {
  return (
    <StyledGame>
      <h3>{game.name}</h3>
      <p>{game.released}</p>
      <img src={game.background_image} alt={game.name} />
    </StyledGame>
  );
}

export default Game;

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
