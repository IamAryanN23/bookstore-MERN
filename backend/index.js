import express, { response } from "express";
import  {PORT} from "./config.js";
import { request } from "http";
import { log } from "console";
const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to the server')
})

app.listen( (PORT), () => {
    console.log(`Listening at ${PORT}`);
})
