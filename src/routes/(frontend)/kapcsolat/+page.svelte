<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
	import { onMount } from 'svelte';
	import toast from 'svelte-french-toast';
</script>

<div class="relative bg-white">
	<div class="lg:absolute lg:inset-0">
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img
				class="h-56 w-full object-cover lg:absolute lg:h-full"
				src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
				alt=""
			/>
		</div>
	</div>
	<div
		class="relative py-16 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32"
	>
		<div class="lg:pr-8">
			<div class="mx-auto max-w-md sm:max-w-lg lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Let's work together</h2>
				<p class="mt-4 text-lg text-gray-500 sm:mt-3">
					We would love to hear from you! Send us a message using the form opposite, or email us.
				</p>
				<form
					method="POST"
					action="?/create"
					class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
					use:enhance={() => {
						return async ({ update }) => {
							await update();
							toast.success('Your message has been sent!', {
								position: 'bottom-right'
							});
						};
					}}
				>
					{#if form?.error}
						<p class="error">{form.error}</p>
					{/if}
					<div>
						<label for="firstName" class="block text-sm font-medium text-gray-700">First name</label
						>
						<div class="mt-1">
							<input
								type="text"
								name="firstName"
								autocomplete="given-name"
								value={form?.firstName ?? ''}
								required
								class="input variant-ringed-primary"
							/>
						</div>
					</div>
					<div>
						<label for="lastName" class="block text-sm font-medium text-gray-700">Last name</label>
						<div class="mt-1">
							<input
								type="text"
								name="lastName"
								value={form?.lastName ?? ''}
								autocomplete="family-name"
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
						<label for="company" class="block text-sm font-medium text-gray-700">Company</label>
						<div class="mt-1">
							<input
								type="text"
								name="company"
								id="company"
								autocomplete="organization"
								class="input variant-ringed-primary"
							/>
						</div>
					</div>
					<div class="sm:col-span-2">
						<div class="flex justify-between">
							<label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
							<span class="text-sm text-gray-500">Optional</span>
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
								>Miben tudunk segíteni?</label
							>
							<span class="text-sm text-gray-500">Max. 500 karakter</span>
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
						<button type="submit" class="btn variant-filled-primary">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
