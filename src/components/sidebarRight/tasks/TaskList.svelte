<!-- TaskList.svelte -->
<script>
	import Task from './Task.svelte';
	import Day from './Day.svelte';

	/**
	 * @type {{date:Date, tasks:{title:string, description:string, interval:{start:Date, end:Date}}[]}}
	 */
	export let tasksForDay;
</script>

<div class=" text-white text-md">
	<Day {tasksForDay} />
	<div class="flex flex-col gap-2">
		{#each tasksForDay.tasks as task}
			<Task {task} />
		{/each}
	</div>
</div>
