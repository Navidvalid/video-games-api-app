import React, { useEffect } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
//components
import Game from '../components/Game';
//Styling and Animations
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import GameDetail from '../components/GameDetail';
import { useLocation } from 'react-router-dom';
import { fadeIn } from '../animations';

function Home() {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  //Fetch games
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Pull data from state
  const { popular, newGames, upcoming, loading, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial='hidden' animate='show'>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>

        {searched.length ? (
          <div className='searched'>
            <h2>Searched Games</h2>
            <Games>
              {loading ? (
                <h3>Loading...</h3>
              ) : (
                searched?.map((game) => (
                  <Game loading={loading} key={game.id} game={game} />
                ))
              )}
            </Games>
          </div>
        ) : (
          ''
        )}

        <h2>Upcoming Games</h2>
        <Games>
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            upcoming?.map((game) => (
              <Game loading={loading} key={game.id} game={game} />
            ))
          )}
        </Games>

        <h2>New Games</h2>
        <Games>
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            newGames.map((game) => <Game key={game.id} game={game} />)
          )}
        </Games>

        <h2>Popular Games</h2>
        <Games>
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            popular.map((game) => <Game key={game.id} game={game} />)
          )}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 1rem 0rem;
  background-color: #dcdcdc;
  h2 {
    padding: 2rem 0rem;
    text-align: center;
    background-color: #a9a9a9;
    border-radius: 0.4rem #ff7676;
    @media (max-width: 700px) {
      font-size: 2rem;
    }
  }
`;

const Games = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
`;

export default Home;
