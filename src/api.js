
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
    ]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTasks = () => delay(500).then(() => {
    return fakeDatabase.tasks;
});

export const fetchReviews = () => delay(500).then(() => {
    return fakeDatabase.reviews;
});

