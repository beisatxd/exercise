import { promises } from "fs";
import {User} from "../types/User";
const mysql = require("mysql2");

export class UserModel{
    private connection;

    constructor() {
        const pool = mysql.createPool({
            host: "localhost",
            user: "root",
            database: "exercise"
        })
        this.connection = pool.promise();
    }

    async getUsers() {
        const [rows] = await this.connection.query("SELECT * FROM `users`");
        return rows;
    }
    async getNewID():Promise<number> {
        const users = await this.getUsers();
        return users[users.length-1].id+1;
    }
    async updateUserList(user:User):Promise<boolean>{
        const users = await this.getUsers();
        users.push(user);
        await promises.writeFile(__dirname+"/db.json", JSON.stringify(users));
        return true;
    }
    async updateUser(user:User):Promise<User> {
        return {

        } as User
    }
}

