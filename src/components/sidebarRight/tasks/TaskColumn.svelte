<!-- TaskColumn.svelte -->
<script>
	import TaskList from './TaskList.svelte';

	// Create date objects(new Date) for the week and pass them to the TaskList component

	/**
	 * Create a task object.
	 * @param {string} title - The title of the task.
	 * @param {string} description - The description of the task.
	 * @param {Date} start - The start time of the task.
	 * @param {Date} end - The end time of the task.
	 * @returns {{title:string, description:string, interval:{start:Date, end:Date}}} - The task object.
	 */
	function createTask(title, description, start, end) {
		const task = {
			title: title,
			description: description,
			interval: {
				start: start,
				end: end
			}
		};
		return task;
	}

	/**
	 * Create a day object.
	 * @param {Date} date - The date of the day.
	 * @param {Array<{title:string, description:string, interval:{start:Date, end:Date}}>} tasks - The tasks for the day.
	 * @returns {{date:Date,  tasks:Array<{title:string, description:string, interval:{start:Date, end:Date}}>}} - The day object.
	 */
	
	function createDay(date, tasks) {
		const day = {
			date: date,
			tasks: tasks
		};
		return day;
	}

	/**
	 * Create mock data for testing ui elements
	 * @returns {{date:Date, tasks:{title:string, description:string, interval:{start:Date, end:Date}}[]}[]} - The mock data.
	 */
	function createMockData() {
		const mockData = [
			createDay(new Date(2024, 3, 14), [
				createTask(
					'Task 1',
					'Task 1 Description',
					new Date(2024, 3, 14, 8, 0),
					new Date(2024, 3, 14, 9, 0)
				),
				createTask(
					'Task 2',
					'Task 2 Description',
					new Date(2024, 0, 1, 9, 0),
					new Date(2024, 0, 1, 10, 0)
				),
				createTask(
					'Task 3',
					'Task 3 Description',
					new Date(2024, 0, 1, 10, 0),
					new Date(2024, 0, 1, 11, 0)
				)
			]),
			createDay(new Date(2024, 3, 15), [
				createTask(
					'Task 3',
					'Task 3 Description',
					new Date(2024, 3, 15, 8, 0),
					new Date(2024, 3, 15, 9, 0)
				),
				createTask(
					'Task 4',
					'Task 4 Description',
					new Date(2024, 3, 15, 9, 0),
					new Date(2024, 3, 15, 10, 0)
				),
				createTask(
					'Task 5',
					'Task 5 Description',
					new Date(2024, 3, 15, 10, 0),
					new Date(2024, 3, 15, 11, 0)
				),
				createTask(
					'Task 6',
					'Task 6 Description',
					new Date(2024, 3, 15, 11, 0),
					new Date(2024, 3, 15, 12, 0)
				)
			]),
			createDay(new Date(2024, 3, 16), [
				createTask(
					'Task 5',
					'Task 5 Description',
					new Date(2024, 3, 16, 8, 0),
					new Date(2024, 3, 16, 9, 0)
				),
				createTask(
					'Task 6',
					'Task 6 Description',
					new Date(2024, 3, 16, 9, 0),
					new Date(2024, 3, 16, 10, 0)
				)
			]),
			createDay(new Date(2024, 3, 17), [
				createTask(
					'Task 7',
					'Task 7 Description',
					new Date(2024, 3, 17, 8, 0),
					new Date(2024, 3, 17, 9, 0)
				),
				createTask(
					'Task 8',
					'Task 8 Description',
					new Date(2024, 3, 17, 9, 0),
					new Date(2024, 3, 17, 10, 0)
				)
			]),
			createDay(new Date(2024, 3, 18), [
				createTask(
					'Task 9',
					'Task 9 Description',
					new Date(2024, 3, 18, 8, 0),
					new Date(2024, 3, 18, 9, 0)
				),
				createTask(
					'Task 10',
					'Task 10 Description',
					new Date(2024, 3, 18, 9, 0),
					new Date(2024, 3, 18, 10, 0)
				)
			]),
			createDay(new Date(2024, 3, 19), [
				createTask(
					'Task 11',
					'Task 11 Description',
					new Date(2024, 3, 19, 8, 0),
					new Date(2024, 3, 19, 9, 0)
				),
				createTask(
					'Task 12',
					'Task 12 Description',
					new Date(2024, 3, 19, 9, 0),
					new Date(2024, 3, 19, 10, 0)
				)
			]),
			createDay(new Date(2024, 3, 20), [
				createTask(
					'Task 13',
					'Task 13 Description',
					new Date(2024, 3, 20, 8, 0),
					new Date(2024, 3, 20, 9, 0)
				),
				createTask(
					'Task 14',
					'Task 14 Description',
					new Date(2024, 3, 20, 9, 0),
					new Date(2024, 3, 20, 10, 0)
				),
				createTask(
					'Task 15',
					'Task 15 Description',
					new Date(2024, 3, 20, 10, 0),
					new Date(2024, 3, 20, 11, 0)
				)
			])
		];
		return mockData;
	}

	const data = createMockData();
</script>

<div>
	{#each data as tasksForDay}
		<TaskList {tasksForDay} />
	{/each}
</div>
