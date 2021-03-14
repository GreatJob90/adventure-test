<template lang="pug">
	main.main
		<Header :page="key" />
		.main__content
			<transition name="fade" mode="out-in">
				<router-view :key="key"></router-view>
			</transition>
		<Footer :page="key" />
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import 'swiper/swiper-bundle.css'

import { on_load_mixin } from "./system/statistics";

export default {
	mixins: [
		on_load_mixin
	],
	components: {
		Header,
		Footer,
	},
	computed: {
		key() {
			return this.$route.meta.key !== undefined
				? this.$route.meta.key : this.$route;
		},
	},
};
</script>

<style lang="stylus">
.main
	pos relative
	font-size $font-size
	ff $font_main
	dfv(stretch)
	min-height 100vh

	@media screen and (max-width $tablet_sm)
		font-size $font-size_sm

	&__content
		flex 1

.page
	pt 60px
	pb 80px

	@media screen and (max-width $tablet_lg)
		pt 40px
		pb 60px

.container
	w 100%
	max-width $container-lg
	mr auto
	ml auto

	@media screen and (max-width $desktop_m)
		max-width $container-m

	@media screen and (max-width $desktop_sm)
		max-width $container-sm

	@media screen and (max-width $tablet_lg)
		max-width unset
		pr 16px
		pl 16px

	@media screen and (max-width $mobile_lg)
		pr 10px
		pl 10px

.modal-mask
	pos absolute
	z-index 99
	bgc rgba(0,0,0, 0.5)
	df(center, center)
	full()

.modal
	pos relative

	&__close
		pos absolute
		t -30px
		l auto
		r -30px
		opacity .6
		transition opacity $transition-speed
		cursor pointer
		user-select none

		&:hover
			opacity 1
</style>
