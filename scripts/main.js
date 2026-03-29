import { getTasks, saveTasks } from './storage.js';
import { renderTasks } from './render.js';

const newTaskModal = document.querySelector('.modal-overlay');
const newTaskForm = document.getElementById('new-task-modal-window');
const taskDetailModal = document.getElementById('task-modal');

/**
 * Initializes the application.
 */
const init = () => {
    // 1. Initial Render from Storage
    renderTasks(getTasks(), (task) => {
        document.getElementById('task-title').value = task.title;
        document.getElementById('task-desc').value = task.description;
        document.getElementById('task-status').value = task.status;
        taskDetailModal.showModal();
    });

    // 2. Open Add Modal
    document.getElementById('add-new-task-btn').addEventListener('click', () => {
        newTaskModal.showModal();
    });

    // 3. Handle New Task Submission
    newTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newTask = {
            id: Date.now(),
            title: document.getElementById('title-input').value,
            description: document.getElementById('desc-input').value,
            status: document.getElementById('select-status').value
        };

        const currentTasks = getTasks();
        currentTasks.push(newTask);
        saveTasks(currentTasks);
        
        // Re-render immediately (No refresh needed!)
        renderTasks(currentTasks, () => {}); 
        
        newTaskForm.reset();
        newTaskModal.close();
    });

    // 4. Cancel/Close Buttons
    document.getElementById('cancel-add-btn').onclick = () => newTaskModal.close();
    document.getElementById('close-modal-btn').onclick = () => taskDetailModal.close();
};

document.addEventListener('DOMContentLoaded', init);