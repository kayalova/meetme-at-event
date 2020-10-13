import { prop, getModelForClass, Ref } from "@typegoose/typegoose"
import { User } from "./User"

class Event {
    @prop({ required: true })
    public name: string

    @prop({ required: true })
    public description: string

    @prop({ required: true })
    public address: string

    @prop({ required: true, default: 1 })
    public willVisit: number

    @prop({ ref: () => User })
    public car?: Ref<User>
}

export const EventModel = getModelForClass(Event)
