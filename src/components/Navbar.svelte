<script lang="ts">
	import { onMount } from 'svelte';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	import logo from '$lib/logo.png';
	import logoFeher from '$lib/fehersima.png';
	import RSlogo from '$lib/RSlogo.png';
	import RSfeher from '$lib/RSfeher.png';
	import { page } from '$app/stores';
	import { i, language, languages } from '@inlang/sdk-js';
	import { base } from '$app/paths';
	import { quintOut } from 'svelte/easing';

	let y: number;
	let x: number;
	let screenHeight: any;
	let screenWidth: any;
	let navColor: boolean = false;

	onMount(() => {
		screenHeight = window.innerHeight;
		screenWidth = window.innerWidth;
	});

	$: {
		if (screenWidth < 600) {
			x = screenHeight * 1.75;
		} else {
			x = screenHeight;
		}
		if (y > x - 100) {
			navColor = true;
		} else {
			navColor = false;
		}
	}

	console.log($page.url.pathname.slice(3, $page.url.pathname.length));
</script>

<svelte:window bind:scrollY={y} />

<header
	class="fixed top-0 w-full z-50"
	style="background: rgba(227, 6, 19, {$page.url.pathname === `${base}/${language}`
		? y / screenHeight
		: 1});  transition: opacity 0.5s ease;"
>
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href={`${base}/${language}`} class="-m-1.5 p-1.5">
				<span class="sr-only">Red Sheep Kft.</span>

				{#if $page.url.pathname === `${base}/${language}`}
					{#if navColor}
						<img
							in:fade={{ delay: 100, duration: 500 }}
							out:fade={{ delay: 0, duration: 0 }}
							class="h-8 hidden lg:block w-auto"
							src={logoFeher}
							alt=""
						/>
					{:else}
						<img
							in:fade={{ delay: 100, duration: 500, easing: quintOut }}
							out:fade={{ delay: 0, duration: 0, easing: quintOut }}
							class="h-8 hidden lg:block w-auto"
							src={logo}
							alt=""
						/>
					{/if}
					{#if navColor}
						<img class="h-8 block lg:hidden w-auto" src={RSfeher} alt="" />
					{:else}
						<img class="h-8 block lg:hidden w-auto" src={RSlogo} alt="" />
					{/if}
				{:else}
					<img class="h-8 hidden lg:block w-auto" src={logoFeher} alt="" />
					<img class="h-8 block lg:hidden w-auto" src={RSfeher} alt="" />
				{/if}
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				on:click={() => drawerStore.open()}
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12 items-center">
			<a
				class={`text-sm font-semibold leading-6 text-white ${
					$page.url.pathname === '/'
						? y / screenHeight <= 1
							? 'hover:text-primary-500'
							: 'hover:text-secondary-500'
						: 'hover:text-secondary-500'
				} transition-all duration-300`}
				href={`${base}/${language}/rolunk`}>{i('rolunk')}</a
			>
			<a
				class={`text-sm font-semibold leading-6 text-white ${
					$page.url.pathname === '/'
						? y / screenHeight <= 1
							? 'hover:text-primary-500'
							: 'hover:text-secondary-500'
						: 'hover:text-secondary-500'
				} transition-all duration-300`}
				href={`${base}/${language}/szolgaltatasok`}>{i('szolgaltatasok')}</a
			>
			<a
				class={`text-sm font-semibold leading-6 text-white ${
					$page.url.pathname === '/'
						? y / screenHeight <= 1
							? 'hover:text-primary-500'
							: 'hover:text-secondary-500'
						: 'hover:text-secondary-500'
				} transition-all duration-300`}
				href={`${base}/${language}/blog`}>{i('blog')}</a
			>
			<a
				class={`text-sm font-semibold leading-6 text-white ${
					$page.url.pathname === '/'
						? y / screenHeight <= 1
							? 'hover:text-primary-500'
							: 'hover:text-secondary-500'
						: 'hover:text-secondary-500'
				} transition-all duration-300`}
				href={`${base}/${language}/ugyfeleink`}>{i('ugyfeleink')}</a
			>
			<a
				class={`text-sm font-semibold leading-6 text-white ${
					$page.url.pathname === '/'
						? y / screenHeight <= 1
							? 'hover:text-primary-500'
							: 'hover:text-secondary-500'
						: 'hover:text-secondary-500'
				} transition-all duration-300`}
				href={`${base}/${language}/kapcsolat`}>{i('kapcsolat')}</a
			>
			<div class="gap-3 flex">
				{#each languages as lang}
					<a
						href={`${base}/${lang}${$page.url.pathname.slice(3, $page.url.pathname.length)}`}
						class="text-sm border border-white rounded-full py-2.5 px-3 uppercase font-semibold leading-6 text-white"
					>
						{lang}
					</a>
				{/each}
			</div>
		</div>
	</nav>
</header>
