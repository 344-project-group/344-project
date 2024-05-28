<!-- <script>
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
{/if} -->
<script>
	import { onMount } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';

	let Datepicker;
	let editor;

	onMount(async () => {
		if (typeof document !== 'undefined') {
			const script = document.createElement('script');
			script.src = 'https://unpkg.com/svelte-datepicker/index.js';
			document.head.appendChild(script);
			script.onload = () => {
				Datepicker = window.svelteDatepicker.default;
			};

			editor = new Editor({
				element: document.getElementById('tiptap-editor'),
				extensions: [StarterKit],
				content: '<p>Hello World! 🌍️ </p>',
				onUpdate: ({ editor }) => {
					console.log(editor.getHTML()); // This will log the HTML content of the editor
				}
			});
		}
	});

	import { getModalStore } from '@skeletonlabs/skeleton';
	import TipTap from '../../sidebarLeft/tipTap/tipTap.svelte';

	export let parent;

	const modalStore = getModalStore();

	// Form Data
	const formData = {
		name: 'Jane Doe',
		description: '',
		startDate: null,
		deadline: null,
		duration: null,
		minChunk: null,
		labels: [],
		schedule: {
			Monday: [],
			Tuesday: [],
			Wednesday: [],
			Thursday: [],
			Friday: [],
			Saturday: [],
			Sunday: []
		},
		hardDeadline: false,
		warnIfPastDue: false,
		status: 'Active',
		priority: 'High',
		selectedDay: null,
		selectedHours: []
	};

	// Label Options
	const labelOptions = ['Feature', 'Bug', 'Enhancement', 'Documentation', 'Backend', 'Frontend'];

	// Function to handle label selection
	function handleLabelSelection(event) {
		const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
		formData.labels = selectedOptions;
	}

	// Function to handle scheduling
	function handleScheduleSelection() {
		// Reset selected day and hours
		formData.selectedDay = null;
		formData.selectedHours = [];
	}

	// Function to handle day selection
	function handleDaySelection(day) {
		formData.selectedDay = day;
		formData.selectedHours = [];
	}

	// Function to handle hour selection
	function handleHourSelection(hour) {
		if (!formData.selectedHours.includes(hour)) {
			formData.selectedHours.push(hour);
		} else {
			formData.selectedHours = formData.selectedHours.filter((h) => h !== hour);
		}
	}

	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit() {
		console.log('Form submitted');
		console.log(formData);
		modalStore.close();
	}

	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'p-4 space-y-4 rounded-container-token';
</script>

{#if $modalStore[0]}
	<div class="card flex">
		<!-- Left section for Description with Tiptap Text Editor -->
		<div class="flex-col">
			<h2 class="m-4 p-4">Task View</h2>
			<div class="m-4 p-4">
				<h2 class="text-lg font-semibold mb-2">Title</h2>
				<TipTap />
			</div>
			<div class="m-4 p-4">
				<h2 class="text-lg font-semibold mb-2">Description</h2>
				<TipTap />
			</div>
		</div>

		<!-- Right section for other properties -->
		<div class="mt-16 p-4">
			<div class="modal-example-form">
				<article>{$modalStore[0].body ?? ''}</article>
				<!-- Enable for debugging: -->
				<form class="modal-form {cForm}">
					<!-- Other form fields -->
					<!-- Name -->
					<label class="label">
						<span>Name</span>
						<input
							class="input"
							type="text"
							bind:value={formData.name}
							placeholder="Enter name..."
						/>
					</label>
					<!-- Status -->
					<label class="label">
						<span>Status</span>
						<select class="select" bind:value={formData.status}>
							<option value="Active">Active</option>
							<option value="Inactive">Inactive</option>
						</select>
					</label>
					<!-- Priority -->
					<label class="label">
						<span>Priority</span>
						<select class="select" bind:value={formData.priority}>
							<option value="High">High</option>
							<option value="Medium">Medium</option>
							<option value="Low">Low</option>
						</select>
					</label>
					<!-- Start Date -->
					<label class="label">
						<span>Start Date</span>
						{#if Datepicker}
							<Datepicker bind:value={formData.startDate} />
						{:else}
							<p>Loading Datepicker...</p>
						{/if}
					</label>
					<!-- Deadline -->
					<label class="label">
						<span>Deadline</span>
						{#if Datepicker}
							<Datepicker bind:value={formData.deadline} />
						{:else}
							<p>Loading Datepicker...</p>
						{/if}
					</label>
					<!-- Duration -->
					<label class="label">
						<span>Duration</span>
						<input
							class="input"
							type="number"
							bind:value={formData.duration}
							placeholder="Enter duration..."
						/>
					</label>
					<!-- Min. Chunk -->
					<label class="label">
						<span>Min. Chunk</span>
						<input
							class="input"
							type="number"
							bind:value={formData.minChunk}
							placeholder="Enter min. chunk..."
						/>
					</label>
					<!-- Labels -->
					<label class="label">
						<span>Labels</span>
						<select
							multiple
							class="select"
							bind:value={formData.labels}
							on:change={handleLabelSelection}
						>
							{#each labelOptions as label}
								<option value={label}>{label}</option>
							{/each}
						</select>
					</label>
					{#if formData.labels.length > 0}
						<p>Selected Labels: {formData.labels.join(', ')}</p>
					{/if}
					<!-- Hard Deadline -->
					<label class="label">
						<input type="checkbox" bind:checked={formData.hardDeadline} />
						<span>Hard Deadline</span>
					</label>
					<!-- Warn if Past Due -->
					<label class="label">
						<input type="checkbox" bind:checked={formData.warnIfPastDue} />
						<span>Warn me if past due</span>
					</label>
					<!-- Schedule -->
					<label class="label">
						<span>Schedule</span>
						{#if Datepicker}
							<Datepicker bind:value={formData.startDate} on:change={handleScheduleSelection} />
						{:else}
							<p>Loading Datepicker...</p>
						{/if}
					</label>
					<!-- Days of the week -->
					{#if formData.startDate}
						{#each Object.keys(formData.schedule) as day}
							<div>
								<input
									type="checkbox"
									checked={formData.selectedDay === day}
									on:change={() => handleDaySelection(day)}
								/>
								<span>{day}</span>
							</div>
						{/each}
					{/if}
					<!-- Hours of the day -->
					{#if formData.selectedDay !== null}
						<div>
							{#each Array.from(Array(24).keys()) as hour}
								<input
									type="checkbox"
									checked={formData.selectedHours.includes(hour)}
									on:change={() => handleHourSelection(hour)}
								/>
								<span>{hour}:00</span>
							{/each}
						</div>
					{/if}
					<!-- Submit button -->
					<footer class="modal-footer {parent.regionFooter}">
						<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}
							>{parent.buttonTextCancel}</button
						>
						<button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Save Task</button>
					</footer>
				</form>
			</div>
		</div>
	</div>
{/if}
