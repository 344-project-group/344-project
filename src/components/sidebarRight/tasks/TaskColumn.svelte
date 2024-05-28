<!-- TaskColumn.svelte -->
<script>
	import { onMount } from 'svelte';
	import { fetchedTasksData } from '../../../stores';
	import TaskList from './TaskList.svelte';
	import { fetchTasksData } from '../../../fetchData.js';

	/**
	 * @type {{ date: Date, tasks: { title: string, description: string, interval: { start: Date, end: Date } }[] }[]}
	 */
	let tasksData = [];

	// Subscribe to the store
	fetchedTasksData.subscribe((data) => {
		tasksData = data;
	});

	// Fetch data on component mount
	onMount(() => {
		fetchTasksData();
	});
</script>

<div>
	{#each tasksData as tasksForDay}
		<TaskList {tasksForDay} />
	{/each}
</div>
