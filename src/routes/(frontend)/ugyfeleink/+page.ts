import type { PageLoad } from './$types';
import { pb } from '$lib/api';

export const load = (async () => {
	const ugyfelek = await pb.collection('ugyfelek').getFullList();
	const ugyfelekPage = await pb.collection('ugyfelekPage').getFirstListItem('');

	return {
		props: {
			ugyfelek: ugyfelek,
			ugyfelekPage: ugyfelekPage
		}
	};
}) satisfies PageLoad;
