<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		function isTopThirdDark(): boolean {
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');

			if (!ctx) {
				console.error('Failed to get canvas context');
				return false;
			}

			const width = window.innerWidth;
			const height = window.innerHeight / 3;

			canvas.width = width;
			canvas.height = height;

			ctx.drawImage(document.body, 0, 0, width, height);

			const imageData = ctx.getImageData(0, 0, width, height).data;
			let dark = 0;
			let light = 0;

			for (let i = 0; i < imageData.length; i += 4) {
				const red = imageData[i];
				const green = imageData[i + 1];
				const blue = imageData[i + 2];
				const brightness = (red + green + blue) / 3;

				if (brightness < 128) {
					dark++;
				} else {
					light++;
				}
			}

			return dark > light;
		}

		const result = isTopThirdDark();
		if (result) {
			console.log('The top third of the screen is more dark.');
		} else {
			console.log('The top third of the screen is more light.');
		}
	});
</script>

<!-- You can add your HTML and styling here -->
