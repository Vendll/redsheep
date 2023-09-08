<script lang="ts">
	export let kuldetes: any;
	export let language: any;
	export let i: any;
</script>

<div class="relative bg-white lg:mb-12">
	<div class="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
		{#if kuldetes.image}
			<img
				class="h-full w-full object-cover rounded-lg"
				src={`https://redsheep.sudev.hu/api/files/${kuldetes.collectionId}/${kuldetes.id}/${kuldetes.image}`}
				alt={kuldetes.title}
			/>
		{:else if kuldetes.url}
			<img class="h-full w-full object-cover rounded-lg" src={kuldetes.url} alt={kuldetes.title} />
		{:else}
			<img
				class="h-full w-full object-cover rounded-lg"
				src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
				alt={kuldetes.title}
			/>
		{/if}
	</div>
	<div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
		<div class="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
			<h2 class="text-base font-semibold leading-7 text-primary-600 uppercase">
				{#if language === 'hu'}
					{kuldetes.subTitle}
				{:else}
					{kuldetes.subTitle_en}
				{/if}
			</h2>
			<p class="mt-2 text-4xl font-bold tracking-tight text-surface-900">
				{#if language === 'hu'}
					{kuldetes.title}
				{:else}
					{kuldetes.title_en}
				{/if}
			</p>
			<p class="mt-6 text-base leading-7 text-surface-700">
				{#if language === 'hu'}
					{kuldetes.description}
				{:else}
					{kuldetes.description_en}
				{/if}
			</p>
			<div class="mt-8">
				<a href="/rolunk" class="btn variant-filled-primary uppercase font-semibold"
					>{i('knowmore')}</a
				>
			</div>
		</div>
	</div>
</div>
