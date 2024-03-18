import type { PageLoad } from './$types';
import { pb } from '$lib/api';

export const load = (async () => {
	const rolunkTop = await pb.collection('rolunkTop').getFirstListItem('');
	const rolunkMiddle = await pb.collection('rolunkMiddle').getFirstListItem('');
	const teamTexts = await pb.collection('teamTexts').getFirstListItem('');
	const teamMembers = await pb.collection('teamMembers').getFullList();

	return {
		props: {
			rolunkTop: rolunkTop,
			rolunkMiddle: rolunkMiddle,
			teamTexts: teamTexts,
			teamMembers: teamMembers
		}
	};
}) satisfies PageLoad;
