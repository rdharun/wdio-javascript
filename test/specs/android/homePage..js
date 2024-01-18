
const { $ } = require('@wdio/globals')
const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends page {
    /**
     * define selectors using getter methods
     */
    get hamburgerMenu() {
        return $("~open menu")
    }

    get loginButtonFromSideMenu() {
        return $('~menu item log in"]')
    }

}



module.exports = new HomePage();
