<script>
	import Grid, { GridItem } from 'svelte-grid-extended';
	import ScheduleButton from '../../buttons/mainActivity/ScheduleButton.svelte';

	// Define the days of the week for the header
	const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	// Schedule data (as an example)
	let schedules = {
		Monday: [{ start: '9 AM', end: '12 PM' }],
		Tuesday: [
			{ start: '11 AM', end: '1 PM' },
			{ start: '2 PM', end: '7 PM' }
		],
		Wednesday: [{ start: '9 AM', end: '12 PM' }],
		Thursday: [
			{ start: '11 AM', end: '1 PM' },
			{ start: '2 PM', end: '7 PM' }
		],
		Friday: [{ start: '9 AM', end: '12 PM' }],
		Saturday: [
			{ start: '11 AM', end: '1 PM' },
			{ start: '2 PM', end: '7 PM' }
		],
		Sunday: [{ start: '9 AM', end: '12 PM' }]
	};

	/**
	 * @type {any[]}
	 */
	let items = [
		{ id: '0', x: 0, y: 0, w: 2, h: 5 },
		{ id: '1', x: 2, y: 2, w: 2, h: 2 },
		{ id: '2', x: 2, y: 0, w: 1, h: 2 },
		{ id: '3', x: 3, y: 0, w: 2, h: 2 },
		{ id: '4', x: 4, y: 2, w: 1, h: 3 },
		{ id: '5', x: 8, y: 0, w: 2, h: 8 },
		{ id: '6', x: 4, y: 5, w: 1, h: 1 },
		{ id: '7', x: 2, y: 6, w: 3, h: 2 },
		{ id: '8', x: 2, y: 4, w: 2, h: 2 }
	];

	const itemSize = { width: 100, height: 40 };
	let nextId = 9;

	/**
	 * @type {import('svelte-grid-extended').GridController}
	 */
	let gridController;

	function addNewItem(event) {
		const gridRect = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - gridRect.left; // X position within the element.
		const y = event.clientY - gridRect.top; // Y position within the element.

		const gridX = Math.floor(x / itemSize.width);
		const gridY = Math.floor(y / itemSize.height);

		const newPosition = { x: gridX, y: gridY, w: 1, h: 1 };
		items = [...items, { id: String(nextId++), ...newPosition }];
	}
</script>

<div class="card w-modal-wide h-modal-wide grid grid-cols-7 grid-rows-12 gap-0">
	<div class="card-header col-span-7"><h2 class="card-title">Schedule</h2></div>
	<div class="row-span-11 row-start-2">2</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="col-span-6 row-span-10 row-start-2" on:dblclick={addNewItem}>
		<Grid {itemSize} cols={7} rows={48} bind:controller={gridController}>
			{#each items as item}
				<GridItem class="bg-surface-500 rounded-md px-2 py-1" {...item}>
					<div class="item">{item.id}</div>
				</GridItem>
			{/each}
		</Grid>
	</div>
	<div class="card-footer flex justify-end space-x-4 col-span-6 col-start-2 row-start-12">
		<button class="btn btn-primary">Save</button>
		<button class="btn btn-secondary">Cancel</button>
	</div>
</div>

<style>
	.h-modal-wide {
		height: 80vh;
	}
</style>
