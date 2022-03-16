import "reflect-metadata";
import express from "express";
import './database'
import { routes } from "./routes";

// PORT app 
const PORT = 3000;

// create app express
const app = express();

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server is running in ${PORT}`));