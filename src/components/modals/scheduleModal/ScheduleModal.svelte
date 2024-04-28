<script>
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
	import Grid, { GridItem } from 'svelte-grid-extended';

	// Style variables
	const styles = {
		card: 'card w-modal-wide h-modal-wide grid grid-cols-7 grid-rows-12 gap-0',
		cardHeader: 'card-header col-span-7',
		cardTitle: 'card-title',
		gridContainer: 'col-span-6 row-span-10 row-start-2',
		cardFooter: 'card-footer flex justify-end space-x-4 col-span-6 col-start-2 row-start-12',
		buttonPrimary: 'btn btn-primary',
		buttonSecondary: 'btn btn-secondary',
		modalHeight: 'h-modal-wide',
		gridItem: 'bg-surface-300 rounded-md item'
	};
</script>

<div class="card w-modal-wide h-modal-wide grid grid-cols-7 grid-rows-12 gap-0">
	<div class="card-header col-span-7"><h2 class="card-title">Schedule</h2></div>
	<div class="row-span-11 row-start-2">2</div>
	<div class="col-span-6 row-span-10 row-start-2">
		<Grid cols={7} rows={48}>
			<GridItem x={1} y={0} h={1} max={{ w: 1, h: 48 }} class="bg-surface-300 rounded-md item"
				>Hey</GridItem
			>
			<GridItem x={3} y={3} h={1} max={{ w: 1, h: 48 }} class="bg-surface-300 rounded-md item"
				>Hoy</GridItem
			>
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
