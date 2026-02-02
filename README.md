# Group Chat System

A distributed **real-time group chat system** built for **low-latency bi-directional messaging**, scalable message delivery, and production-style deployment.

## Tech Stack
- **Frontend:** Next.js  
- **Backend:** Node.js  
- **Realtime:** Socket.IO  
- **Messaging / Streaming:** Kafka, Redis (Pub/Sub)  
- **Database ORM:** Prisma  
- **Reverse Proxy:** NGINX  
- **DevOps:** Docker Compose, CI/CD  

## Key Features
- ⚡ Real-time group chat with **bi-directional messaging** and **low-latency delivery**
- 📈 High-throughput async processing using **Redis (Pub/Sub)** + **Kafka**
- 🚀 Production-ready deployment with **Docker Compose**, **NGINX reverse proxy**, and **automated Prisma migrations**

## Architecture Overview
- **Next.js** client connects to backend via **Socket.IO**
- Backend publishes events through **Redis Pub/Sub** and streams via **Kafka**
- Persistent data managed via **Prisma ORM**
- **NGINX** handles reverse proxy + routing
- Deployment managed using **Docker Compose** with CI/CD automation

## Setup & Run (Local)
```bash
# clone repo
git clone <your-github-repo-url>
cd <repo-folder>

# install dependencies
npm install

# start services (Kafka, Redis, DB, NGINX, etc.)
docker compose up -d

# run backend
npx prisma migrate dev
npx prisma generate
npm run dev
