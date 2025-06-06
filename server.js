import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/connectDb.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"

dotenv.config();

connectDB();

const app = express();

const port = process.env.PORT || 5000;

// middlewares
app.use(express.json()); // To parse the json data in the req.body
app.use(express.urlencoded({extended: true})); // To parse the json data in the req.
app.use(cookieParser()); 

// Routes
app.use("/api/users" , userRoutes);
app.use("/api/posts" , postRoutes);

app.listen(port , ()=> console.log(`Server Started at http://localhost:${port}`));

