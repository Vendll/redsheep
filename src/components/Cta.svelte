<script lang="ts">
	export let mainCTA: any;
</script>

<div class="bg-white">
	<div
		class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8"
	>
		<h2 class="text-4xl font-bold tracking-tight text-gray-900">
			{mainCTA.text}<br />{mainCTA.text2}
		</h2>
		<div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
			<a href="/kapcsolat" class="btn variant-filled-primary uppercase font-semibold"
				>{mainCTA.buttonLabel}
			</a>
		</div>
	</div>
</div>
