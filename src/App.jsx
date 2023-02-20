import { useState, useRef } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import MyContext from './context/MyContext';
import { updateCounter } from './store/tempSlice';

function App() {
  const dispatch = useDispatch();
  const mainRef = useRef(null);

  const { theme, maincolor, counter } = useSelector((state) => state.temporary);

  const counterPlusFunc = () => {
    dispatch(updateCounter(counter + 1));
  };
  const counterMinusFunc = () => {
    dispatch(updateCounter(counter - 1));
  };

  return (
    <div className="App">
      <div className="card">
        <button onClick={counterMinusFunc}>decrease -</button>
        <button>{count}</button>
        <button onClick={counterPlusFunc}>increase +</button>
      </div>
    </div>
  );
}

export default App;
