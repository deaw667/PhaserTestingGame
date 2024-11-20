const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A player connected:', socket.id);

    // Handle player actions, e.g., movement
    socket.on('playerMove', (data) => {
        // Broadcast the player movement to other clients
        socket.broadcast.emit('playerMoved', data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A player disconnected:', socket.id);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});