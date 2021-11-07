import React, { useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';

import { useDispatch } from 'react-redux';

import { getTasks } from './actions/tasks' //3-redux

function App() {

  const dispatch = useDispatch();  //3-redux

  useEffect(() => {        //3-redux
    dispatch(getTasks())            //3-redux
  }, [dispatch]);                //3-redux 

  return (
    <>
      <Todo />
    </>
  );
}

export default App;
