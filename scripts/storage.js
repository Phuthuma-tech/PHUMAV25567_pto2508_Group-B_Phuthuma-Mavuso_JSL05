/**
 * Retrieves tasks from localStorage.
  @returns {Array} *An array of task objects.
 */
export const getTasks = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
};

/**
 * Saves the task array to localStorage.
 @param {Array} tasks *The current list of tasks.
 */
export const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};