import { Context, Next } from "koa"
import { TokenService } from "../services/"
import { ResponseError } from "../models/ResponseError"

export const isAuthorized = async (ctx: Context, next: Next) => {
    const { token, creator } = ctx.request.body
    if (!token || !creator) return new ResponseError(401, "Have no user or user's token").sendError(ctx)

    const isVerified = TokenService.verifyToken(token, creator)
    if (!isVerified) return new ResponseError(401, "Wrong token").sendError(ctx)

    return next()
}

export const isEmptyBody = async (ctx: Context, next: Next) => {
    if (JSON.stringify(ctx.request.body) === "{}") {
        return new ResponseError(400, "No data provided").sendError(ctx)
    }

    return next()
}
