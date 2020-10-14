import * as mongoose from "mongoose"

export const openConnection = async () => await mongoose.connect(process.env.MONGO_URI as string,
    { useNewUrlParser: true, useUnifiedTopology: true })

export * from "./Event"
export * from "./User"
