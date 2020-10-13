import * as mongoose from "mongoose"

export const openConnection = async () => await mongoose.connect("mongodb://localhost:27017",
    { useNewUrlParser: true, useUnifiedTopology: true })

export * from "./Event"
export * from "./User"
