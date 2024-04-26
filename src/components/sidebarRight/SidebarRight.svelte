<script>
	import TaskColumn from './tasks/TaskColumn.svelte';
	import CreateTaskButton from '../buttons/mainActivity/CreateTaskButton.svelte';
</script>

<div class="flex flex-col select-none">
	<CreateTaskButton />
	<TaskColumn />
</div>
