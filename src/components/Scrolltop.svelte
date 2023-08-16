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
	class="btn variant-filled-primary hidden fixed bottom-6 right-6 z-[9999]"
	class:topBtn
	on:click={() => scrollTop({ duration: 1000 })}
>
	TOP
</button>

<style>
	.topBtn {
		display: block !important;
	}
</style>
