<script>
	export let authData;
</script>

<div class="flex flex-col space-y-2">
	<label for="email">Email</label>
	<input type="email" id="email" bind:value={authData.email} />
</div>
