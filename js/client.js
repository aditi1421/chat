const socket = io("http://localhost:8000");

const form = document.getElementById('send-container');

const messageinp=document.getElementById('message-inp');
const messageContainer = document.querySelector(".container");

const name = prompt("Enter your name to join");
appendMessage('You Joined')