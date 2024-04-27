<script>
	import TaskModalCancelButton from '../../buttons/taskModal/TaskModalCancelButton.svelte';
	import TaskModalUpdateButton from '../../buttons/taskModal/TaskModalUpdateButton.svelte';
	import TaskModalCreateButton from '../../buttons/taskModal/TaskModalCreateButton.svelte';

	/**
	 * @param {Object} props
	 * @param {boolean} props.isNew
	 */
	export let props;
</script>

<div class="flex flex-row justify-end space-x-4 select-none">
	<TaskModalCancelButton />
	{#if props.isNew === false}
		<TaskModalCreateButton />
	{:else}
		<TaskModalUpdateButton />
	{/if}
</div>
