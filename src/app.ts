import * as Koa from "koa"
import bodyParser from "koa-bodyparser-ts"
import * as logger from "koa-logger"
import { loadControllers } from "koa-router-ts"
import * as db from "./models/db"
import * as path from "path"
import * as dotenv from "dotenv"

dotenv.config({ path: `${__dirname}/../.env` })

const app: Koa = new Koa()
const router = loadControllers(path.join(__dirname, "controllers"), { recurse: true })

app.use(logger())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

db.openConnection().then(() => {
    console.log("connected to db")
    app.listen(process.env.APP_SERVER_PORT, () => {
        console.log(`server started on port ${process.env.APP_SERVER_PORT}`)
    })
})
