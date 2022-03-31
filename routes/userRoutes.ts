import {Router} from "express";
import {createUser, getUsers, login, updateUser} from "../controllers/userControllers";

export const userRoutes = Router();

userRoutes.get("/users", getUsers);
userRoutes.get("/login", login);
userRoutes.post("/user", createUser);
userRoutes.put("/user/:id", updateUser);
userRoutes.delete("/user/:id");


