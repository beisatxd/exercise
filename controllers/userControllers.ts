import {Request, Response} from "express";
import {User} from "../types/User";
import {LoginRequest} from "../types/LoginRequest";
import {UserModel} from "../models/userModel";

export const getUsers = async (req: Request, res: Response) => {
    let users: User[] = await new UserModel().getUsers()
    res.send(users)
}

export const createUser = async (req: Request, res: Response) => {
    let userData = req.body ;
    console.log({userData})
    res.send(userData)
}



export const login = (req: Request, res:Response) => {
    const loginRequest: LoginRequest = req.query;
    if (!loginRequest.username || !loginRequest.password) {
        res.send({
            status: 400,
            message: "Username or Password has not been provided"
        })
        res.send({
            status: 200,
            message: "Logged in successfully"
        })
    }
}