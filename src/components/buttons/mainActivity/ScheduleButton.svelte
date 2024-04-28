<script>
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const modal = {
		type: 'component',
		component: 'ScheduleModal'
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
	class="btn px-4 py-2 flex-initial bg-tertiary-500 text-white rounded-md hover:bg-tertiary-600"
>
	Schedule
</button>
