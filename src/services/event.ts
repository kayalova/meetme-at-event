import { DocumentType } from "@typegoose/typegoose"
import * as Events from "../models/db/Event"

export class EventService {
    static async getAll(filterQuery: Object = {}): Promise<DocumentType<Events.Event>[]> {
        return await Events.getFilteredEvents(filterQuery)
    }

    static async join(id: Object): Promise<DocumentType<Events.Event> | null> {
        return await Events.joinEvent(id)
    }

    static async cancelVisit(id: Object): Promise<DocumentType<Events.Event> | null> {
        return await Events.cancelEventVisit(id)
    }

    static async create(data: Object): Promise<DocumentType<Events.Event>> {
        return await Events.createEvent(data as Events.Event)
    }
}
