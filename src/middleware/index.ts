import { Context, Next } from "koa"
import { TokenService } from "../services/"

export const isAuthorized = (ctx: Context, next: Next) => {
    const { token, id } = ctx.body
    if (!token && !id) {
        ctx.status = 401
        return
    }

    const isVerified = TokenService.verifyToken(token, id)
    if (!isVerified) {
        ctx.status = 401
        return
    }

    next()
}
