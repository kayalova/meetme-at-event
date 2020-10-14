import { Context } from "koa"
import { Controller, Post } from "koa-router-ts"
import * as services from "../services"

@Controller("/auth")
export default class {
    @Post("/signup")
    async signUp(ctx: Context): Promise<void> {
        const { email } = ctx.request.body
        const isExists = await services.UserService.isExists(email)
        if (isExists) return // handle it, return 400 or
        const { name, password } = ctx.request.body
        const user = await services.UserService.create({ name, email, password })
        const token = services.TokenService.generateAccess(user._id)
        ctx.body = { user, token }
    }

    @Post("/signin")
    async signin(ctx: Context): Promise<void> {
        const { email, password } = ctx.request.body
        const user = await services.UserService.findOne(email, password)
        if (user === null) return // handle it, return 400 or
        const token = services.TokenService.generateAccess(user._id)
        ctx.body = { user, token }
    }
}
