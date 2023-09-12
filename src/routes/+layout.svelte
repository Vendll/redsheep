<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import logo from '$lib/favico.ico';
	import ogimage from '$lib/rs_ogimage.jpeg';
</script>

<svelte:head>
	<title>Red Sheep</title>
	<meta name="title" content="Red Sheep" />
	<meta name="og:title" content="Red Sheep" />
	<meta
		name="description"
		content="Mi a Red Sheep-nél levesszük a marketing feladatok és a rendezvényszervezés nehézségeit a válladról."
	/>
	<meta
		name="og:description"
		content="Mi a Red Sheep-nél levesszük a marketing feladatok és a rendezvényszervezés nehézségeit a válladról."
	/>
	<meta
		name="twitter:description"
		content="Mi a Red Sheep-nél levesszük a marketing feladatok és a rendezvényszervezés nehézségeit a válladról."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@redsheepkft" />
	<meta name="twitter:creator" content="@redsheepkft" />
	<meta name="twitter:title" content="Red Sheep" />
	<meta name="twitter:image" content={ogimage} />
	<meta name="og:image" content={ogimage} />
	<meta name="image" content={ogimage} />
	<meta name="og:url" content="https://redsheep.sudev.hu/" />
	<meta name="og:type" content="website" />
	<meta name="og:site_name" content="Red Sheep" />
	<link rel="icon" href={logo} />
	<meta name="theme-color" content="#E30613" />
</svelte:head>

<slot />
