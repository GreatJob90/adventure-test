<template lang="pug">
	header.header
		div.container.header__container
			div.logo
				div.logo__image
					img(src="img/svg/logo.svg")
				div.logo__text-wrap
					div.logo__title adventure
					div.logo__tagline сделай красиво, чтобы было красиво
</template>

<style lang="stylus">
.header
	pos relative
	df(center)
	h 80px
	bgc $color_alt_01

	&__container
		df(center)

.logo
	df(center)
	color $font-color_main
	user-select none

	&__image,&__text-wrap
		pos relative
		z-index 2

	&__image
		mr 20px

	&__title
		font-size 1.6em

	&__tagline
		ff $font_second
		font-size .55em
		opacity .5

	&::before
		content ''
		pos absolute
		full()
		bgc $color_second_01
		opacity 0
		pointer-events none
		transition opacity $transition-speed

	&:hover
		&::before
			opacity 1
</style>
