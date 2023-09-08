import type { PageLoad } from './$types';
import { pb } from '$lib/api';

export const load = (async ({ params }) => {
	const ugyfel = await pb.collection('ugyfelek').getFirstListItem(`id="${params.slug}"`);

	return {
		props: {
			ugyfel: ugyfel
		}
	};
}) satisfies PageLoad;
