import http from 'http';
import {Server} from 'socket.io';
import app from './app.js';
import ChatController from './controllers/chatController.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;

// Create HTTP server and Socket.IO server
const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: "*", // Allow all origins for testing
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log(`New connection: ${socket.id}`);
  });

ChatController(io);

server.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
