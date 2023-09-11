<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	export let partnerek: any;
	export let language: any;
</script>

<div use:scrollRef={'blog'} class="bg-white py-24 sm:py-32">
	<div class="px-6 lg:px-8">
		<h2 class="text-center text-2xl font-semibold leading-8 text-gray-900">
			{#if language === 'hu'}
				{partnerek.title}
			{:else}
				{partnerek.title_en}
			{/if}
		</h2>
		<div
			class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10"
		>
			{#each partnerek.logok as logo}
				<img
					class="h-32 snap-start aspect-square max-h-32 w-32 object-contain"
					src={`https://redsheep.sudev.hu/api/files/${partnerek.collectionId}/${partnerek.id}/${logo}?thumb=150x150f`}
					alt={logo}
				/>
			{/each}
		</div>
	</div>
</div>
