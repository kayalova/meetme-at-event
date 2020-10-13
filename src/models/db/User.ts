import { prop, getModelForClass } from "@typegoose/typegoose"
// import * as mongoose from "mongoose"

export class User {
    @prop({ required: true })
    public name: string

    @prop({ required: true })
    public email: string

    @prop({ required: true })
    password: string
}

export const UserModel = getModelForClass(User)

// export const isExists
