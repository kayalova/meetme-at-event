import { Context } from "koa"
import { Controller, Post } from "koa-router-ts"

@Controller("/auth")
export default class {
    @Post("/signup")
    async signUp(ctx: Context): Promise<void> {

    }

    @Post("/signin")
    async signin(ctx: Context): Promise<void> {

    }
}
