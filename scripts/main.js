/**
 * Kanban Task Management - Main Logic
 * * This script handles LocalStorage persistence, dynamic DOM rendering, 
 * and modal interactions for task creation and viewing.
 */

// --- 1. CORE DATA LOGIC (LocalStorage) ---

/**
 * Retrieves the current task list from browser storage.
 * @returns {Array<Object>} An array of task objects.
 */
const getTasks = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

/**
 * Saves the current state of tasks to browser storage.
 * @param {Array<Object>} tasks - The task list to be saved.
 */
const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// --- 2. DOM SELECTORS ---

// Modals & Forms
const newTaskModal = document.querySelector('.modal-overlay'); // The <dialog> for adding
const newTaskForm = document.getElementById('new-task-modal-window');
const taskDetailModal = document.getElementById('task-modal'); // The <dialog> for viewing
const taskDetailForm = document.getElementById('task-form');

// Buttons
const btnAddNewTask = document.getElementById('add-new-task-btn');
const btnCancelAddTask = document.getElementById('cancel-add-btn');
const btnCloseDetail = document.getElementById('close-modal-btn');

// --- 3. RENDERING LOGIC ---

/**
 * Clears and repopulates the task columns based on the current data state.
 * Also updates the numerical count in each column header.
 */
const renderTasks = () => {
  const tasks = getTasks();
  
  // Mapping statuses to their DOM containers
  const columns = {
    todo: document.querySelector('.column-div[data-status="todo"] .tasks-container'),
    doing: document.querySelector('.column-div[data-status="doing"] .tasks-container'),
    done: document.querySelector('.column-div[data-status="done"] .tasks-container')
  };

  // Reset counters and clear UI
  const counts = { todo: 0, doing: 0, done: 0 };
  Object.values(columns).forEach(col => (col.innerHTML = ''));

  tasks.forEach(task => {
    const taskCard = document.createElement('div');
    taskCard.className = 'task-div'; // Matches your CSS styling
    taskCard.innerHTML = `<h4>${task.title}</h4>`;
    
    // Requirement: Clicking a task opens the details modal
    taskCard.addEventListener('click', () => openTaskDetails(task));

    if (columns[task.status]) {
      columns[task.status].appendChild(taskCard);
      counts[task.status]++;
    }
  });

  // Update Header Text (e.g., TODO (2))
  document.getElementById('toDoText').textContent = `TODO (${counts.todo})`;
  document.getElementById('doingText').textContent = `DOING (${counts.doing})`;
  document.getElementById('doneText').textContent = `DONE (${counts.done})`;
};

// --- 4. INTERACTION LOGIC ---

/**
 * Populates and displays the detail modal for a specific task.
 * @param {Object} task - The task object to display.
 */
const openTaskDetails = (task) => {
  document.getElementById('task-title').value = task.title;
  document.getElementById('task-desc').value = task.description;
  document.getElementById('task-status').value = task.status;
  taskDetailModal.showModal();
};

/**
 * Captures form data, generates a new task, and saves it to storage.
 * @param {Event} e - The form submission event.
 */
const handleAddTask = (e) => {
  e.preventDefault();

  const titleInput = document.getElementById('title-input').value;
  const descInput = document.getElementById('desc-input').value;
  const statusSelect = document.getElementById('select-status').value;

  if (!titleInput) return;

  const newTask = {
    id: Date.now(), // Unique ID for identification
    title: titleInput,
    description: descInput,
    status: statusSelect
  };

  const tasks = getTasks();
  tasks.push(newTask);
  saveTasks(tasks);

  // Update UI and close modal
  renderTasks();
  newTaskForm.reset();
  newTaskModal.close();
};

// --- 5. INITIALIZATION ---

/**
 * Attaches all event listeners and performs the initial render on load.
 */
const init = () => {
  // Opening/Closing Add Task Modal
  btnAddNewTask.addEventListener('click', () => newTaskModal.showModal());
  btnCancelAddTask.addEventListener('click', () => newTaskModal.close());

  // Closing Details Modal
  btnCloseDetail.addEventListener('click', () => taskDetailModal.close());

  // Form Submission
  newTaskForm.addEventListener('submit', handleAddTask);

  // Run initial render
  renderTasks();
};

// Initialize the application once the DOM is ready
document.addEventListener('DOMContentLoaded', init);