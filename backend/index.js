import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import posts from './routers/posts.js';

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use('/static', express.static('public'))
app.use(bodyParser.json({limit: '30mb'}))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/posts', posts)

app.listen(port, () => {
  console.log(`Mern app blog listening on port ${port}`)
})