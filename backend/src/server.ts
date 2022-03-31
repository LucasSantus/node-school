import "reflect-metadata";
import express from "express";
import cors from 'cors';
import './database'
import routes from "./routes/routes";

import swaggerUi from 'swagger-ui-express';

// PORT app 
const PORT = process.env.API_PORT;

import swaggerDocs from "./swagger.json";

import swaggerExample from "./a.json";

// create app express
const app = express();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:4000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// Then pass these options to cors:
app.use(cors(options));

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// app.use("/example-docs", swaggerUi.serve, swaggerUi.setup(swaggerExample));

app.use(routes); 

app.listen(PORT, () => console.log(`Server is running in ${PORT}`));