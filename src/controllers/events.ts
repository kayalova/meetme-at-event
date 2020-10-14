import { Context } from "koa"
import { Controller, Post, Get, Put } from "koa-router-ts"
import * as services from "../services"

@Controller("/events")
export default class {
    @Post("/create")
    async createEvent(ctx: Context): Promise<any> {
        const { name, description, address, willVisit, creator } = ctx.body
        // TODO: check whether data are valid
        services.EventService.create({ name, description, address, willVisit, creator })
    }

    @Get("/")
    async getEvents(ctx: Context): Promise<any> {
        const events = await services.EventService.getAll()
        ctx.body = events
    }

    @Put("/join")
    async joinEvent(ctx: Context): Promise<any> {
        const id = ctx.request.body
        const event = await services.EventService.join(id)
        ctx.body = event
    }

    @Put("/cancel")
    async cancelMyVisit(ctx: Context): Promise<any> {
        const id = ctx.request.body
        const event = await services.EventService.cancelVisit(id)
        ctx.body = event
    }
}
