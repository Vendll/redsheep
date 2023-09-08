import type { PageLoad } from './$types';
import { pb } from '$lib/api';

export const load = (async () => {
	const szolgaltatasokPage = await pb.collection('szolgaltatasokPage').getFirstListItem('');
	const szolgaltatasok = await pb.collection('szolgaltatasok').getFullList();

	return {
		props: {
			szolgaltatasokPage: szolgaltatasokPage,
			szolgaltatasok: szolgaltatasok
		}
	};
}) satisfies PageLoad;
