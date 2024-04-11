<script lang="ts">
	import { i, language } from '@inlang/sdk-js';
	export let blogList: any;
	export let blogPage: any;
</script>

<div class="relative bg-gray-50 px-6 pb-20 lg:px-8 pt-28 lg:pb-28">
	<div class="absolute inset-0">
		<div class="h-1/3 bg-white sm:h-2/3" />
	</div>
	<div class="relative mx-auto max-w-7xl">
		<div class="text-center">
			<h2 class="text-lg font-semibold leading-8 tracking-tight uppercase text-primary-500">
				{#if language === 'hu'}
					{blogPage.subTitle}
				{:else}
					{blogPage.subTitle_en}
				{/if}
			</h2>
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				{#if language === 'hu'}
					{blogPage.title}
				{:else}
					{blogPage.title_en}
				{/if}
			</h2>
			<p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
				{#if language === 'hu'}
					{blogPage.description}
				{:else}
					{blogPage.description_en}
				{/if}
			</p>
		</div>
		<div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
			{#each blogList as blog}
				{#if (language !== 'hu' && blog.title) || (language !== 'en' && blog.title_en)}
					<div class="flex flex-col overflow-hidden rounded-[--theme-rounded-base] shadow-lg">
						<a href={`/${language}/blog/${blog.id}`} class="group">
							<div class="flex-shrink-0 overflow-hidden transition-[scale] !duration-1000">
								<img
									class="h-56 group-hover:scale-110 w-full object-cover"
									src={`https://redsheep.sudev.hu/api/files/${blog.collectionId}/${blog.id}/${blog.thumbnail}?thumb=500x300f`}
									alt=""
								/>
							</div>
							<div class="flex flex-1 flex-col justify-between bg-white p-6">
								<div class="flex-1">
									<div class="mt-2 block">
										<p class="text-xl font-semibold text-gray-900">
											{#if language === 'hu'}
												{blog.title}
											{:else}
												{blog.title_en}
											{/if}
										</p>
										<p class="mt-3 text-base text-gray-500 line-clamp-3">
											{#if language === 'hu'}
												{blog.shortDesc}
											{:else}
												{blog.shortDesc_en}
											{/if}
										</p>
									</div>
								</div>
							</div></a
						>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
