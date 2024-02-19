import { Application } from "https://deno.land/x/oak@v5.0.0/mod.ts";

import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { router } from "./routes/routes.ts";
import { Context } from "https://deno.land/x/oak@v5.0.0/mod.ts";

const port = 8000;
const app = new Application<Context>();

app.use(oakCors());

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });
