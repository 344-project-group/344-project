<script>
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const modal = {
		type: 'component',
		component: 'TaskModal'
	};

	const handleOnClick = () => {
		modalStore.trigger({
			...modal,
			type: 'component'
		});
	};
</script>

<button
	on:click={handleOnClick}
	class="btn my-4 px-4 py-2 bg-tertiary-500 text-white rounded-md hover:bg-tertiary-600"
>
	Create Task
</button>
