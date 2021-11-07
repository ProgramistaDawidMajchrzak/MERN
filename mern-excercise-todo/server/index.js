import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import tasksRoutes from './routes/tasks.js';

const app = express();

app.use(cors());
app.use('/', tasksRoutes);
app.use(express.json());

const CONNECTION_URL = 'mongodb+srv://programistaDawidMajchrzak:d4k3-0605-onm1@cluster0.plxt1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(` Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false);