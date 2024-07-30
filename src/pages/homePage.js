const{expect} = require('@playwright/test');

class HomePage
{
    constructor(page)
    {
        this.page = page
        this.onenewslogo = "//img[@alt='1News']"

    }
    async checkOnenewsLogo()
    {
        await expect(this.page.locator(this.onenewslogo)).toBeVisible()
    } 
}
module.exports=HomePage;