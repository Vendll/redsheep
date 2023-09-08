<script lang="ts">
	import { enhance } from '$app/forms';
	import toast from 'svelte-french-toast';
	import { i, language } from '@inlang/sdk-js';

	export let form;
	export let data: any;

	const contactPage = data.props.contactPage;
</script>

<div class="relative bg-white">
	<h1 class="sr-only">Kapcsolat</h1>
	<div class="lg:absolute lg:inset-0">
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			{#if contactPage.image}
				<img
					class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
					src={contactPage.image}
					alt=""
				/>
			{:else}
				<img
					class="h-56 w-full object-cover lg:absolute lg:h-full"
					src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
					alt=""
				/>
			{/if}
		</div>
	</div>

	<div
		class="relative py-16 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32"
	>
		<div class="lg:pr-8">
			<div class="mx-auto max-w-md sm:max-w-lg lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
					{#if language === 'hu'}
						{contactPage.title}
					{:else}
						{contactPage.title_en}
					{/if}
				</h2>
				<p class="mt-4 text-lg text-gray-500 sm:mt-3">
					{#if language === 'hu'}
						{contactPage.description}
					{:else}
						{contactPage.description_en}
					{/if}
				</p>

				<div class="grid grid-cols-3 gap-4 mt-9">
					{#if contactPage.phone}
						<div class="flex flex-col space-y-4 items-center">
							<div class="inline-block transform rounded-full bg-primary-500 p-4 shadow-lg">
								<svg
									class="h-6 w-6 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
									/>
								</svg>
							</div>
							<a
								href={`tel:${contactPage.phone}`}
								class="text-center underline hover:text-primary-500"
							>
								{contactPage.phone}
							</a>
						</div>
					{/if}

					{#if contactPage.address}
						<div class="flex flex-col space-y-4 items-center">
							<div class="inline-block transform rounded-full bg-primary-500 p-4 shadow-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									class="h-6 w-6 flex-shrink-0 text-white"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
									/></svg
								>
							</div>
							<p class="text-center">
								{contactPage.address}
							</p>
						</div>
					{/if}

					{#if contactPage.email}
						<div class="flex flex-col space-y-4 items-center">
							<div class="inline-block transform rounded-full bg-primary-500 p-4 shadow-lg">
								<svg
									class="h-6 w-6 flex-shrink-0 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
									/>
								</svg>
							</div>
							<a
								href={`mailto:${contactPage.email}`}
								class="text-center underline hover:text-primary-500"
							>
								{contactPage.email}
							</a>
						</div>
					{/if}
				</div>
				<form
					method="POST"
					action="?/create"
					class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
					use:enhance={() => {
						return async ({ update }) => {
							await update();
							toast.success(i('sendsuccess'), {
								position: 'bottom-center',
								className: 'bg-primary-500'
							});
						};
					}}
				>
					{#if form?.error}
						<p class="error">{form.error}</p>
					{/if}
					<div class="sm:col-span-2">
						<label for="name" class="block text-sm font-medium text-gray-700">{i('name')}</label>
						<div class="mt-1">
							<input
								type="text"
								name="name"
								value={form?.name ?? ''}
								autocomplete="name"
								required
								class="input variant-ringed-primary"
							/>
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
						<div class="mt-1">
							<input
								name="email"
								type="email"
								value={form?.email ?? ''}
								autocomplete="email"
								required
								class="input variant-ringed-primary"
							/>
						</div>
						<!-- {#if form?.missing}<p class="error">The email field is required</p>{/if} -->
					</div>
					<div class="sm:col-span-2">
						<div class="flex justify-between">
							<label for="phone" class="block text-sm font-medium text-gray-700">{i('phone')}</label
							>
							<span class="text-sm text-gray-500">{i('optinal')}</span>
						</div>
						<div class="mt-1">
							<input
								type="text"
								name="phone"
								autocomplete="tel"
								aria-describedby="phone-description"
								class="input variant-ringed-primary"
							/>
						</div>
					</div>
					<div class="sm:col-span-2">
						<div class="flex justify-between">
							<label for="message" class="block text-sm font-medium text-gray-700"
								>{i('whathelp')}?</label
							>
							<span class="text-sm text-gray-500">Max. 500 {i('karakter')}</span>
						</div>
						<div class="mt-1">
							<textarea
								name="message"
								required
								value={form?.message ?? ''}
								aria-describedby="message-description"
								rows="4"
								class="input variant-ringed-primary"
							/>
						</div>
					</div>

					<div class="text-right sm:col-span-2">
						<button type="submit" class="btn variant-filled-primary">{i('send')}</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
