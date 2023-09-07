<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import LogoCloud from '$components/LogoCloud.svelte';
	import Mission from '$components/Mission.svelte';
	import Testimonials from '$components/Testimonials.svelte';
	import Cta from '$components/Cta.svelte';

	export let data: any;
	const hero = data.props.hero;
	const heroFeatures = data.props.heroFeatures;
	const partnerek = data.props.partnerek;
	const kuldetes = data.props.kuldetes;
	const rolunkMondtak = data.props.rolunkMondtak;
	const mainCTA = data.props.mainCTA;
	const footer = data.props.footer;
	console.log(footer);
</script>

<Hero {hero} {heroFeatures} />
<LogoCloud {partnerek} />
<Mission {kuldetes} />
<Testimonials {rolunkMondtak} />
<Cta {mainCTA} />
