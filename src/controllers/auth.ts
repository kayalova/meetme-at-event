import { Context } from "koa"
import { Controller, Post } from "koa-router-ts"
import { UserService, TokenService } from "../services"
import { ResponseError } from "../models/ResponseError"
import * as middleware from "../middleware"

@Controller("/auth")
export default class {
    @Post("/signup", middleware.isEmptyBody)
    async signUp(ctx: Context): Promise<void> {
        const { email, name, password } = ctx.request.body

        const isExists = await UserService.isExists(email)
        if (isExists) return new ResponseError(409, "User with such email already registered").sendError(ctx)

        const user = await UserService.create({ name, email, password })
        const token = TokenService.generateAccess(user._id)
        ctx.body = { user, token }
    }

    @Post("/signin", middleware.isEmptyBody)
    async signin(ctx: Context): Promise<void> {
        const { email, password } = ctx.request.body

        const user = await UserService.findOne(email, password)
        if (!user) return new ResponseError(409, "Invalid email or password").sendError(ctx)

        const token = TokenService.generateAccess(user._id)
        ctx.body = { user, token }
    }
}
