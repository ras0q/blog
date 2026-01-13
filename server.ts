import Server from "lume/core/server.ts";
import expires from "lume/middlewares/expires.ts";

const server = new Server();

server.use(expires());

export default server;
