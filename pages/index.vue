<template>
	<IndexMain />
</template>

<script>
export default {
	head() {
		return {
			link: [
				{
					rel: 'stylesheet',
					href: `//high.milkt.co.kr/css/new/entra_info.css`,
				},
				{ rel: 'stylesheet', href: '//high.milkt.co.kr/css/renew/main_220502.css' },
			],
			script: [
				{
					src: `//high.milkt.co.kr/js/new/jquery.easing.1.3.js`,
				},
				{ src: '//high.milkt.co.kr/js/renew/main_220502.js' },
			],
		}
	},
}
</script>
