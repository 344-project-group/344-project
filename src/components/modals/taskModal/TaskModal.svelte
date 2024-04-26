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
	<div class="">
		<div class="bg-surface-900"></div>
		<TaskModalHeader />
		<div class="bg-surface-900 flex flex-row">
			<TaskModalLeftActivity />
			<TaskModalRightActivity />
		</div>
		<TaskModalFooter props={{ isNew: false }} />
	</div>
{/if}
