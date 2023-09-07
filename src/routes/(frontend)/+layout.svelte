<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import { AppShell, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import Scrolltop from '$components/Scrolltop.svelte';
	import Footer from '$components/Footer.svelte';
	import RSlogo from '$lib/RSlogo.png';
	import { Toaster } from 'svelte-french-toast';
	export let data: any;
	const footer = data.props.footer;
</script>

<AppShell>
	<Navbar />
	<Scrolltop />
	<Toaster />
	<Drawer class="z-[9999]" position="right" width="max-w-sm">
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<div
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<img class="h-8 w-auto" src={RSlogo} alt="" />
					</a>
					<button
						on:click={() => drawerStore.close()}
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<a
								href="/"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Kezdőlap</a
							>
							<a
								href="/rolunk"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Rólunk</a
							>
							<a
								href="/szolgaltatasok"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Szolgáltatások</a
							>
							<a
								href="/blog"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Blog</a
							>
							<a
								href="/ugyfeleink"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Ügyfeleink</a
							>
							<a
								href="/kapcsolat"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Kapcsolat</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Drawer>
	<slot />
	<Footer {footer} />
</AppShell>
