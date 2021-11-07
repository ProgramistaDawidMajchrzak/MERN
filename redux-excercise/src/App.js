import React from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './actions'

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLoggedReducer);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      {isLogged ? <h2>Logged In</h2> : null}
    </>
  );
}

export default App;
