<template lang="pug">
	footer.footer
		div.container.footer__container
			div.copyright &copy; 2013 - 2015
			div.footer__tip
				div.footer__tip-text <span class="special">Одна ошибка и&nbsp;</span>ты ошибся

				div.footer__tip-image
					img(src="img/svg/cp-logo.svg")
</template>

<style lang="stylus">
.footer
	pt 10px
	pb 10px
	bgc $color_alt_01
	color $font-color_main

	&__container
		df(center, space-between)

	&__tip
		df(center)

		&-text
			ff $font_second
			font-size .7em

			.special
				opacity 0.5

		&-image
			ml 14px

.copyright
	font-size .8em
	opacity .5
</style>
