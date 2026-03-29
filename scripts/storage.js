/**
 * Initial set of tasks for first-time users.
 */
const initialTasks = [
    { id: 1, title: "Create Github Repo", description: "Set up the Kanban project", status: "done" },
    { id: 2, title: "Implement LocalStorage", description: "JSL05 requirement", status: "doing" }
];

/**
 * Retrieves tasks from localStorage or seeds initial tasks if empty.
 */
export const getTasks = () => {
    const tasks = localStorage.getItem('tasks');
    if (!tasks) {
        // User Story: "save the initial set of tasks"
        saveTasks(initialTasks);
        return initialTasks;
    }
    return JSON.parse(tasks);
};

export const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};