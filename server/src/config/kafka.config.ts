import { Kafka, logLevel } from "kafkajs";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const kafka = new Kafka({
  clientId: "quick-chat",
  brokers: [process.env.KAFKA_BROKER!],

  ssl: {
    rejectUnauthorized: true,
    ca: [fs.readFileSync(path.join(__dirname, "../certs/ca.pem"), "utf-8")],
    cert: fs.readFileSync(path.join(__dirname, "../certs/service.cert"), "utf-8"),
    key: fs.readFileSync(path.join(__dirname, "../certs/service.key"), "utf-8"),
  },

  // ❌ REMOVE SASL — not supported on Aiven Free
  // sasl: { ... }

  logLevel: logLevel.ERROR,
});


export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: "chats" });

export const connectKafkaProducer = async () => {
  await producer.connect();
  console.log("Kafka Producer connected...");
};
