<template lang="pug">
	div.modal-mask
		div.modal
			div.modal__close(@click="closeModal")
				img(src="img/svg/close_icon.svg" alt="закрыть")
			img(:src="image.path" :alt="image.title")
</template>

<script>
export default {
	name: 'AppImageModal',
	props: {
		image: {
			type: Object,
			default: () => ({
				path: '',
				title: ''
			})
		}
	},
	methods: {
		closeModal () {
			this.$emit('close-modal')
		}
	},
	mounted () {}
}
</script>

<style lang="stylus">

</style>
