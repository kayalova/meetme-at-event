import { Context } from "koa"
import { Controller, Post, Get, Put } from "koa-router-ts"
import { EventService } from "../services"
import * as middleware from "../middleware"

@Controller("/events")
export default class {
    @Post("/create", middleware.isAuthorized)
    async createEvent(ctx: Context): Promise<any> {
        const { name, description, address, willVisit, creator } = ctx.body
        EventService.create({ name, description, address, willVisit, creator })
    }

    @Get("/")
    async getEvents(ctx: Context): Promise<any> {
        const events = await EventService.getAll()
        ctx.body = events
    }

    @Put("/join")
    async joinEvent(ctx: Context): Promise<any> {
        const id = ctx.request.body
        const event = await EventService.join(id)
        ctx.body = event
    }

    @Put("/cancel")
    async cancelMyVisit(ctx: Context): Promise<any> {
        const id = ctx.request.body
        const event = await EventService.cancelVisit(id)
        ctx.body = event
    }
}
