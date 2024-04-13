<script>
	/**
	 * @type {{date:Date, tasks:{title:string, description:string, interval:{start:Date, end:Date}}[]}}
	 */
	export let tasksForDay;
	const { date, tasks } = tasksForDay;
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	/**
	 * Check if a date is today.
	 * @param {Date} someDate - The date to check.
	 * @returns {boolean} - True if the date is today, false otherwise.
	 */
	const isToday = (someDate) => {
		const today = new Date();
		return (
			someDate.getDate() == today.getDate() &&
			someDate.getMonth() == today.getMonth() &&
			someDate.getFullYear() == today.getFullYear()
		);
	};
</script>

<div class="p-2 w-64">
	<div class="flex bg-gray-800 px-2 py-1 rounded-md font-semibold text-sm text-gray-500">
		<div class="basis-1/2 flex">
			{#if isToday(date)}
				<div class="text-center basis-1/2 bg-blue-500 rounded-md text-white">Today</div>
				<div class="ml-2">
					{date.getDate()}
					{months[date.getMonth()]}
				</div>
			{:else}
				<div class="">
					{date.getDate()}
					{months[date.getMonth()]}
				</div>
			{/if}
		</div>
		<div class="basis-1/2 text-right">
			{days[date.getDay()].toUpperCase()}
		</div>
	</div>
</div>
