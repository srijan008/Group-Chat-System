// import { Redis } from "ioredis";
// let redis: Redis;

//   redis = new Redis("rediss://:QMXhZ7AjGeMbWe79rfPrDbIR9Ktt1RYX@SG-pollen-tent-1920-77667.servers.mongodirector.com:6379");



// export default redis;
import {Redis} from "ioredis";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const redis = new Redis(process.env.REDIS_URL!, {
  tls: {
    ca: fs.readFileSync(path.join(__dirname, "../certs/pollen-tent-1920-ssl-public-cert.cert")),
  },
});
export default redis;
