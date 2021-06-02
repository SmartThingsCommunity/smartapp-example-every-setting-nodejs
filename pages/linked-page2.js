module.exports = (_, page) => {
	page.nextPageId('linksPage')
	page.section('main', section => {
		section.modeSetting('enabledModes')
			.multiple(true)
	})
}
