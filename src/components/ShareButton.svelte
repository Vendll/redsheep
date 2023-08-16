<script lang="ts">
	export let text = 'Check out this page!';
	export let url = 'https://blog.robino.dev/';
	export let title = url.split('/').splice(-1)[0]; // default to end of url

	async function handleClick() {
		try {
			await navigator.share({ text, url, title });
		} catch (error) {
			console.log(error);
		}
	}
</script>

<button on:click={handleClick}>
	<slot>Share</slot>
</button>
