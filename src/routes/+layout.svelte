<script>
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	import SidebarRight from '../components/sidebarRight/SidebarRight.svelte';
	import SidebarLeft from '../components/sidebarLeft/SidebarLeft.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newWorker = registration.installing;

			newWorker?.addEventListener('statechange', () => {
				if (newWorker.state === 'installed') {
					if (confirm('A new version is available. Refresh to update?')) {
						newWorker.postMessage({ type: 'SKIP_WAITING' });
						window.location.reload();
					}
				}
			});
		});
	}

	onMount(() => {
		detectSWUpdate();
	});
</script>

<!-- App Shell -->
<AppShell>
	<div id="title-bar" slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-sm uppercase">Calendar</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail"></svelte:fragment>
		</AppBar>
	</div>
	<!-- Page Route Content -->
	<svelte:fragment slot="sidebarRight">
		<SidebarRight />
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<SidebarLeft />
	</svelte:fragment>

	<slot />
	<a href="/../components/sidebarLeft/SidebarLeft.svelte">
		<button class="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">Create Task</button>
	  </a>
	  
</AppShell>

<style lang="postcss">
	#title-bar {
		-webkit-app-region: drag;
	}
</style>
