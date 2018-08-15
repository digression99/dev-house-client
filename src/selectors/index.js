
export const getTasksByUsername = (state, userName) => state.tasks.filter(task => task.userName === userName);

export const getUsername = state => state.auth.username;

export const getPartnerName = state => state.auth.partnerName;

export const getAccessToken = state => state.auth.accessToken;

