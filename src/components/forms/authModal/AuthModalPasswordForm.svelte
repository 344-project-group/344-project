<script>
	export let authData = { password: '' };
</script>

<div class="flex flex-col space-y-2">
	<label for="password">Password:</label>
  <input
    type="password"
    id="password"
    bind:value={authData.password}
  />
</div>
