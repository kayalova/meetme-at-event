import { Context } from "koa"
import { Controller, Post, Get, Put } from "koa-router-ts"

@Controller("/events")
export default class {
    @Post("/create")
    async createEvent(ctx: Context): Promise<any> {
        // const {name, descr, address, creator} = ctx.body
        // const event = new Snippet({name, descr, address, creator, })
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
