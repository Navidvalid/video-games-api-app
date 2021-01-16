import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../actions/gamesAction';
import { fadeIn } from '../animations';

function Nav() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };

  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCH' });
  };

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={clearSearched}>
        <img src={logo} alt='logo' />
      </Logo>
      <form className='search'>
        <input
          placeholder='Search...'
          value={textInput}
          onChange={inputHandler}
          type='text'
        />
        <button onClick={submitSearch} type='submit'>
          Search
        </button>
      </form>
    </StyledNav>
  );
}

export default Nav;

const StyledNav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dcdcdc;
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32rem;
    padding: 1rem 0.5rem;
    @media (max-width: 700px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20rem;
    }
  }
  input {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    outline: none;
  }
  button {
    font-size: 1rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
