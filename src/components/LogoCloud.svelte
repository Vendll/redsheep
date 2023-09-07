<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	export let partnerek: any;
</script>

<div use:scrollRef={'blog'} class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<h2 class="text-center text-2xl font-semibold leading-8 text-gray-900">
			{partnerek.title}
		</h2>
		<div
			class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-7xl lg:flex lg:justify-center lg:overflow-auto"
		>
			{#each partnerek.logok as logo}
				<img
					class="h-full aspect-square max-h-24 w-full object-contain"
					src={`https://redsheep.sudev.hu/api/files/${partnerek.collectionId}/${partnerek.id}/${logo}`}
					alt={logo}
				/>
			{/each}
		</div>
	</div>
</div>
