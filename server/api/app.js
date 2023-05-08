import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';
import bodyParser from 'body-parser';
const app = express();

//connection string
mongoose.connect("mongodb+srv://webdev:webdev@cluster0.xg9qppy.mongodb.net/test", ()=>{
    console.log('connected to mongoDB');
});

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

routes(app);
export default app;