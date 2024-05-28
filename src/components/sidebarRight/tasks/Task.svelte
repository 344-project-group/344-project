<!-- Task.svelte -->
<script>
	/**
	 * @type {{title:string, description:string, interval:{start:Date, end:Date}}}
	 */
	export let task;
	const { title, description, interval } = task;

	function handleClick() {
		console.log(`Task: ${description}`);
	}
</script>

<button class="mx-2 px-2 py-3 text-left hover:bg-slate-950 rounded-lg" on:click={handleClick}>
	<div class="font-medium">{title}</div>
	<div class="text-sm text-gray-500">
		{interval.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} -
		{interval.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
	</div>
</button>
