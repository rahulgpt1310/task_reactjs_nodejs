import express from 'express'
import cors from "cors"
const app = express();

import route from "./src/routes.js"

app.use(cors());

app.use(route);

let port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Server is runnig on :', port)
})