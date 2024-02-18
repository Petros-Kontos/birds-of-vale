import { serve } from "https://deno.land/std/http/server.ts";
import { serveDir } from "https://deno.land/std/http/file_server.ts";

serve((req) => {
  const url = new URL(req.url);
  return serveDir(req, { fsRoot: "", urlRoot: "", showDirListing: true, enableCors: true });
});
