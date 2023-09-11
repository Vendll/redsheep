<script lang="ts">
	export let mainCTA: any;
	export let language: any;
</script>

<div class="bg-white">
	<div
		class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8"
	>
		<h2 class="text-4xl font-bold tracking-tight text-gray-900">
			{#if language === 'hu'}
				{mainCTA.text}<br />{mainCTA.text2}
			{:else}
				{mainCTA.text_en}<br />{mainCTA.text2_en}
			{/if}
		</h2>
		<div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
			<a href={`${language}/kapcsolat`} class="btn variant-filled-primary uppercase font-semibold">
				{#if language === 'hu'}
					{mainCTA.buttonLabel}
				{:else}
					{mainCTA.buttonLabel_en}
				{/if}
			</a>
		</div>
	</div>
</div>
