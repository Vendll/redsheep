<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import LogoCloud from '$components/LogoCloud.svelte';
	import Mission from '$components/Mission.svelte';
	import Testimonials from '$components/Testimonials.svelte';
	import Cta from '$components/Cta.svelte';
	import { i, language } from '@inlang/sdk-js';

	export let data: any;
	const hero = data.props.hero;
	const heroFeatures = data.props.heroFeatures;
	const partnerek = data.props.partnerek;
	const kuldetes = data.props.kuldetes;
	const rolunkMondtak = data.props.rolunkMondtak;
	const mainCTA = data.props.mainCTA;
</script>

<Hero {i} {language} {hero} {heroFeatures} />
<LogoCloud {language} {partnerek} />
<Mission {i} {language} {kuldetes} />
<Testimonials {language} {rolunkMondtak} />
<Cta {language} {mainCTA} />
