import "dotenv/config";
import express from "express";
import routes from "./src/routes/index.js";

const DOOR = 3003;

const app = express();
routes(app);

app.listen(DOOR, () =>{
    console.log("Servidor ok!")
})

