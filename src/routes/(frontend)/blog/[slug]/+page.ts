import type { PageLoad } from './$types';
import { page } from '$app/stores';
import { pb } from '$lib/api';

export const load = (async ({ params }) => {
	console.log(params);

	const blog = await pb.collection('blog').getFirstListItem(`id="${params.slug}"`);

	return {
		props: {
			blog: blog
		}
	};
}) satisfies PageLoad;
