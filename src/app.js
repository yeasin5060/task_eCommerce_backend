import express from "express";
import cors from 'cors';

const app = express();

app.use(express.json({limit :"20kb"}));
app.use(express.urlencoded({limit : '20kb' , extended : true}));

app.use(cors({
    origin : process.env.CORS_ORIGIN
}))





export{app}





