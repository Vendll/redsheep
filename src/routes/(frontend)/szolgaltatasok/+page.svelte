<script lang="ts">
	import Szolgaltatasok from '$components/Szolgaltatasok.svelte';
	export let data: any;
	const szolgaltatasokPage = data.props.szolgaltatasokPage;
	const szolgaltatasok = data.props.szolgaltatasok;
</script>

<Szolgaltatasok {szolgaltatasokPage} {szolgaltatasok} />
