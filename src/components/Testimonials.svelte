<script lang="ts">
	export let rolunkMondtak: any;
	export let language: any;
</script>

<section class="bg-secondary-800 rounded-2xl mx-12">
	<div class="mx-auto max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8">
		{#each rolunkMondtak as rm}
			<div
				class="last:border-t-2 last:border-secondary-500 py-12 px-6 last:md:border-t-0 last:md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16 first:md:flex first:md:flex-col first:md:border-r first:md:border-secondary-500 first:lg:pr-16"
			>
				<blockquote class="mt-6 md:flex md:flex-grow md:flex-col">
					<div class="relative text-lg font-medium text-gray-300 md:flex-grow">
						<svg
							class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-secondary-400"
							fill="currentColor"
							viewBox="0 0 32 32"
							aria-hidden="true"
						>
							<path
								d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
							/>
						</svg>
						<p class="relative">
							{#if language === 'hu'}
								{rm.description}
							{:else}
								{rm.description_en}
							{/if}
						</p>
					</div>
					<footer class="mt-8">
						<div class="flex items-start">
							<div class="">
								<div class="text-base font-medium text-gray-300">
									{#if language === 'hu'}
										{rm.name}
									{:else}
										{rm.name_en}
									{/if}
								</div>
								<div class="text-base font-medium text-secondary-200">
									{#if language === 'hu'}
										{rm.position}
									{:else}
										{rm.position_en}
									{/if}
								</div>
							</div>
						</div>
					</footer>
				</blockquote>
			</div>
		{/each}
	</div>
</section>
