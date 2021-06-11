module.exports = (_, page) => {
	page.previousPageId('dynamicPage')
	page.nextPageId('indexPage')

	page.style('SPLASH')
	page.nextText('Continue') // setting nextText required for splash pages

	page.section('text', section => {
		section.paragraphSetting('paragraph')
	})

	page.section('image', section => {
		section.imageSetting('splashImage')
			.image('https://st-platformint-example-content.s3.us-east-2.amazonaws.com/image/wwst_dark.png')
	})
}
