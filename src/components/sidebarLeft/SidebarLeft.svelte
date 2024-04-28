<script>
	import DatePicker from './datePicker/DatePicker.svelte';
	import ShortCuts from './shortcuts/ShortCuts.svelte';
	import TipTap from './tipTap/tipTap.svelte';
	import ScheduleButton from '../buttons/mainActivity/ScheduleButton.svelte';
</script>

<div class="flex flex-col select-none">
	<DatePicker />
	<ShortCuts />
	<TipTap />
	<ScheduleButton />
</div>
