import express = require("express")
import {Application, Request, Response} from "express";
import {User} from "./types/User";
import {LoginRequest} from "./types/LoginRequest";

const app: Application = express();

app.get("/user", (req: Request, res: Response) => {
    let user: User = {
        id: 1,
        username: "Beysat",
        password: "0000"
    }
    res.send(user)
})


app.get("/login", (req: Request, res:Response) => {
    const loginRequest: LoginRequest = req.query;
    if (!loginRequest.username || !loginRequest.password) {
        res.send({
            status: 400,
            message: "Username or Password has not been provided"
        })
    }

    res.send( {
        status:200,
        message: "Logged in successfully"
    })
})


app.listen(8081, () => {
    console.log("Connected")
})