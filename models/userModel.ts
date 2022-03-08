import { promises } from "fs";

export class UserModel{
    async getUsers() {
        const users = await promises.readFile(__dirname + "/db.json","utf-8")
        return JSON.parse(users);
    }
}

(async () => {
    await new UserModel().getUsers()
})()
