<script>
	import { getModalStore } from '@skeletonlabs/skeleton';
	import TaskModalHeader from './TaskModalHeader.svelte';
	import TaskModalFooter from './TaskModalFooter.svelte';
	import TaskModalRightActivity from './TaskModalRightActivity.svelte';
	import TaskModalLeftActivity from './TaskModalLeftActivity.svelte';

	export let parent;

	const modalStore = getModalStore();

	const cBase = 'card p-4 w-modal h-modal shadow-xl space-y-4';
</script>

{#if $modalStore[0]}
	<div class={cBase}>
		<TaskModalHeader />
		<div class="flex flex-row">
			<TaskModalLeftActivity />
			<TaskModalRightActivity />
		</div>
		<TaskModalFooter props={{ isNew: false }} />
	</div>
{/if}
