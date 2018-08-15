
export const getTasksByUsername = (state, username) =>
    state.tasks.filter(task => task.username === username);

export const getUsername = state =>
    state.auth.username;