<script lang="ts">
	import { i, language } from '@inlang/sdk-js';
	export let rolunkTop: any;
	export let rolunkMiddle: any;
	export let teamTexts: any;
	export let teamMembers: any;
</script>

<!-- {`https://redsheep.sudev.hu/api/files/${partnerek.collectionId}/${partnerek.id}/${logo}`} -->

<div class="relative bg-white pt-28 pb-10 sm:pb-24">
	<div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
		<div class="relative sm:py-16 lg:py-0">
			<div
				aria-hidden="true"
				class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
			>
				<div class="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
			</div>
			<div class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
				<!-- Testimonial card-->
				<div class="relative aspect-square overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
					{#if rolunkTop.image}
						<img
							class="absolute inset-0 h-full w-full object-cover"
							src={`https://redsheep.sudev.hu/api/files/${rolunkTop.collectionId}/${rolunkTop.id}/${rolunkTop.image}?thumb=760x760f`}
							alt=""
						/>
					{:else}
						<img
							class="absolute inset-0 h-full w-full object-cover"
							src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
							alt=""
						/>
					{/if}
					<!-- <div class="absolute inset-0 bg-secondary-300 mix-blend-multiply" />
					<div
						class="absolute inset-0 bg-gradient-to-t from-secondary-600 via-secondary-600 opacity-90"
					/> -->
				</div>
			</div>
		</div>

		<div class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
			<!-- Content area -->
			<div class="pt-12 sm:pt-16 lg:pt-20">
				<p class="text-base font-semibold leading-7 text-primary-500 uppercase">
					{#if language === 'hu'}
						{rolunkTop.subTitle}
					{:else}
						{rolunkTop.subTitle_en}
					{/if}
				</p>
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{#if language === 'hu'}
						{rolunkTop.title}
					{:else}
						{rolunkTop.title_en}
					{/if}
				</h2>
				<div class="mt-6 space-y-6 text-gray-500">
					{#if language === 'hu'}
						{@html rolunkTop.description}
					{:else}
						{@html rolunkTop.description_en}
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
<div class="relative bg-white py-10 sm:pb-24 sm:pt-0">
	<div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
		<div class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
			<!-- Content area -->
			<div class="pt-0 sm:pt-16 lg:pt-20">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{#if language === 'hu'}
						{rolunkMiddle.title}
					{:else}
						{rolunkMiddle.title_en}
					{/if}
				</h2>
				<div class="mt-8 space-y-8 text-gray-500">
					{#if language === 'hu'}
						{@html rolunkMiddle.description}
					{:else}
						{@html rolunkMiddle.description_en}
					{/if}
				</div>
			</div>
		</div>

		<div class="relative sm:py-16 lg:py-0">
			<div
				aria-hidden="true"
				class="hidden sm:block lg:absolute lg:inset-y-0 lg:left-0 lg:w-screen"
			>
				<div class="absolute inset-y-0 left-1/2 w-full rounded-l-3xl bg-gray-50 lg:left-72" />
			</div>
			<div class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
				<!-- Testimonial card-->
				<div class="relative aspect-square overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
					{#if rolunkMiddle.image}
						<img
							class="absolute inset-0 h-full w-full object-cover"
							src={`https://redsheep.sudev.hu/api/files/${rolunkMiddle.collectionId}/${rolunkMiddle.id}/${rolunkMiddle.image}?thumb=760x760f`}
							alt=""
						/>
					{:else}
						<img
							class="absolute inset-0 h-full w-full object-cover"
							src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
							alt=""
						/>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<div class="bg-white">
	<div class="mx-auto max-w-7xl pb-12 px-6 lg:px-8 lg:pb-24">
		<div class="space-y-12">
			<div class="text-center">
				<h2 class="text-3xl text-gray-900 font-bold tracking-tight sm:text-4xl">
					{#if language === 'hu'}
						{teamTexts.title}
					{:else}
						{teamTexts.title_en}
					{/if}
				</h2>
				<p class="text-lg font-light mt-6 leading-8 text-gray-500">
					{#if language === 'hu'}
						{teamTexts.description}
					{:else}
						{teamTexts.description_en}
					{/if}
				</p>
			</div>

			<ul
				class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
			>
				{#each teamMembers as member}
					<li>
						<div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
							<div
								class=" aspect-w-3 aspect-h-4 overflow-hidden rounded-lg transition-[scale] !duration-1000"
							>
								{#if member.image}
									<img
										class="rounded-lg object-cover shadow-lg transition-all duration-500 hover:scale-110"
										src={`https://redsheep.sudev.hu/api/files/${member.collectionId}/${member.id}/${member.image}?thumb=400x660f`}
										alt=""
									/>
								{:else}
									<img
										class="rounded-lg object-cover shadow-lg transition-all duration-500 hover:scale-110"
										src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
										alt=""
									/>
								{/if}
							</div>
							<div class="sm:col-span-2">
								<div class="space-y-4">
									<div class="space-y-1 text-lg font-medium leading-6">
										<h3>{member.name}</h3>
										<p class="text-primary-500">
											{#if language === 'hu'}
												{member.position}
											{:else}
												{member.position_en}
											{/if}
										</p>
									</div>
									<div class="text-lg">
										<p class="text-gray-500">
											{#if language === 'hu'}
												{member.quote}
											{:else}
												{member.quote_en}
											{/if}
										</p>
									</div>
								</div>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
