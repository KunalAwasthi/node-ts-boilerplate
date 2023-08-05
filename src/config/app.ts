import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import loggingMiddleware from "../middlewares/logging.middleware";
import Db from "./database";
// load .env
dotenv.config();

// connect DB
Db.connect(Db.getDbOptions())

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(hpp());

// setup rate limiter
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(loggingMiddleware);
app.use('/api', limiter);


export default app;
