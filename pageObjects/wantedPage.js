var customCommands = {
    //Verify Welcomepage and Version
    startCheck: function (result) {
        this
            .verify.visible('@welcomeBan')
            .expect.element('@version').text.to.equal(result).before(5000)
        return this
    },

    //Happy search function
    setEnterFields: function (header, mke, oai, name, sex, race, height, weight, hair, offense, DoW, ) {
        this
            .setValue('@header', header)
            .setValue('@MKE', mke)
            .setValue('@OAI', oai)
            .setValue('@name', name)
            .click('@sex')
            .waitForElementVisible('@sexOpt' + sex, 5000)
            .click('@sexOpt' + sex)
            .click('@race')
            .waitForElementVisible('@raceOpt' + race, 5000)
            .click('@raceOpt' + race)
            .setValue('@height', height)
            .setValue('@weight', weight)
            .setValue('@hair', hair)
            .setValue('@offense', offense)
            .setValue('@DoW', DoW)
        return this
    },

    //Unhappy search function
    failSearch: function () {
        this
        this
        return this
    }
}

module.exports = {
    url: 'http://localhost:3000/#/',
    commands: [customCommands],
    elements: {
        version: {
            selector: '//h6[contains(text(),"Version 1.0")]',
            locateStrategy: 'xpath'
        },
        welcomeBan: '#welcomeScreen',
        clickHam: '.bm-burger-button',
        clickEnter: 'p[name="enterOption"]',
        clickHome: 'p[name="homeOption"]',
        clickModify: 'p[name="modifyOption"]',
        clickCancel: 'p[name="cancelOption"]',
        header: 'input[name="hdrInput"]',
        MKE: 'input[name="mkeInput"]',
        OAI: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',
        sex: 'input[name="sexInput"]',
        sexOptM: 'option[value="M"]',
        sexOptW: 'option[value="W"]', //won't work two selectors
        sexOptU: 'option[value="U"]', //won't work two selectors
        sexOptO: 'option[value="O"]',
        race: 'input[name="racInput"]',
        raceOptA: 'option[value="A"]',
        raceOptB: 'option[value="B"]',
        raceOptH: 'option[value="H"]',
        raceOptI: 'option[value="I"]',
        raceOptW: 'option[value="W"]', //won't work two selectors
        raceOptU: 'option[value="U"]', //won't work two selectors
        height: 'input[name="hgtInput"]',
        weight: 'input[name="wgtInput"]',
        hair: 'input[name="haiInput"]',
        offense: 'input[name="offInput"]',
        DoW: 'input[name="dowInput"]',
        DL: 'input[name="olnInput"]',
        DLST: 'input[name="olsInput"]',
        DLExp: 'input[name="oldInput"]',
        licp: 'input[name="licInput"]',
        licST: 'input[name="lisInput"]',
        licExp: 'input[name="lidInput"]',
        saveBtn: '#saveBtn',
        clearBtn: '#clearBtn',
        warrant: 'input[name="widInput"]',
        reason: 'input[name="resInput"]',
        cancelDate: 'input[name="datInput"]',
        validHdr: '#validHeader',
        warMsg:'span[name="queryBody"]'
    }
}