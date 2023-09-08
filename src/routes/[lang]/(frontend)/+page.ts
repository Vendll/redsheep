import { pb } from '$lib/api';

export const load = async () => {
	const resultHero = await pb.collection('hero').getFirstListItem('', { expand: 'heroFeature' });
	const resultHeroFeatures = await pb.collection('heroFeatures').getFullList();
	const resultPartnerek = await pb.collection('partnerek').getFirstListItem('');
	const resultKuldetes = await pb.collection('kuldetesunk').getFirstListItem('');
	const rolunkMondtak = await pb.collection('rolunkmondtak').getFullList();
	const mainCTA = await pb.collection('mainCTA').getFirstListItem('');

	return {
		props: {
			hero: resultHero,
			heroFeatures: resultHeroFeatures,
			partnerek: resultPartnerek,
			kuldetes: resultKuldetes,
			rolunkMondtak: rolunkMondtak,
			mainCTA: mainCTA
		}
	};
};
