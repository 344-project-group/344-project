<script>
	import { getModalStore } from '@skeletonlabs/skeleton';
	import TaskModalHeader from './TaskModalHeader.svelte';
	import TaskModalFooter from './TaskModalFooter.svelte';
	import TaskModalRightActivity from './TaskModalRightActivity.svelte';
	import TaskModalLeftActivity from './TaskModalLeftActivity.svelte';

	export let parent;

	const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
	<TaskModalHeader />
	<TaskModalLeftActivity />
	<TaskModalRightActivity />
	<TaskModalFooter />
{/if}
