export default {
	props: {
		entry: {
			required: false
		},

		collection: {
			required: true,
		},

		form: {
			type: Object,
			required: true,
		},

		loading: {
			type: Boolean,
			required: false,
		}
	},

	data() {
		return {
			editSlug: false,
			slugValue: '',
		}
	},

	computed: {
		sections() {
			let body = []
			let sidebar = []

			body = _.filter(this.collection.blueprint.sections, (section) =>
				section.placement == 'body')

			sidebar = _.filter(this.collection.blueprint.sections, (section) =>
				section.placement == 'sidebar')

			return { body, sidebar }
		}
	},

	methods: {
		openEdit() {
			this.slugValue = this.form.slug
			this.editSlug = true
			this.slugFocus()
		},

		closeEdit() {
			this.slugValue = ''
			this.editSlug = false
			this.editBtnFocus()
		},

		saveSlug() {
			if (this.slugValue === '') {
				this.slugValue = this.form.slug
			} else {
				this.form.slug = this.slugValue
			}

			this.closeEdit()
		},

		slugFocus() {
			this.$nextTick(() => {
				this.$refs.slug.$el.focus()
			})
		},

		editBtnFocus() {
			this.$nextTick(() => {
				this.$refs.edit.$el.focus()
			})
		}
	},
}