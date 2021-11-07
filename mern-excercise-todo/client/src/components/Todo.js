import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTask } from '../actions/tasks';
import '../App.css';

export default function Todo() {

    const tasks = useSelector((state) => state.tasks);
    console.log(tasks);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createTask(value));
        setValue('')
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <div className="container">
                <h3>TODO App</h3>
                <form onSubmit={handleSubmit} >
                    <label>
                        Task:
                        <input type="text" onChange={handleChange} value={value} />
                    </label>
                    <input type="submit" value='Add' />
                </form>
                <div className="tasks">
                    <div className="task">
                        <p>siema</p>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
        </>
    )
}
