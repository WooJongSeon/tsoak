import { Context } from "https://deno.land/x/oak@v13.2.5/context.ts";
class UserController {
  async login(ctx: Context) {
    ctx.response.body = "login";
  }
  async join(ctx: Context) {
    ctx.response.body = "join";
  }
}

export default new UserController();
