// src/fetchData.js
import { fetchedTasksStore } from './stores';

export async function fetchTasksData() {
    try {
        const response = await fetch('https://344-project-backend.belphegor.workers.dev/tasks');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
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

        fetchedTasksStore.set(Object.values(data));
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchTasksData();
