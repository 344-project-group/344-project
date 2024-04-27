<script>
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { initializeStores, Modal } from '@skeletonlabs/skeleton';

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

	import SidebarRight from '../components/sidebarRight/SidebarRight.svelte';
	import SidebarLeft from '../components/sidebarLeft/SidebarLeft.svelte';

	import TaskModal from '../components/modals/taskModal/TaskModal.svelte';
	import AuthModal from '../components/modals/authModal/AuthModal.svelte';
	/*
	 * Record<string, ModalComponent>
	 */
	const modalRegistry = {
		TaskModal: { ref: TaskModal },
		AuthModal: { ref: AuthModal }
	};

	initializeStores();

	onMount(() => {
		detectSWUpdate();
	});
</script>

<Modal components={modalRegistry} />
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
</AppShell>

<style lang="postcss">
	#title-bar {
		-webkit-app-region: drag;
	}
</style>
