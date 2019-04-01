//POM object
var wantedPOM = {}



module.exports = {
    beforeEach: browser => {
        wantedPOM = browser.page.wantedPage()
        wantedPOM.navigate()
    },
    after: browser => {
        wantedPOM.end()
    },
    'Verify load and version': browser => {
        wantedPOM
        .startCheck('Version 1.0')
    },
    'Submit a valid query Enter (Happy Path)': browser => {
        wantedPOM
        .click('@clickHam')
        .waitForElementPresent('@clickEnter',5000)
        .pause(5000)
        .click('@clickEnter')
        .setEnterFields('1234567890','ABC.','OAI123456','Harry Dresden','M','B','607','225','Brown','Arson','02312018') // want to modify this into an object to call
        .pause(5000)
        .click('@saveBtn')
        wantedPOM.expect.element('@validHdr').text.to.equal("Valid")
        wantedPOM.expect.element('@warMsg').text.to.equal("1234567890.ABC..OAI123456.Harry Dresden.M.B.607.225.Brown.Arson.2018-02-31......")

    },
    'Submit an invalid query Enter': browser => {
        wantedPOM
        .click('@clickHam')
        .waitForElementPresent('@clickEnter',5000)
        .pause(5000)
        .click('@clickEnter')
        .setEnterFields('102345678901233548977451125588784','4444','OAI12345$','Harry Dresden','M','B','6d','2lb','Brown$S','Arson','10312010')
        .pause(5000)
        .click('@saveBtn')
        .expect.element('@validHdr').text.to.equal("Errors Received:")
    },
    'Check for error messages Enter': browser => {
        wantedPOM
    },
    'Accepts Max values Enter': browser => {
        wantedPOM
    }
}