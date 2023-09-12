import type { PageLoad } from './$types';
import { pb } from '$lib/api';

export const load = (async ({ params }) => {
	const blog = await pb.collection('blog').getFirstListItem(`id="${params.slug}"`);

	return {
		props: {
			blog: blog
		}
	};
}) satisfies PageLoad;
