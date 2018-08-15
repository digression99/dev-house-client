
import uuidv4 from 'uuid/v4';

const fakeDatabase = {
    tasks : [
        {
            username: "kim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1010
        },
        {
            username: "shim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1020
        },
        {
            username: "kim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1030
        },
        {
            username: "shim",
            taskName: "blabla",
            comment: "fuck",
            timestamp: 1030
        },
        {
            username: "kim",
            taskName: "fucufudkf",
            comment: "fuck",
            timestamp: 1010
        },
        {
            username: "shim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1020
        },
        {
            username: "kim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1030
        },
        {
            username: "shim",
            taskName: "blabla",
            comment: "fuck",
            timestamp: 1030
        }
    ],
    reviews : [
        {
            username: "kim",
            text: "my day sucks",
            tasks : [{
                username: "kim",
                taskName: "running",
                comment: "fuck",
                timestamp: 1010
            }]
        },
        {
            username: "shim",
            text: "my day blablab",
            tasks : [{
                username: "shim",
                taskName: "running",
                comment: "fuck",
                timestamp: 1010
            }]
        }
    ],
    users : ["kim", "shim", "chim"]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTasks = (username) => delay(500).then(() => {
    return fakeDatabase.tasks.filter(task => task.username === username);
});

export const fetchReviews = (username) => delay(500).then(() => {
    return fakeDatabase.reviews.filter(review => review.username === username);
});

export const fetchUserInfo = (username) => delay(500).then(() => {
    console.log(' in api fetch user info.');
    if (fakeDatabase.users.indexOf(username) > -1) {
        return {
            success : true,
            tasks : fakeDatabase.tasks.filter(task => task.username === username)
        }
    } else {
        return { success : false};
    }
});