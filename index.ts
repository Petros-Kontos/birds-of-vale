import { serve } from "https://deno.land/std/http/server.ts";
   import { serveFile } from "https://deno.land/std/http/file_server.ts";

   const server = serve({ port: 80 });

   console.log("http://localhost/");
   for await (const request of server) {
     const filePath = `.${request.url === "/" ? "/index.html" : request.url}`;
     try {
       const content = await serveFile(request, filePath);
       request.respond(content);
     } catch (e) {
       console.error(e.message);
       request.respond({ status: 404 });
     }
   }