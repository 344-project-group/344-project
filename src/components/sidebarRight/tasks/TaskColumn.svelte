<!-- TaskColumn.svelte -->
<script>
	import { onMount } from 'svelte';
	import { fetchedTasksStore } from '../../../stores';
	import TaskList from './TaskList.svelte';
	import { fetchTasksData } from '../../../fetchData';

	/**
	 * @type {{ date: Date, tasks: { title: string, description: string, interval: { start: Date, end: Date } }[] }[]}
	 */
	let tasksData = [];

	// Subscribe to the store
	fetchedTasksStore.subscribe((data) => {
		// Filter out tasks before todays date
		tasksData = data.filter((day) => {
			const today = new Date();
			return (
				day.date.getDate() >= today.getDate() &&
				day.date.getMonth() >= today.getMonth() &&
				day.date.getFullYear() >= today.getFullYear()
			);
		});

		// Sort the tasks by date
		tasksData.sort((a, b) => a.date - b.date);
	});

	// Fetch data on component mount
	onMount(() => {
		fetchTasksData();
	});

	// console.log(tasksData);
</script>

<div>
	{#each tasksData as tasksForDay}
		<TaskList {tasksForDay} />
	{/each}
</div>
