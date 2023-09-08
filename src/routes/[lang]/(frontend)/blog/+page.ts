import type { PageLoad } from './$types';
import { pb } from '$lib/api';

export const load = (async () => {
	const blogList = await pb.collection('blog').getFullList({
		sort: '-created'
	});
	const blogPage = await pb.collection('blogPage').getFirstListItem('');

	return {
		props: {
			blogList: blogList,
			blogPage: blogPage
		}
	};
}) satisfies PageLoad;
