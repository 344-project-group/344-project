import { fetchedTasksData } from './stores.js';

export async function fetchTasksData() {
    const response = await fetch('https://344-project-backend.belphegor.workers.dev/tasks');
    const tasksData = await response.json();

    const data = tasksData.reduce((acc, task) => {
        const date = task.date;
        if (!acc[date]) {
            acc[date] = {
                date: new Date(date),
                tasks: []
            };
        }
        acc[date].tasks.push({
            title: task.title,
            description: task.description,
            interval: {
                start: new Date(task.start_time),
                end: new Date(task.end_time)
            }
        });
        return acc;
    }, {});

    fetchedTasksData.set(Object.values(data));
}

fetchTasksData();