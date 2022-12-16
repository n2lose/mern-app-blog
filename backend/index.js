import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import mongoose from 'mongoose';


import posts from './routers/posts.js';

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

// connect to mongoose DB Cloud
// main().catch(err => console.log(err));
// async function main() {
//     await mongoose.connect(process.env.MONGO_URL);
// }
mongoose.connect(process.env.MONGO_URL, {
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true
    })
    .then (()=> {
        console.log("Connected Mongoose DB Cloud successful");
        
        app.listen(port, () => {
            console.log(`Mern app blog listening on port ${port}`)
        });
    }).catch((err) => {
        console.log('error ===== ', err)
    });

app.use('/static', express.static('public'))
app.use(bodyParser.json({limit: '30mb'}))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/posts', posts)
