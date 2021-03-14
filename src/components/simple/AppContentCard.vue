<template lang="pug">
	div.content-card.swiper-container(:class="`swiper-init_${state.id} ${state.disabled ? 'disabled' : ''}`")
		div.swiper-wrapper
			div.swiper-slide(v-for="slide in state.slides")
				div.content-card__image(v-if="slide.image")
					div.content-card__popup-icon(v-if="slide.hasPopup" @click="openImageModal({ path: slide.image, title: slide.title || slide.title_sm })")
						img(src="img/svg/magnifier_icon.svg")
					img(:src="slide.image" :alt="slide.title || slide.title_sm")
				div.content-card__video(v-if="slide.video")
					div.content-card__video-icon
						img(src="img/svg/video-play_icon.svg")
					video(:src="''" :poster="slide.video" :alt="slide.title || slide.title_sm")
				h3.content-card__title(v-if="slide.title") {{ slide.title }}
				h4.content-card__title-sm(v-if="slide.title_sm") {{ slide.title_sm }}
				span.content-card__background(v-if="slide.background" :style="`background: ${slide.background};`")
				p.content-card__text(v-if="slide.text") {{ slide.text }}
		div.content-card__slider-controls
			div.content-card__slider-prev
				img(src="img/svg/arrow.svg")
			div.content-card__slider-next
				img(src="img/svg/arrow.svg")
</template>

<script>
import { Swiper, Navigation } from 'swiper'
Swiper.use([Navigation])

export default {
	name: 'AppContentCard',
	props: {
		isMain: {
			type: Boolean,
			default: false
		},
		state: {
			type: Object,
			default: () => ({})
		}
	},
	methods: {
		openImageModal(image) {
			this.$emit('open-image-modal', image)
		}
	},
	mounted () {
		// eslint-disable-next-line no-unused-vars
		const slider = new Swiper(`.swiper-init_${this.state.id}`, {
			slidesPerView: 1,
			spaceBetween: 0,
			observer: true,
			observeParents: true,
			navigation: {
				prevEl: `.swiper-init_${this.state.id} .content-card__slider-prev`,
				nextEl: `.swiper-init_${this.state.id} .content-card__slider-next`
			}
		})
	}
}
</script>

<style lang="stylus">
.content-card
	color $font-color_main
	h 100%

	.swiper-slide
		pos relative
		padding 40px 20px
		df(center, center)

		@media screen and (max-width $desktop_m)
			padding 34px 20px

	&__image,&__video,&__background
		pos absolute
		full()

	&__image
		img
			w 100%
			position relative
			z-index -1
			object-fit cover

	&__background
		z-index -1

	&__video
		video
			width 100%
			position relative
			z-index -1
			object-fit cover

	&__popup-icon,&__video-icon
		pos absolute
		z-index 3
		t 50%
		r 0
		l 0
		margin 0 auto
		transform translateY(-50%)
		df(center, center)
		width fit-content
		cursor pointer
		user-select none
		transition opacity $transition-speed

		&:hover
			opacity .8

	&__title
		font-size 1.8em

	&__title-sm
		pos absolute
		t auto
		b 16px
		l 20px
		font-size 1.2em

		@media screen and (max-width $desktop_m)
			font-size 1em
			b 8px

		@media screen and (max-width $mobile_lg)
			font-size 1.2em
			b 10px

	&__text
		h 100%
		oh()
		font-size .7em
		line-height 1.5
		opacity .5

		@media screen and (max-width $desktop_m)
			line-height 1.25

		@media screen and (max-width $tablet_sm)
			font-size .9em

		@media screen and (max-width $mobile_lg)
			font-size .7em

		@media screen and (max-width $mobile_lg)
			font-size 1em

	&__slider-controls
		position absolute
		z-index 2
		t auto
		r 20px
		b 16px
		l auto
		df()

		@media screen and (max-width $desktop_m)
			b 8px

		@media screen and (max-width $mobile_lg)
			b 10px

	&__slider-prev,&__slider-next
		opacity .5
		transition opacity $transition-speed
		cursor pointer
		user-select none

		&:hover
			opacity 1

	&__slider-prev
		mr 16px

	&__slider-next
		transform rotate(180deg)

	&.disabled
		pointer-events none
		transform scale(.8)

		&::before
			content ''
			pos absolute
			z-index 10
			full()
			bgc rgba(255,255,255, 0.6)

</style>
