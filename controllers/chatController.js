import RoomModel from "../models/roomModel.js";

const ChatController = (io) => {
    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        // Join Room
        socket.on("join-room", (data) => {
            try {
                if (typeof data === "string") {
                    data = JSON.parse(data);
                }
                const { room } = data;
                if (room) {
                    socket.join(room);
                    console.log(`User ${socket.id} joined room: ${room}`);
                    socket.to(room).emit("room-joined", { id: socket.id, room });
                } else {
                    console.error(`Invalid room data: ${JSON.stringify(data)}`);
                }
            } catch (error) {
                console.error(`Error parsing message data: ${error.message}`);
            }
        });

        // Send Message
        socket.on("send-message", (data) => {
            try {
                // Parse data if it's a string
                if (typeof data === "string") {
                    data = JSON.parse(data);
                }
                const { room, message } = data;

                if (room && message) {
                    console.log(`Message from ${socket.id} in room ${room}: ${message}`);
                    // Broadcast the message to others in the room
                    socket.to(room).emit("new-message", { id: socket.id, message });
                } else {
                    console.error(`Invalid message data: ${JSON.stringify(data)}`);
                }
            } catch (error) {
                console.error(`Error parsing message data: ${error.message}`);
            }
        });

        // Leave Room
        socket.on("leave-room", (data) => {
            try {
                if (typeof data === "string") {
                    data = JSON.parse(data);
                }
                const { room } = data;
                if (room) {
                    socket.leave(room);
                    console.log(`User ${socket.id} left room: ${room}`);
                    socket.to(room).emit("room-left", { id: socket.id, room });
                } else {
                    console.error(`Invalid room data: ${JSON.stringify(data)}`);
                }
            } catch (error) {
                console.error(`Error parsing message data: ${error.message}`);
            }
        });

        // Disconnect
        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
};

export default ChatController;
