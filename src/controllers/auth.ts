import { Context } from "koa"
import { Controller, Post } from "koa-router-ts"
import { UserService, TokenService } from "../services"

@Controller("/auth")
export default class {
    @Post("/signup")
    async signUp(ctx: Context): Promise<void> {
        const { email, name, password } = ctx.request.body
        const isExists = await UserService.isExists(email)

        if (isExists) return // handle it, return 400 or

        const user = await UserService.create({ name, email, password })
        const token = TokenService.generateAccess(user._id)

        ctx.body = { user, token }
    }

    @Post("/signin")
    async signin(ctx: Context): Promise<void> {
        const { email, password } = ctx.request.body

        const user = await UserService.findOne(email, password)
        if (user === null) return // handle it, return 400 or

        const token = TokenService.generateAccess(user._id)
        ctx.body = { user, token }
    }
}
