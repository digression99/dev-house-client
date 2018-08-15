
const fakeDatabase = {

};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTasks = () => delay(1000).then(() => {
    return fakeDatabase.tasks;
});

