<script lang="ts">
	import { i, language } from '@inlang/sdk-js';
	export let data: any;
	const ugyfelek = data.props.ugyfelek;
	const ugyfelekPage = data.props.ugyfelekPage;
</script>

<div class="bg-white">
	<div class="mx-auto max-w-7xl px-6 lg:px-8 py-28">
		<div class="space-y-12">
			<div class="text-center">
				<h2 class="text-lg font-semibold leading-8 tracking-tight uppercase text-primary-500">
					{#if language === 'hu'}
						{ugyfelekPage.subTitle}
					{:else}
						{ugyfelekPage.subTitle_en}
					{/if}
				</h2>
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{#if language === 'hu'}
						{ugyfelekPage.title}
					{:else}
						{ugyfelekPage.title_en}
					{/if}
				</h2>
				<p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
					{#if language === 'hu'}
						{ugyfelekPage.description}
					{:else}
						{ugyfelekPage.description_en}
					{/if}
				</p>
			</div>

			<ul
				class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
			>
				{#each ugyfelek as ugyfel}
					<li>
						<div class="space-y-4">
							<a href={`/${language}/ugyfeleink/${ugyfel.id}`} class="group">
								<div class="aspect-w-3 aspect-h-2">
									{#if ugyfel.image}
										<img
											class="rounded-[--theme-rounded-base] object-contain shadow-lg"
											src={`https://redsheep.sudev.hu/api/files/${ugyfel.collectionId}/${ugyfel.id}/${ugyfel.image}?thumb=500x300f`}
											alt={ugyfel.company}
										/>
									{:else}
										<img
											class="rounded-[--theme-rounded-base] object-cover shadow-lg"
											src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
											alt=""
										/>
									{/if}
								</div>
							</a>

							<div class="space-y-2">
								<div class="space-y-1 text-lg font-medium leading-6">
									<a href={`/${language}/ugyfeleink/${ugyfel.id}`} class="hover:underline"
										>{ugyfel.company}</a
									>
								</div>
								<ul class="flex space-x-5">
									{#if ugyfel.twitter}
										<li>
											<a
												href={ugyfel.twitter}
												target="_blank"
												class="text-gray-400 hover:text-primary-500"
											>
												<span class="sr-only">Twitter</span>
												<svg
													class="h-6 w-6"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path
														d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
													/>
												</svg>
											</a>
										</li>
									{/if}
									{#if ugyfel.facebook}
										<li>
											<a
												href={ugyfel.facebook}
												target="_blank"
												class="text-gray-400 hover:text-primary-500"
											>
												<span class="sr-only">Facebook</span>
												<svg
													class="h-6 w-6"
													fill="currentColor"
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<path
														fill-rule="evenodd"
														d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
														clip-rule="evenodd"
													/>
												</svg>
											</a>
										</li>
									{/if}
									{#if ugyfel.instagram}
										<li>
											<a
												href={ugyfel.instagram}
												target="_blank"
												class="text-gray-400 hover:text-primary-500"
											>
												<span class="sr-only">Instagram</span>
												<svg
													class="h-6 w-6"
													fill="currentColor"
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<path
														fill-rule="evenodd"
														d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
														clip-rule="evenodd"
													/>
												</svg>
											</a>
										</li>
									{/if}
									{#if ugyfel.youtube}
										<li>
											<a
												href={ugyfel.youtube}
												target="_blank"
												class="text-gray-400 hover:text-primary-500"
											>
												<span class="sr-only">YouTube</span>
												<svg
													class="h-6 w-6"
													fill="currentColor"
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<path
														fill-rule="evenodd"
														d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
														clip-rule="evenodd"
													/>
												</svg>
											</a>
										</li>
									{/if}
									{#if ugyfel.tiktok}
										<li>
											<a
												href={ugyfel.tiktok}
												target="_blank"
												class="text-gray-400 hover:text-primary-500"
											>
												<span class="sr-only">Tiktok</span>
												<svg
													fill="currentColor"
													class="h-6 w-6"
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<path
														d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
													/>
												</svg>
											</a>
										</li>
									{/if}
									{#if ugyfel.linkedin}
										<li>
											<a
												href={ugyfel.linkedin}
												target="_blank"
												class="text-gray-400 hover:text-primary-500"
											>
												<span class="sr-only">LinkedIn</span>
												<svg
													class="h-6 w-6"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path
														fill-rule="evenodd"
														d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
														clip-rule="evenodd"
													/>
												</svg>
											</a>
										</li>
									{/if}
								</ul>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
