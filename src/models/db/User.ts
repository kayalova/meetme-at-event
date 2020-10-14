import { prop, getModelForClass, DocumentType } from "@typegoose/typegoose"

export class User {
    @prop({ required: true })
    public name: string

    @prop({ required: true })
    public email: string

    @prop({ required: true })
    public password: string
}

export const UserModel = getModelForClass(User)

export const isUserExists = async (email: string): Promise<boolean> =>
    await UserModel.findOne({ email }) !== null

export const findUser = async (email: string, password: string): Promise<DocumentType<User> | null> =>
    await UserModel.findOne({ email, password })

export const createUser = async (user: User): Promise<DocumentType<User>> =>
    await UserModel.create(user)
