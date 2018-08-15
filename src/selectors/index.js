
export const getTasksByUsername = (store, username) =>
    store.tasks.filter(task => task.username === username);