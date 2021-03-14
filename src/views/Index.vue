<template lang="pug">
	div.page.container
		nav.tab-nav
			div.tab-nav__item(v-for="tab in tabList"
												:key="tab.title"
												:class="tab.isActive ? 'active' : ''"
												@click="selectTab(tab.id)") {{ tab.title }}

		div.tab-content(v-for="tab in tabList" :key="tab.id")
			div.card-grid(v-if="tab.isActive")
				div.card-grid__item(v-for="card in tab.cardList")
					AppContentCard(:state="card" @open-image-modal="openImageModal")
				div.main-card.card-grid__main-card(v-if="tab.mainCard")
					h3.main-card__title {{ tab.mainCard.title }}
					ul.card-list.main-card__list
						li.card-list__item(v-for="item in tab.mainCard.list") {{ item }}
					div.main-card__image
						img(:src="tab.mainCard.image")
		transition(name="fade")
			AppImageModal(v-if="imageModal.isActive"
										:image="imageModal.image"
										@close-modal="closeImageModal")
</template>

<script>
import AppContentCard from "@/components/simple/AppContentCard";
import AppImageModal from "@/components/simple/AppImageModal";
export default {
	name: 'AppHomePage',
	components: {AppImageModal, AppContentCard},
	computed: {
		tabList () {
			return this.$store.getters.getHomePageTabs
		},
		imageModal () {
			return this.$store.getters.getHomePageImageModal
		}
	},
	methods: {
		selectTab (tabId) {
			this.$store.commit('[homepage] SELECT_TAB', tabId)
		},
		openImageModal (image) {
			this.$store.commit('[homepage] OPEN_IMAGE_MODAL', image)
		},
		closeImageModal () {
			this.$store.commit('[homepage] CLOSE_IMAGE_MODAL')
		}
	}
}
</script>

<style lang="stylus">
.tab-nav
	df()
	ff $font_second
	font-size .7em
	mb 20px

	@media screen and (max-width $mobile_lg)
		dfv(center)

	&__item
		pos relative
		text-transform uppercase
		mr 26px
		pb 6px
		white-space nowrap
		opacity .5
		font-weight bolder
		cursor pointer
		user-select none
		transition opacity $transition-speed

		@media screen and (max-width $mobile_lg)
			font-size 1.3em
			mr 0
			mb 20px

		&:hover
			opacity 1

		&.active
			opacity 1

			&::after
				transform scaleX(1)

		&:last-child
			mr 0
			mb 0

		&::after
			content ''
			db()
			pos absolute
			t auto
			l 0
			b 0
			w 100%
			h 2px
			bgc currentColor
			transition $transition-speed
			transform-origin left
			transform scaleX(0)

.card-grid
	display grid
	grid-template-columns repeat(4, 1fr)
	grid-auto-rows 200px
	grid-gap 20px

	@media screen and (max-width $desktop_m)
		grid-gap 16px
		grid-auto-rows 170px

	@media screen and (max-width $desktop_sm)
		grid-gap 10px
		grid-template-columns repeat(3, 1fr)

	@media screen and (max-width $tablet_sm)
		grid-template-columns repeat(2, 1fr)

	@media screen and (max-width $mobile_lg)
		grid-template-columns 1fr
		grid-auto-rows 220px
		grid-gap 0
		grid-row-gap 16px

	@media screen and (max-width $mobile_lg)
		grid-auto-rows 180px

	&__item
		oh()

	&__main-card
		grid-column 3 / 5
		grid-row 1 / 3

		@media screen and (max-width $desktop_sm)
			grid-column 2 / 4
			grid-row 1 / 4

		@media screen and (max-width $tablet_sm)
			grid-column 2 / 3
			grid-row 1 / 3

		@media screen and (max-width $mobile_lg)
			grid-column 1 / 3

.main-card
	pos relative
	color $font-color_main
	oh()
	padding 10% 30px 50px

	@media screen and (max-width $desktop_m)
		padding 10% 30px 30px

	@media screen and (max-width $mobile_lg)
		padding 20px 18px

	@media screen and (max-width $mobile_lg)
		padding 10% 20px 30px

	&__image
		pos absolute
		full()
		z-index -1

		img
			min-height 100%
			width 100%
			object-fit cover

	&__title
		font-size 2em
		mb 30px

		@media screen and (max-width $desktop_m)
			mb 18px

		@media screen and (max-width $mobile_lg)
			font-size 2.2em

	&__list
		ml 12px

.card-list
	counter-reset itemNumber

	&__item
		mb 30px

		@media screen and (max-width $desktop_m)
			mb 18px

		@media screen and (max-width $desktop_sm)
			mb 24px

		@media screen and (max-width $mobile_lg)
			mb 16px

		&::before
			counter-increment itemNumber
			content counter(itemNumber)'.'
			mr 6px

		&:last-child
			mb 0
</style>
