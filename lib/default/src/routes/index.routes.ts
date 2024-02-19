import { Context } from "https://deno.land/x/oak@v5.0.0/mod.ts";

class IndexRoute {
  async hello(ctx: Context) {
    ctx.response.body = "hello";
  }
}

export default new IndexRoute();
