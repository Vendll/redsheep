<script lang="ts">
	import { scrollTop } from 'svelte-scrolling';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	let scrollY: number;
	let screenHeight: any;
	let topBtn: boolean = false;
	onMount(() => {
		screenHeight = window.innerHeight;
	});
	$: if ($page.url.pathname === '/') {
		if (scrollY >= screenHeight) {
			topBtn = true;
		} else {
			topBtn = false;
		}
	} else {
		if (scrollY >= 300) {
			topBtn = true;
		} else {
			topBtn = false;
		}
	}
</script>

<svelte:window bind:scrollY />
<button
	type="button"
	class="btn px-3 variant-filled-primary hidden fixed bottom-6 right-6 z-[9999]"
	class:topBtn
	on:click={() => scrollTop({ duration: 1000 })}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="lucide lucide-arrow-up-to-line"
		><path d="M5 3h14" /><path d="m18 13-6-6-6 6" /><path d="M12 7v14" /></svg
	>
</button>

<style>
	.topBtn {
		display: block !important;
	}
</style>
