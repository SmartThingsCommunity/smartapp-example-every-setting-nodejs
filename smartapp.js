const SmartApp = require('@smartthings/smartapp')
const indexPage = require('./pages/index-page')
const devicesPage = require('./pages/devices-page')
const enumsPage = require('./pages/enums-page')
const imagesPage = require('./pages/images-page')
const linksPage = require('./pages/links-page')
const numbersPage = require('./pages/numbers-page')
const textPage = require('./pages/text-page')
const collapsablePage = require('./pages/collapsable-page')
const dynamicPage = require('./pages/dynamic-page')
const splashPage = require('./pages/splash-page')
const linkedPage1 = require('./pages/linked-page1')
const linkedPage2 = require('./pages/linked-page2')

/* Define the SmartApp */
const smartApp = new SmartApp()
	.disableCustomDisplayName()
	.enableEventLogging(2) // logs all lifecycle event requests/responses as pretty-printed JSON. Omit in production
	.configureI18n()
	.permissions(['r:devices:*', 'r:locations:*', 'r:scenes:*'])
	.appId('00000000-0000-0000-0000-000000000000')
	.page('indexPage', indexPage)
	.page('devicesPage', devicesPage)
	.page('enumsPage', enumsPage)
	.page('imagesPage', imagesPage)
	.page('linksPage', linksPage)
	.page('numbersPage', numbersPage)
	.page('textPage', textPage)
	.page('collapsablePage', collapsablePage)
	.page('dynamicPage', dynamicPage)
	.page('splashPage', splashPage)
	.page('linkedPage1', linkedPage1)
	.page('linkedPage2', linkedPage2)

module.exports = smartApp
