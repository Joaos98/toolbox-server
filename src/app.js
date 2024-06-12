import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import notesRoutes from "./routes/notesRoutes.js";
import authRoutes from "./routes/authenticationRoutes.js";
import db from "./models/index.js";
import {config} from "./config/config.js";

const app = express();
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use('/notes', notesRoutes);
app.use('/auth', authRoutes)

db.sequelize.sync()
    .then(() => {

        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })

