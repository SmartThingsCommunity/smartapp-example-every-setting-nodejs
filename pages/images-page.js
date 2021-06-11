module.exports = (_, page) => {
	page.previousPageId('enumsPage')
	page.nextPageId('linksPage')

	page.section('image', section => {
		section.imageSetting('imageSetting')
			.image('https://st-platformint-example-content.s3.us-east-2.amazonaws.com/image/wwst_dark.png')
	})

	page.section('images', section => {
		section.imagesSetting('imagesSetting')
			.images([
				'https://st-platformint-example-content.s3.us-east-2.amazonaws.com/image/smarttag_4.png',
				'https://st-platformint-example-content.s3.us-east-2.amazonaws.com/image/smarttag_5.png',
				'https://st-platformint-example-content.s3.us-east-2.amazonaws.com/image/wwst_light.png'
			])
	})

	page.section('video', section => {
		section.videoSetting('video')
			.image('https://st-platformint-example-content.s3.us-east-2.amazonaws.com/image/no_worries_thumbnail.png')
			.video('https://st-platformint-example-content.s3.us-east-2.amazonaws.com/video/samsung_smartthings_no_worries.mp4')
	})

	page.section('footer', section => {
		section.pageSetting('indexPage')
		section.style('FOOTER')
	})
}
