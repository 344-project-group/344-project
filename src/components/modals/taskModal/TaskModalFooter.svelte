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

<div class="bg-surface-900 flex flex-row select-none">
	<TaskModalCancelButton />
	{#if props.isNew === false}
		<TaskModalCreateButton />
	{:else}
		<TaskModalUpdateButton />
	{/if}
</div>
