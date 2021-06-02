module.exports = (_, page) => {
	page.previousPageId('numbersPage')
	page.nextPageId('collapsablePage')

	page.section('text', section => {
		section.textSetting('text')
		section.emailSetting('email')
		section.paragraphSetting('paragraph')
		section.passwordSetting('password').minLength(6)
	})

	page.section('footer', section => {
		section.pageSetting('indexPage')
		section.style('FOOTER')
	})
}
