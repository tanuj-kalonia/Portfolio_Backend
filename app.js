import express from "express"
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    "Access-Control-Allow-Origin": "*"

}));

import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);


app.use(express.static(path.resolve("./frontEnd/build")));
app.get("*", (req, res) => {
    req.sendFile(path.resolve("/frontEnd/build/index.html"))
})