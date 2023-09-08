<script lang="ts">
	import Bloglist from '$components/Bloglist.svelte';
	export let data: any;
	const blogList = data.props.blogList;
	const blogPage = data.props.blogPage;
</script>

<Bloglist {blogList} {blogPage} />
