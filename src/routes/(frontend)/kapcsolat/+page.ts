import type { PageLoad } from './$types';
import { pb } from '$lib/api';

export const load = (async () => {
	const contactPage = await pb.collection('contactPage').getFirstListItem('');

	return {
		props: {
			contactPage: contactPage
		}
	};
}) satisfies PageLoad;
