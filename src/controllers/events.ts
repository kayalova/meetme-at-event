import { Context } from "koa"
import { Controller, Post, Get, Put } from "koa-router-ts"

@Controller("/events")
export default class {
    @Post("/create")
    async createEvent(ctx: Context): Promise<any> {

    }

    @Get("/")
    async getEvents(ctx: Context): Promise<any> {
        ctx.response.body = "<h1>Hello</h1>"
    }

    @Put("/join")
    async joinEvent(ctx: Context): Promise<any> {

    }

    @Put("/cancel")
    async cancelMyVisit(ctx: Context): Promise<any> {

    }
}
