<script>
	import { DatePicker } from 'date-picker-svelte'
	let date = new Date()
</script>

<DatePicker bind:value={date}/>
