import * as api from '../api/index';

export const getTasks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTasks();
        dispatch({ type: 'FETCH', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createTask = (task) => async (dispatch) => {
    try {
        const { data } = await api.createTask(task);
        dispatch({ type: 'CREATE_TASK', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};