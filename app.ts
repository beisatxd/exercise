import express = require("express")
import {Application, json} from "express";
import {userRoutes} from "./routes/userRoutes";

const app: Application = express();

app.use(json());
app.use("/", userRoutes);


app.listen(8081, () => {
    console.log("Connected")
})