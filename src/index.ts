import "dotenv/config";
import Koa from "koa";
import logger from "koa-logger";
import router from "./router";
import bodyParser from "koa-bodyparser";

const app = new Koa();

// middleware
app.use(logger());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const port = Number(process.env.PORT) | 4000;
app.listen(port);
console.log(`Listening on port ${port}`);
