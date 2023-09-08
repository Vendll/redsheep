<script lang="ts">
	import RolunkContent from '$components/RolunkContent.svelte';

	export let data: any;

	const rolunkTop = data.props.rolunkTop;
	const rolunkMiddle = data.props.rolunkMiddle;
	const teamTexts = data.props.teamTexts;
	const teamMembers = data.props.teamMembers;
</script>

<RolunkContent {rolunkTop} {rolunkMiddle} {teamTexts} {teamMembers} />
