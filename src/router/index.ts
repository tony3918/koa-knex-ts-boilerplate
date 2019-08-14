import Router from "koa-router";
import { Context } from "koa";

const router: Router = new Router();

router.get("/healthcheck", (ctx: Context) => {
  ctx.body = {
    origin: ctx.origin,
    env: process.env.NODE_ENV,
  };
});

export default router;
