import { Context } from "koa"

export class ResponseError {
    public httpStatusCode: number
    public message: string

    constructor(httpStatusCode: number, message: string) {
        this.httpStatusCode = httpStatusCode
        this.message = message
    }

    sendError(ctx: Context) {
        ctx.body = {
            message: this.message
        }

        ctx.status = this.httpStatusCode
    }
}
