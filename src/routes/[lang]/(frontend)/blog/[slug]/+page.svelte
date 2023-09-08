<script lang="ts">
	import { i, language } from '@inlang/sdk-js';
	export let data: any;

	const blog = data.props.blog;
</script>

<div class="relative overflow-hidden bg-white py-16 lg:py-32">
	<div class="relative px-6 lg:px-8">
		<div class="mx-auto prose max-w-prose text-lg">
			<h1>
				{#if blog.subTitle}
					<span class="block text-center text-lg font-semibold text-indigo-600">
						{#if language === 'hu'}
							{blog.subTitle}
						{:else}
							{blog.subTitle_en}
						{/if}
					</span>
				{/if}
				<span
					class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"
				>
					{#if language === 'hu'}
						{blog.title}
					{:else}
						{blog.title_en}
					{/if}
				</span>
			</h1>
		</div>
		<div class="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
			{#if language === 'hu'}
				{@html blog.content}
			{:else}
				{@html blog.content_en}
			{/if}
		</div>
	</div>
</div>
