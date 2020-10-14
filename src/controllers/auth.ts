import { Context } from "koa"
import { Controller, Post } from "koa-router-ts"
import * as services from "../services"

@Controller("/auth")
export default class {
    @Post("/signup")
    async signUp(ctx: Context): Promise<void> {
        const { email } = ctx.request.body
        const isExists = await services.UserService.isExists(email)
        // if (isExists) return notification user with such email already...
        const { name, password } = ctx.request.body
        const user = await services.EventService.create({ name, email, password })
        // TODO: generate tokens and include them in response
        ctx.body = user
    }

    @Post("/signin")
    async signin(ctx: Context): Promise<void> {
        const { email, password } = ctx.request.body
        const user = await services.UserService.findOne(email, password)
        // if (user === null) handle it, return 400 or
        // else
        // TODO: generate tokens
        ctx.body = { user }
    }
}
