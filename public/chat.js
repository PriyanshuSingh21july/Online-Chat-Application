const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('messageInput');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    if (input.value) {
        socket.emit('chat message', input.value); // Send message to server
        input.value = ''; // Clear input field
    }
});

socket.on('chat message', (msg) => {
    const item = document.createElement('div');
    item.textContent = msg;
    item.className = 'message sent'; // Add class for styling
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight; // Auto-scroll to latest message
});
