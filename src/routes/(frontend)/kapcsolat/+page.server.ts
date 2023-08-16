import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import toast from 'svelte-french-toast';

export const actions: Actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		try {
			console.log(data);
			toast.success('Sikeres küldés!', {
				position: 'bottom-center'
			});
		} catch (error) {
			return fail(422, {
				firstName: data.get('firstName'),
				lastName: data.get('lastName'),
				email: data.get('email'),
				message: data.get('message'),
				error: error.message
			});
		}
	}
};
