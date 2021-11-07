import express from "express";

import { getTasks, postTasks, putTasks, deleteTasks } from '../controllers/tasks.js'

const router = express.Router();

router.get('/', getTasks);
router.post('/', postTasks);
router.put('/:id', putTasks);
router.delete('/:id', deleteTasks);

export default router;