
import uuidv4 from 'uuid/v4';
import axios from 'axios';

const fakeDatabase = {
    tasks : [
        {
            id : uuidv4(),
            username: "kim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1010
        },
        {
            id : uuidv4(),
            username: "shim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1020
        },
        {
            id : uuidv4(),
            username: "kim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1030
        },
        {
            id : uuidv4(),
            username: "shim",
            taskName: "blabla",
            comment: "fuck",
            timestamp: 1030
        },
        {
            id : uuidv4(),
            username: "kim",
            taskName: "fucufudkf",
            comment: "fuck",
            timestamp: 1010
        },
        {
            id : uuidv4(),
            username: "shim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1020
        },
        {
            id : uuidv4(),
            username: "kim",
            taskName: "running",
            comment: "fuck",
            timestamp: 1030
        },
        {
            id : uuidv4(),
            username: "shim",
            taskName: "blabla",
            comment: "fuck",
            timestamp: 1030
        }
    ],
    reviews : [
        {
            id : uuidv4(),
            username: "kim",
            text: "my day sucks",
            tasks : [{
                id : uuidv4(),
                username: "kim",
                taskName: "running",
                comment: "fuck",
                timestamp: 1010
            }]
        },
        {
            id : uuidv4(),
            username: "shim",
            text: "my day blablab",
            tasks : [{
                id : uuidv4(),
                username: "shim",
                taskName: "running",
                comment: "fuck",
                timestamp: 1010
            }]
        }
    ],
    users : [
        {
            username : "kim",
            password: "123"
        },
        {
            username : "shim",
            password: "123"
        },
        {
            username : "chim",
            password: "123"
        }
    ]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const userLogin = (username, password) => delay(1000).then(() => {
    const res = fakeDatabase.users.filter(user => user.username === username && user.password === password);
    if (res.length > 0) {
        return true;
    } else {
        return false;
    }
});

export const fetchTasks = (accessToken) => {

    axios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
    axios.get('https://dev-house.herokuapp.com/tasks').then(response => {
        console.log(response.data);
        return {
            success : true,
            tasks : response.data
        }
    });
};

// export const fetchTasks = (username) => delay(500).then(() => {
//     return fakeDatabase.tasks.filter(task => task.username === username);
// });

export const fetchReviews = (username) => delay(500).then(() => {
    return fakeDatabase.reviews.filter(review => review.username === username);
});

export const fetchUserInfo = (username) => delay(500).then(() => {
    const res = fakeDatabase.users.filter(user => user.username === username);
    if (res.length > 0) {
        return {
            success : true,
            tasks : fakeDatabase.tasks.filter(task => task.username === username)
        }
    } else {
        return { success : false};
    }
});

export const saveReview = (username, text, tasks) => delay(500).then(() => {
    const review = {username, text, tasks, id : uuidv4()};
    fakeDatabase.reviews.push(review);
    return review;
});