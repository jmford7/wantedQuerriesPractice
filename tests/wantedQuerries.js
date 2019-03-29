module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000/#/')
            .waitForElementPresent('#versionNumber', 5000)
    },
    after: browser => {
        browser.end()
    },
}