import type { PageServerLoad } from './$types';
import { pb } from '$lib/api';

export const load = (async () => {
	const blogList = await pb.collection('blog').getFullList({
		sort: '-created',
		fields:
			'title,title_en,thumbnail,subTitle,subTitle_en,shortDesc,shortDesc_en,id,created,collectionId,collectionName'
	});
	const blogPage = await pb.collection('blogPage').getFirstListItem('');

	return {
		props: {
			blogList: blogList,
			blogPage: blogPage
		}
	};
}) satisfies PageServerLoad;
