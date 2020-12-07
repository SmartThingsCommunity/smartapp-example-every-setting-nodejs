# Every Setting Example

This SmartApp has multiple configuration pages that contain examples of all 
[setting types](https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/blob/master/docs/classes/_pages_section_d_.section.md)

## Start

To get going quickly with this example, we've provided a few options for hosting below. Follow any one of them to get the app up and accepting requests before moving on to further instructions.

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

[View logs](https://devcenter.heroku.com/articles/logging#log-retrieval-via-the-web-dashboard) in the Heroku dashboard.

### Glitch (no account required)

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/SmartThingsCommunity/smartapp-example-every-setting-nodejs)

[View logs](https://support.glitch.com/t/console-log-where-to-find-it/14456) in the Glitch editor.

### Local

We recommend using [ngrok](https://ngrok.com/) to create a globally available URL for fast testing.

`npm install`  
`npm start`  
`ngrok http 3001`

## Register

Follow the instructions for [registering a SmartApp](https://smartthings.developer.samsung.com/docs/smartapps/app-registration.html) with the SmartThings platform.

## Test

Follow the instructions for [testing a SmartApp](https://smartthings.developer.samsung.com/docs/testing/how-to-test.html).

## File Structure

* smartapp.js &mdash; the SmartApp implementation
* server.js &mdash; the Express server that hosts the SmartApp as a webhook
* locales/en.json &mdash; English version of the app configuration page text

