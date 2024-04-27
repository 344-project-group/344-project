<script>
	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
	import AuthModalSignInButton from '../../buttons/authModal/AuthModalSignInButton.svelte';
	import AuthModalCreateAccountButton from '../../buttons/authModal/AuthModalCreateAccountButton.svelte';
	import AuthModalEmailForm from '../../forms/authModal/AuthModalEmailForm.svelte';
	import AuthModalPasswordForm from '../../forms/authModal/AuthModalPasswordForm.svelte';

	// Props
	/** Exposes parent props to this component. */
	export let parent;

	const modalStore = getModalStore();

	const authData = {
		email: '',
		password: ''
	};

	// We've created a custom submit function to pass the response and close the modal.
	function onAuthSignIn() {
		if ($modalStore[0].response) $modalStore[0].response(authData);
		modalStore.close();
	}

	function onAuthCreateAccount() {
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'p-4 space-y-4 rounded-container-token';
</script>

{#if $modalStore[0]}
	<div class={cBase}>
		<div class={cForm}>
			<div class={cHeader}>Sign In</div>
			<AuthModalEmailForm {authData} />
			<AuthModalPasswordForm {authData} />
			<div class="flex justify-between">
				<AuthModalCreateAccountButton {onAuthCreateAccount} />
				<AuthModalSignInButton {onAuthSignIn} />
			</div>
		</div>
	</div>
{/if}
