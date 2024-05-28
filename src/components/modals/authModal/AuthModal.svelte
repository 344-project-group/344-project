<script>
	import { getModalStore } from '@skeletonlabs/skeleton';
	import AuthModalSignInButton from '../../buttons/authModal/AuthModalSignInButton.svelte';
	import AuthModalCreateAccountButton from '../../buttons/authModal/AuthModalCreateAccountButton.svelte';
	import AuthModalEmailForm from '../../forms/authModal/AuthModalEmailForm.svelte';
	import AuthModalPasswordForm from '../../forms/authModal/AuthModalPasswordForm.svelte';
	import { authenticate } from '$lib/auth';
  
	const modalStore = getModalStore();
  
	const authData = {
	  email: '',
	  password: ''
	};
  
	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	async function onAuthSignIn(event) {
		event.preventDefault();
	  const authenticated = await authenticate(authData.email, authData.password);
	  if (authenticated) {
		console.log(`Authenticated as: ${authData.email}`);
	  } else {
		console.log('Invalid credentials');
		console.log(authData.email,authData.password)
	  }
	}
  
	function onAuthCreateAccount() {
	  modalStore.close();
	}
  
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'p-4 space-y-4 rounded-container-token';
  </script>
  
  {#if $modalStore[0]}
	<div class={cBase}>
	  <div class={cForm}>
		<div class={cHeader}>Sign In</div>
		<!-- Pass the authData object to the forms -->
		<AuthModalEmailForm {authData} />
		<AuthModalPasswordForm {authData} />
		<div class="flex justify-between">
		  <AuthModalCreateAccountButton {onAuthCreateAccount} />
		  <AuthModalSignInButton {onAuthSignIn} />
		</div>
	  </div>
	</div>
  {/if}
  