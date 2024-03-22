import cors from "cors";
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

// logger
import morgan from "morgan";
app.use(morgan("dev"));

// db and authentication
import connectDB from "./db/connnect.js";

// router
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobRoutes.js";

// middlewares
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) =>{
//     res.send("Welcome to Jobify")
// })

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("DB CONNECTED");
    app.listen(port, () => {
      console.log("Server running on port " + port);
    });
  } catch (e) {
    console.log(e.message);
  }
};

start();
