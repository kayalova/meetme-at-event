import { Context, Next } from "koa"
import { TokenService } from "../services/"
import { ResponseError } from "../models/ResponseError"

export const isAuthorized = (ctx: Context, next: Next) => {
    const { token, id } = ctx.body
    if (!token && !id) return new ResponseError(401, "Empty request body").sendError(ctx)

    const isVerified = TokenService.verifyToken(token, id)
    if (!isVerified) return new ResponseError(401, "Wrong token").sendError(ctx)

    next()
}

export const isEmptyBody = (ctx: Context, next: Next) => {
    if (JSON.stringify(ctx.request.body) === "{}") {
        return new ResponseError(400, "No data provided").sendError(ctx)
    }

    next()
}
