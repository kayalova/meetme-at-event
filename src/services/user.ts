import * as Users from "../models/db/User"
import { DocumentType } from "@typegoose/typegoose"
import { hashString } from "../utils"
import { IUser } from "../interfaces"

export class UserService {
    static async isExists(email: string): Promise<boolean> {
        return await Users.isUserExists(email)
    }

    static async findOne(email: string, password: string): Promise<DocumentType<Users.User> | null> {
        const hashedPassword = hashString(password)
        return await Users.findUser(email, hashedPassword)
    }

    static async create(data: IUser): Promise<DocumentType<Users.User>> {
        const hashedPassword = hashString(data.password)
        data.password = hashedPassword
        return await Users.createUser(data as Users.User)
    }
}
