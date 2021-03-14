const state = () => ({
	imageModal: {
		isActive: false,
		image: null
	},
	pageTabs: {
		allCountries: {
			id: 1,
			isActive: true,
			title: 'Все страны',
			mainCard: {
				title: 'Latin America',
				image: './img/content/homepage/all-countries/main-card.png',
				list: [
					'Honduras', 'Columbia', 'Panama', 'Brazil', 'Peru'
				]
			},
			cardList: [
				{
					id: 1,
					slides: [
						{
							title: 'Cuba',
							image: './img/content/homepage/all-countries/cuba/slide_01.png'
						},
						{
							title_sm: 'Cuba',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Гаване? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Cuba',
							image: './img/content/homepage/all-countries/cuba/slide_03.png',
							hasPopup: true
						},
						{
							title_sm: 'Cuba',
							video: './img/content/homepage/all-countries/cuba/slide_04.png'
						},
					]
				},
				{
					id: 2,
					slides: [
						{
							title: 'Russia',
							image: './img/content/homepage/all-countries/russia/slide_01.png'
						},
						{
							title_sm: 'Russia',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Москве? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Russia',
							image: './img/content/homepage/all-countries/russia/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Russia',
							video: './img/content/homepage/all-countries/russia/slide_01.png'
						},
					]
				},
				{
					id: 3,
					slides: [
						{
							title: 'England',
							image: './img/content/homepage/all-countries/england/slide_01.png'
						},
						{
							title_sm: 'England',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Лондоне? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'England',
							image: './img/content/homepage/all-countries/england/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'England',
							video: './img/content/homepage/all-countries/england/slide_01.png'
						},
					]
				},
				{
					id: 4,
					slides: [
						{
							title: 'Norway',
							image: './img/content/homepage/all-countries/norway/slide_01.png'
						},
						{
							title_sm: 'Norway',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Осло? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Norway',
							image: './img/content/homepage/all-countries/norway/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Norway',
							video: './img/content/homepage/all-countries/norway/slide_01.png'
						},
					]
				},
				{
					id: 5,
					slides: [
						{
							title: 'Switzerland',
							image: './img/content/homepage/all-countries/switzerland/slide_01.png'
						},
						{
							title_sm: 'Switzerland',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Берне? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Switzerland',
							image: './img/content/homepage/all-countries/switzerland/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Switzerland',
							video: './img/content/homepage/all-countries/switzerland/slide_01.png'
						},
					]
				},
				{
					id: 6,
					slides: [
						{
							title: 'China',
							image: './img/content/homepage/all-countries/china/slide_01.png'
						},
						{
							title_sm: 'China',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Пекине? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'China',
							image: './img/content/homepage/all-countries/china/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'China',
							video: './img/content/homepage/all-countries/china/slide_01.png'
						},
					]
				},
				{
					id: 7,
					slides: [
						{
							title: 'Germany',
							image: './img/content/homepage/all-countries/germany/slide_01.png'
						},
						{
							title_sm: 'Germany',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Берлине? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Germany',
							image: './img/content/homepage/all-countries/germany/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Germany',
							video: './img/content/homepage/all-countries/germany/slide_01.png'
						},
					]
				},
				{
					id: 8,
					slides: [
						{
							title: 'Japan',
							image: './img/content/homepage/all-countries/japan/slide_01.png'
						},
						{
							title_sm: 'Japan',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Токио? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Japan',
							image: './img/content/homepage/all-countries/japan/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Japan',
							video: './img/content/homepage/all-countries/japan/slide_01.png'
						},
					]
				},
				{
					id: 9,
					slides: [
						{
							title: 'Australia',
							image: './img/content/homepage/all-countries/australia/slide_01.png'
						},
						{
							title_sm: 'Australia',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Канберре? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Australia',
							image: './img/content/homepage/all-countries/australia/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Australia',
							video: './img/content/homepage/all-countries/australia/slide_01.png'
						},
					]
				},
				{
					id: 10,
					slides: [
						{
							title: 'India',
							image: './img/content/homepage/all-countries/india/slide_01.png'
						},
						{
							title_sm: 'India',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Нью-Дели? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'India',
							image: './img/content/homepage/all-countries/india/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'India',
							video: './img/content/homepage/all-countries/india/slide_01.png'
						},
					]
				},
				{
					id: 11,
					slides: [
						{
							title: 'Finland',
							image: './img/content/homepage/all-countries/finland/slide_01.png'
						},
						{
							title_sm: 'Finland',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Хельсинки? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Finland',
							image: './img/content/homepage/all-countries/finland/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Finland',
							video: './img/content/homepage/all-countries/finland/slide_01.png'
						},
					]
				},
				{
					id: 12,
					slides: [
						{
							title: 'New Zealand',
							image: './img/content/homepage/all-countries/new_zealand/slide_01.png'
						},
						{
							title_sm: 'New Zealand',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Новой Зеландии? Потому что там снимали "Властелин колец"!',
							background: '#313336'
						},
						{
							title_sm: 'New Zealand',
							image: './img/content/homepage/all-countries/new_zealand/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'New Zealand',
							video: './img/content/homepage/all-countries/new_zealand/slide_01.png'
						},
					]
				}
			]
		},
		culture: {
			id: 2,
			isActive: false,
			title: 'Культура',
			mainCard: {
				title: 'Latin America',
				image: './img/content/homepage/all-countries/main-card.png',
				list: [
					'Honduras', 'Columbia', 'Panama', 'Brazil', 'Peru'
				]
			},
			cardList: [
				{
					id: 1,
					disabled: false,
					slides: [
						{
							title: 'Cuba',
							image: './img/content/homepage/all-countries/cuba/slide_01.png'
						},
						{
							title_sm: 'Cuba',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Гаване? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Cuba',
							image: './img/content/homepage/all-countries/cuba/slide_03.png',
							hasPopup: true
						},
						{
							title_sm: 'Cuba',
							video: './img/content/homepage/all-countries/cuba/slide_04.png'
						},
					]
				},
				{
					id: 2,
					disabled: false,
					slides: [
						{
							title: 'Russia',
							image: './img/content/homepage/all-countries/russia/slide_01.png'
						},
						{
							title_sm: 'Russia',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Москве? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Russia',
							image: './img/content/homepage/all-countries/russia/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Russia',
							video: './img/content/homepage/all-countries/russia/slide_01.png'
						},
					]
				},
				{
					id: 3,
					disabled: false,
					slides: [
						{
							title: 'England',
							image: './img/content/homepage/all-countries/england/slide_01.png'
						},
						{
							title_sm: 'England',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Лондоне? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'England',
							image: './img/content/homepage/all-countries/england/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'England',
							video: './img/content/homepage/all-countries/england/slide_01.png'
						},
					]
				},
				{
					id: 4,
					disabled: true,
					slides: [
						{
							title: 'Norway',
							image: './img/content/homepage/all-countries/norway/slide_01.png'
						},
						{
							title_sm: 'Norway',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Осло? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Norway',
							image: './img/content/homepage/all-countries/norway/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Norway',
							video: './img/content/homepage/all-countries/norway/slide_01.png'
						},
					]
				},
				{
					id: 5,
					disabled: true,
					slides: [
						{
							title: 'Switzerland',
							image: './img/content/homepage/all-countries/switzerland/slide_01.png'
						},
						{
							title_sm: 'Switzerland',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Берне? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Switzerland',
							image: './img/content/homepage/all-countries/switzerland/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Switzerland',
							video: './img/content/homepage/all-countries/switzerland/slide_01.png'
						},
					]
				},
				{
					id: 6,
					disabled: false,
					slides: [
						{
							title: 'China',
							image: './img/content/homepage/all-countries/china/slide_01.png'
						},
						{
							title_sm: 'China',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Пекине? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'China',
							image: './img/content/homepage/all-countries/china/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'China',
							video: './img/content/homepage/all-countries/china/slide_01.png'
						},
					]
				},
				{
					id: 7,
					disabled: false,
					slides: [
						{
							title: 'Germany',
							image: './img/content/homepage/all-countries/germany/slide_01.png'
						},
						{
							title_sm: 'Germany',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Берлине? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Germany',
							image: './img/content/homepage/all-countries/germany/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Germany',
							video: './img/content/homepage/all-countries/germany/slide_01.png'
						},
					]
				},
				{
					id: 8,
					disabled: false,
					slides: [
						{
							title: 'Japan',
							image: './img/content/homepage/all-countries/japan/slide_01.png'
						},
						{
							title_sm: 'Japan',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Токио? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Japan',
							image: './img/content/homepage/all-countries/japan/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Japan',
							video: './img/content/homepage/all-countries/japan/slide_01.png'
						},
					]
				},
				{
					id: 9,
					disabled: true,
					slides: [
						{
							title: 'Australia',
							image: './img/content/homepage/all-countries/australia/slide_01.png'
						},
						{
							title_sm: 'Australia',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Канберре? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Australia',
							image: './img/content/homepage/all-countries/australia/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Australia',
							video: './img/content/homepage/all-countries/australia/slide_01.png'
						},
					]
				},
				{
					id: 10,
					disabled: false,
					slides: [
						{
							title: 'India',
							image: './img/content/homepage/all-countries/india/slide_01.png'
						},
						{
							title_sm: 'India',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Нью-Дели? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'India',
							image: './img/content/homepage/all-countries/india/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'India',
							video: './img/content/homepage/all-countries/india/slide_01.png'
						},
					]
				},
				{
					id: 11,
					disabled: true,
					slides: [
						{
							title: 'Finland',
							image: './img/content/homepage/all-countries/finland/slide_01.png'
						},
						{
							title_sm: 'Finland',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Хельсинки? Потому что это свобода!',
							background: '#313336'
						},
						{
							title_sm: 'Finland',
							image: './img/content/homepage/all-countries/finland/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'Finland',
							video: './img/content/homepage/all-countries/finland/slide_01.png'
						},
					]
				},
				{
					id: 12,
					disabled: true,
					slides: [
						{
							title: 'New Zealand',
							image: './img/content/homepage/all-countries/new_zealand/slide_01.png'
						},
						{
							title_sm: 'New Zealand',
							text: 'Хэмингуэй, став весьма знаменитым, естественно, мог выбрать любое место в мире. Почему же он 22 года прожил в Новой Зеландии? Потому что там снимали "Властелин колец"!',
							background: '#313336'
						},
						{
							title_sm: 'New Zealand',
							image: './img/content/homepage/all-countries/new_zealand/slide_01.png',
							hasPopup: true
						},
						{
							title_sm: 'New Zealand',
							video: './img/content/homepage/all-countries/new_zealand/slide_01.png'
						},
					]
				}
			]
		},
		extreme: {
			id: 3,
			isActive: false,
			title: 'Экстрим',
			mainCard: null,
			cardList: []
		},
		atmosphere: {
			id: 4,
			isActive: false,
			title: 'Атмосфера',
			mainCard: null,
			cardList: []
		},
		people: {
			id: 5,
			isActive: false,
			title: 'Люди',
			mainCard: null,
			cardList: []
		}
	}
})

const getters = {
	getHomePageTabs: state => state.pageTabs,
	getHomePageImageModal: state => state.imageModal
}

const mutations = {
	'[homepage] SELECT_TAB': (state, tabId) => {
		const tabs = state.pageTabs

		for (const key in tabs) {
			tabs[key].isActive = tabs[key].id === tabId
		}
	},
	'[homepage] OPEN_IMAGE_MODAL': (state, image) => {
		state.imageModal.isActive = true
		state.imageModal.image = image
	},
	'[homepage] CLOSE_IMAGE_MODAL': (state) => {
		state.imageModal.isActive = false
		state.imageModal.image = null
	}
}

export default {
	state,
	getters,
	mutations
}
