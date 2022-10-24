import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv';
import routes from './routes/routes.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/', routes);

// const username = process.env.USERNAME;
// const password = process.env.PASSWORD;

connection();

app.listen(8000, () => {
    console.log("server is running")
})