import * as Users from "../models/db/User"
import { DocumentType } from "@typegoose/typegoose"

export class UserService {
    static async isExists(email: string): Promise<boolean> {
        return await Users.isUserExists(email)
    }

    static async findOne(email: string, password: string): Promise<DocumentType<Users.User> | null> {
        // TODO: hash password
        return await Users.findUser(email, password)
    }

    static async create(data: Object): Promise<DocumentType<Users.User>> {
        // TODO: hash passwords
        return await Users.createUser(data as Users.User)
    }
}
