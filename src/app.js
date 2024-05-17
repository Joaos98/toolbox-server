import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import notesRoutes from "./routes/notesRoutes.js";
import authRoutes from "./routes/authenticationRoutes.js";

const app = express();
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use('/notes', notesRoutes);
app.use('/authenticate', authRoutes)

app.listen(process.env.PORT || 8081)