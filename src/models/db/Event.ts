import { prop, getModelForClass, Ref, DocumentType } from "@typegoose/typegoose"
import { } from "mongoose"
import { User } from "./User"

export class Event {
    @prop({ required: true })
    public name: string

    @prop({ required: true })
    public description: string

    @prop({ required: true })
    public address: string

    @prop({ required: true, default: 1 })
    public willVisit: number

    @prop({ ref: () => User })
    public creator?: Ref<User>
}

export const EventModel = getModelForClass(Event)

export const createEvent = async (event: Event): Promise<DocumentType<Event>> =>
    await EventModel.create(event)

export const joinEvent = async (id: Object): Promise<DocumentType<Event> | null> => {
    const event = await EventModel.findById(id)
    event && (event.willVisit += 1) && await event.save()
    return event
}

export const cancelEventVisit = async (id: Object): Promise<DocumentType<Event> | null> => {
    const event = await EventModel.findById(id)
    event && (event.willVisit -= 1) && await event.save()
    return event
}

export const getFilteredEvents = async (options: Object): Promise<DocumentType<Event>[]> =>
    await EventModel.find(options)
