import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Activities API');
});

// const CONNECTION_URL = "mongodb+srv://aaa297:410AAAaaa@cluster0.kfkyr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.port || 5000;

// Creates promise
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true} )
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => consolge.log(error.message));

mongoose.set('useFindAndModify', false);

// mongodb.com/cloud/atlas