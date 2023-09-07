import type { LayoutLoad } from './$types';
import { pb } from '$lib/api';

export const load = (async () => {
	const footer = await pb.collection('footer').getFirstListItem('');
	return {
		props: {
			footer: footer
		}
	};
}) satisfies LayoutLoad;
