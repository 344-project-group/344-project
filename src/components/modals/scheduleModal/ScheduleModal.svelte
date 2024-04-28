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
</script>

<div class="card h-screen w-screen">
	<Grid cols={10} rows={10}>
		<GridItem x={1} y={0} class="bg-surface-300 rounded-md item">Hey</GridItem>
		<GridItem x={3} y={3} w={4} class="item">Hoy</GridItem>
	</Grid>
</div>
