// script.js
let startTime, timerInterval;
let isRunning = false;

// Function to format time
function formatTime(ms) {
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / 60000) % 60;
  const hours = Math.floor(ms / 3600000);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to start or stop the timer
function toggleTimer() {
  const display = document.getElementById('display');
  if (isRunning) {
    clearInterval(timerInterval);
  } else {
    startTime = new Date() - (startTime || 0);
    timerInterval = setInterval(() => {
      const elapsed = new Date() - startTime;
      display.textContent = formatTime(elapsed);
    }, 1000);
  }
  isRunning = !isRunning;
  document.getElementById('startStopBtn').textContent = isRunning ? 'Stop' : 'Start';
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('startStopBtn').textContent = 'Start';
  isRunning = false;
  startTime = null;
}

// Event listeners for buttons
document.getElementById('startStopBtn').addEventListener('click', toggleTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

// Detecting the volume up button
window.addEventListener('keydown', (event) => {
  if (event.key === 'VolumeUp') {
    if (isRunning) toggleTimer();  // Stop the timer if it's running
  }
});
const lapsList = document.getElementById('lapsList');

document.getElementById('lapBtn').addEventListener('click', () => {
  if (isRunning) {
    const lapTime = formatTime(new Date() - startTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapsList.children.length + 1}: ${lapTime}`;
    lapsList.appendChild(lapItem);
  }
});
let countdownInterval;

document.getElementById('countdownBtn').addEventListener('click', () => {
  let countdownSeconds = parseInt(document.getElementById('countdownInput').value);
  if (isNaN(countdownSeconds) || countdownSeconds <= 0) return;

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    document.getElementById('display').textContent = formatTime(countdownSeconds * 1000);
    countdownSeconds--;

    if (countdownSeconds < 0) {
      clearInterval(timerInterval);
      alert('Countdown Finished!');
    }
  }, 1000);
});
// Stopwatch functionality (previous code here)

// To-Do List Functionality
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', () => {
  const taskText = todoInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    todoInput.value = '';
  }
});

function addTask(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔️';
  completeBtn.classList.add('todo-btn');
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.classList.add('todo-btn');
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}
function addTask(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  // File input for each task
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.classList.add('file-input');

  // Label to display file name
  const fileNameLabel = document.createElement('span');
  fileNameLabel.classList.add('file-name');

  // Event listener for file input
  fileInput.addEventListener('change', (event) => {
    const fileName = event.target.files[0]?.name || 'No file selected';
    fileNameLabel.textContent = `File: ${fileName}`;
  });

  // Complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔️';
  completeBtn.classList.add('todo-btn');
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.classList.add('todo-btn');
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  // Append elements to the list item
  li.appendChild(fileInput);
  li.appendChild(fileNameLabel);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Append the list item to the to-do list
  todoList.appendChild(li);
}
function addTask(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  // File input for images
  const imageInput = document.createElement('input');
  imageInput.type = 'file';
  imageInput.accept = 'image/*'; // Allow only image files
  imageInput.classList.add('file-input');

  // Image preview element
  const imagePreview = document.createElement('img');
  imagePreview.classList.add('image-preview');

  // Event listener for file input to preview image
  imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        imagePreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // Complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔️';
  completeBtn.classList.add('todo-btn');
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.classList.add('todo-btn');
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  // Append elements to the list item
  li.appendChild(imageInput);
  li.appendChild(imagePreview);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Append the list item to the to-do list
  todoList.appendChild(li);
}
