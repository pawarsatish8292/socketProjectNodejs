Socket.IO WebSocket Project
Overview
This project demonstrates a WebSocket server using Socket.IO, allowing clients to join rooms, send messages, and leave rooms. The project can be tested using Hoppscotch, a tool for testing WebSocket communications.

Features
Clients can connect to the WebSocket server.
Supports events such as joining rooms, sending messages, and leaving rooms.
Real-time communication between clients in the same room.
Server-side logs for event tracking.
Requirements
Node.js installed on your machine.
A WebSocket client for testing, such as Hoppscotch.

Setup and Testing
A. Setup Hoppscotch
Open Hoppscotch.
Navigate to the WebSocket tab.
Enter the WebSocket URL:
arduino
Copy code
ws://localhost:3000
Choose the protocol: Socket.IO.
Click Connect.
B. Test Events
1. Join Room
Event Name: join-room
Data:
json
Copy code
{
  "room": "test-room"
}
Expected Behavior:
Server logs:
php
Copy code
User <socket.id> joined room: test-room.
Other clients in the room receive:
json
Copy code
{
  "id": "<socket.id>",
  "room": "test-room"
}
Steps:
After connecting in Hoppscotch, send the join-room event with the JSON data.
Observe the server logs and responses in other connected clients.
2. Send Message
Event Name: send-message
Data:
json
Copy code
{
  "room": "test-room",
  "message": "Hello from Hoppscotch!"
}
Expected Behavior:
Server logs:
python
Copy code
Message from <socket.id> in room test-room: Hello from Hoppscotch!
Other clients in the room receive:
json
Copy code
{
  "id": "<socket.id>",
  "message": "Hello from Hoppscotch!"
}
Steps:
After joining the room, send the send-message event with the JSON data.
Observe the server logs and messages in other connected clients.
3. Leave Room
Event Name: leave-room
Data:
json
Copy code
{
  "room": "test-room"
}
Expected Behavior:
Server logs:
sql
Copy code
User <socket.id> left room: test-room.
Other clients in the room receive:
json
Copy code
{
  "id": "<socket.id>",
  "room": "test-room"
}
Steps:
Send the leave-room event with the JSON data.
Observe the server logs and notifications in other connected clients.
