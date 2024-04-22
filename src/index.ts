import fastify from "fastify";

const server = fastify();

server.get("/healthcheck", async (request, reply) => {
  return "OK";
});

server.get("/", async (request, reply) => {
  return "Hello World!";
});

server.listen({ port: 3000, host: "0.0.0.0" }, (error, adress) => {
  if (error) {
    console.error(error),
      process.exit(1);
  }
  console.log(`Server listening at ${adress}`);
});
