import * as Koa from "koa"
import bodyParser from "koa-bodyparser-ts"
import * as mongoose from "mongoose"
import { loadControllers } from "koa-router-ts"
import * as path from "path"
(async () => await mongoose.connect("mongodb://localhost:27017",
    { useNewUrlParser: true, useUnifiedTopology: true })
)()

console.log("connected to mongo")

const app: Koa = new Koa()
const router = loadControllers(path.join(__dirname, "controllers"), { recurse: true })

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
    console.log("server started")
})
