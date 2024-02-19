import { Router } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import { Context } from "https://deno.land/x/oak@v5.0.0/mod.ts";

import indexRoutes from "./index.routes.ts";
import userRoutes from "./users.routes.ts";

const router: Router = new Router();

router.get("", (ctx: Context) => {
  ctx.response.body = "hello world";
});

router.post("/login", userRoutes.login).post("/join", userRoutes.join);

router.get("/", indexRoutes.hello);

export { router };
