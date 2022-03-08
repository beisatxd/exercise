import {Router} from "express";
import {getUsers, login} from "../controllers/userControllers";

export const userRoutes = Router();

userRoutes.get("/user", getUsers)
userRoutes.get("/login", login)


