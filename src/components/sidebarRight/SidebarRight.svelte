<script>
	import TaskColumn from './tasks/TaskColumn.svelte';
	import CreateTaskButton from '../buttons/mainActivity/CreateTaskButton.svelte';
	import AuthButton from '../buttons/mainActivity/AuthButton.svelte';
</script>

<div class="flex flex-col space-y-4 select-none my-4">
	<AuthButton />
	<CreateTaskButton />
	<div class="bg-gray-900 rounded-md"><TaskColumn /></div>
</div>
