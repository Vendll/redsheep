<script lang="ts">
	import { base } from '$app/paths';
	export let blogList: any;
	export let blogPage: any;
</script>

<div class="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-28 lg:pb-28">
	<div class="absolute inset-0">
		<div class="h-1/3 bg-white sm:h-2/3" />
	</div>
	<div class="relative mx-auto max-w-7xl">
		<div class="text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{blogPage.title}</h2>
			<p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
				{blogPage.description}
			</p>
		</div>
		<div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
			{#each blogList as blog}
				<div class="flex flex-col overflow-hidden rounded-[--theme-rounded-base] shadow-lg">
					<a href={`${base}/blog/${blog.id}`} class="group">
						<div class="flex-shrink-0 overflow-hidden transition-[scale] !duration-1000">
							<img
								class="h-56 group-hover:scale-110 w-full object-cover"
								src={`https://redsheep.sudev.hu/api/files/${blog.collectionId}/${blog.id}/${blog.thumbnail}`}
								alt=""
							/>
						</div>
						<div class="flex flex-1 flex-col justify-between bg-white p-6">
							<div class="flex-1">
								<div class="mt-2 block">
									<p class="text-xl font-semibold text-gray-900">{blog.title}</p>
									<p class="mt-3 text-base text-gray-500 line-clamp-3">
										{blog.shortDesc}
									</p>
								</div>
							</div>
						</div></a
					>
				</div>
			{/each}
		</div>
	</div>
</div>
