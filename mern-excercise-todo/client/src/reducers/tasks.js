const tasks = (tasks = [], action) => {
    switch (action.type) {
        case 'FETCH':
            return action.payload;
        case 'CREATE_TASK':
            return [...tasks, action.payload];
        default:
            return tasks;
    };
};

export default tasks;