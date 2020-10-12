import * as Koa from "koa"
import bodyParser from "koa-bodyparser-ts"
import * as mongoose from "mongoose"
const app: Koa = new Koa()
app.use(bodyParser());

(async () => await mongoose.connect("mongodb://localhost:27017",
    { useNewUrlParser: true, useUnifiedTopology: true })
)()
console.log("connected to mongo")

app.listen(3000, () => {
    console.log("server started")
})
