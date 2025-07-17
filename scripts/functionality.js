'use strict';

//================== DOM ELEMENTS =========================//
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = "flex justify-between items-center bg-gray-700 px-4 py-3 rounded-xl";
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="text-red-400 hover:text-red-600 font-bold text-lg">✕</button>
    `;

    // Delete button functionality
    li.querySelector('button').addEventListener('click', () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = '';
}

// Add button click
addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent form submission
    addTask();
});

// Press Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTask();
    }
});
