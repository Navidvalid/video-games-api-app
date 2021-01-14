import React from 'react';
//Styling and Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';
import { popup } from '../animations';

function Game({ game }) {
  const stringPathId = game.id.toString();
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(game.id));
  };

  return (
    <StyledGame
      variants={popup}
      initial='hidden'
      animate='show'
      layoutId={stringPathId}
      onClick={loadDetailHandler}>
      <Link to={`/game/${game.id}`}>
        <div className='test'>
          <motion.h3 layoutId={`title ${stringPathId}`}>{game.name}</motion.h3>
          <p>{game.released}</p>
          <motion.img
            layoutId={`image ${stringPathId}`}
            src={smallImage(game.background_image, 640)}
            alt={game.name}
          />
        </div>
      </Link>
    </StyledGame>
  );
}

export default Game;

const StyledGame = styled(motion.div)`
  min-height: 25vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  margin: 1rem 1rem;
  min-width: 20rem;
  cursor: pointer;
  overflow: hidden;
  .test {
    max-width: 32rem;
  }

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
