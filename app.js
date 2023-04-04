import express from 'express'
import cors from 'cors'
import mongoose from "mongoose"
import { config } from 'dotenv'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
config();
const localConnectionString = 'mongodb://127.0.0.1:27017/tuiter'
const DB_CONNECTION_STRING="mongodb+srv://xcai0511:Atlas0511?@web-dev.msjwvnj.mongodb.net/?retryWrites=true&w=majority"
const CONNECTION_STRING = DB_CONNECTION_STRING
    || localConnectionString;
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json())
TuitsController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);