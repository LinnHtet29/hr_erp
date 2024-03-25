import "dotenv/config";
import app from "./src/app";
import http from "http";

const port = process.env.SERVER_PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on ${port}`);
})