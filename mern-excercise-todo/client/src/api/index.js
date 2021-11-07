import axios from 'axios';

const url = 'http://localhost:8080';

export const fetchTasks = () => axios.get(url);
export const createTask = (newTask) => axios.post(url, newTask);