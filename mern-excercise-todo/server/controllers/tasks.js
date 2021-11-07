import postTask from '../Models/task.js';

export const postTasks = async (req, res) => {
    try {
        const task = await new postTask(req.body).save();
        res.sent(task)
    } catch (error) {
        res.send(error)
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await postTask.find();
        res.send(tasks);
    } catch (error) {
        res.send(error)
    }
};

export const putTasks = async (req, res) => {
    try {
        const task = await postTask.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
    } catch (error) {
        res.send(error);
    }
};

export const deleteTasks = async (req, res) => {
    try {
        const task = await postTask.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
}