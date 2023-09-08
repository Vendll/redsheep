import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		try {
			console.log(data);
			/* fetch("/api/sendmail"); */
		} catch (error) {
			return fail(422, {
				name: data.get('name'),
				email: data.get('email'),
				message: data.get('message'),
				error: error.message
			});
		}
	}
};
