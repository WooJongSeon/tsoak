import { Context } from "https://deno.land/x/oak@v13.2.5/context.ts";
class IndexRoute {
  async hello(ctx: Context) {
    ctx.response.body = "hello";
  }
}

export default new IndexRoute();
