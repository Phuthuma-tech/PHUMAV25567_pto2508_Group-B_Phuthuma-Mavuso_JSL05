/**
 * Renders the task board and updates column counts.
 * @param {Array} tasks - The tasks to render.
 * @param {Function} onTaskClick - Callback for when a task is clicked.
 */
export const renderTasks = (tasks, onTaskClick) => {
    const columns = {
        todo: document.querySelector('.column-div[data-status="todo"] .tasks-container'),
        doing: document.querySelector('.column-div[data-status="doing"] .tasks-container'),
        done: document.querySelector('.column-div[data-status="done"] .tasks-container')
    };

    const counts = { todo: 0, doing: 0, done: 0 };
    Object.values(columns).forEach(col => (col.innerHTML = ''));

    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-div';
        taskCard.innerHTML = `<h4>${task.title}</h4>`;
        
        taskCard.addEventListener('click', () => onTaskClick(task));

        if (columns[task.status]) {
            columns[task.status].appendChild(taskCard);
            counts[task.status]++;
        }
    });

    document.getElementById('toDoText').textContent = `TODO (${counts.todo})`;
    document.getElementById('doingText').textContent = `DOING (${counts.doing})`;
    document.getElementById('doneText').textContent = `DONE (${counts.done})`;
};