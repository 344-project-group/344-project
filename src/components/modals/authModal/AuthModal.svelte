<script>
	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent;

	const modalStore = getModalStore();

	const authData = {
		email: '',
		password: ''
	};

	// We've created a custom submit function to pass the response and close the modal.
	function onAuthSubmit() {
		if ($modalStore[0].response) $modalStore[0].response(authData);
		modalStore.close();
	}

	function onAuthCreate() {
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'p-4 space-y-4 rounded-container-token';
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class={cBase}>
		<div class={cForm}>
			<div class={cHeader}>Sign In</div>
			<div class="flex flex-col space-y-2">
				<label for="email">Email</label>
				<input type="email" id="email" bind:value={authData.email} />
			</div>
			<div class="flex flex-col space-y-2">
				<label for="password">Password</label>
				<input type="password" id="password" bind:value={authData.password} />
			</div>
			<div class="flex justify-between">
				<button class="ml-1 underline hover:cursor-pointer" on:click={onAuthCreate}>
					Create an account
				</button>
				<button class="btn-base rounded-md bg-surface-500" on:click={onAuthSubmit}>
					Sign In
				</button>
			</div>
		</div>
	</div>
{/if}
